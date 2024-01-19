import { cookiesClient } from "@/utils/amplify-utils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { revalidatePath } from "next/cache";

async function App() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { data: todos } = await cookiesClient.models.Todo.list();

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
    <>
      <h1>Hello, Amplify 👋</h1>
      {user && <button onClick={signOut}>Sign Out</button>}
      <form action={addTodo}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </ul>
    </>
  );
}

export default App;
