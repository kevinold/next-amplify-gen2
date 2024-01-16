"use client";

import {
  Authenticator,
  Text,
  View,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const components = {
  Header() {
    return (
      <View textAlign="center">
        <Text>Authenticator Header</Text>
      </View>
    );
  },
};

export function CustomAuthenticator() {
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);

  return (
    <Authenticator components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default function Login() {
  return (
    <Authenticator.Provider>
      <CustomAuthenticator />
    </Authenticator.Provider>
  );
}
