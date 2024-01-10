import { cookiesClient } from "@/utils/amplify-utils";
import { revalidatePath } from "next/cache";

export default async function TodoList() {
  const { data, errors } = await cookiesClient.models.Todo.list();

  const todos = data;

  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    await cookiesClient.models.Todo.create({
      content: title,
      done: false,
      priority: "medium",
    });
    revalidatePath("/");
  }

  return (
    <div>
      <h1>Todos</h1>
      <form action={addTodo}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </ul>
    </div>
  );
}
