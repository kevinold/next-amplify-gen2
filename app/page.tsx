"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";

import config from "@/amplifyconfiguration.json";
import TodoList from "@/components/TodoList";

Amplify.configure(config as any, { ssr: true });

function App() {
  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      <TodoList />
    </>
  );
}

export default withAuthenticator(App);
