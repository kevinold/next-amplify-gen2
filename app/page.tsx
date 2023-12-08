import AmplifyAuthenticator from "@/components/AmplifyAuthenticator";

export default function Home() {
  return (
    <AmplifyAuthenticator>
    {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </AmplifyAuthenticator>
  )
}
