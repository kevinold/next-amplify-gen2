"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    redirect("/");
  }, []);
  return null;
}

export default withAuthenticator(Login);
