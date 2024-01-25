"use client";

import { AuthUser } from "@aws-amplify/auth";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function Login({ user }: { user: AuthUser }) {
  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);
  return null;
}

export default withAuthenticator(Login);
