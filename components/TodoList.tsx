import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { revalidatePath } from "next/cache";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default async function TodoList() {
  const { data: todos } = await client.models.Todo.list();

  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    const { errors, data: newTodo } = await client.models.Todo.create({
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
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}
