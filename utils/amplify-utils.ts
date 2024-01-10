import { type Schema } from "@/amplify/data/resource";
import config from "@/amplifyconfiguration.json";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config,
  cookies,
});
