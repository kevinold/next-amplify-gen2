import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import {
  generateServerClientUsingCookies,
  generateServerClientUsingReqRes,
} from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";

import config from "@/amplifyconfiguration.json";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: config as any,
});

export const reqResClient = generateServerClientUsingReqRes({
  config: config as any,
});

export const cookiesClient = generateServerClientUsingCookies({
  config: config as any,
  cookies,
});
