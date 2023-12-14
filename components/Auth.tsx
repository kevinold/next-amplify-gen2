"use client";

import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
Amplify.configure(config, { ssr: true });

export default function Auth({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Authenticator>{children}</Authenticator>
    </ThemeProvider>
  );
}
