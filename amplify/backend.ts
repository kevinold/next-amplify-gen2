import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource.js";
import { data } from "./data/resource.js";
import { LocationMapStack } from "./locationMapStack/resource.js";

const backend = defineBackend({
  auth,
  data,
});

const locationMap = new LocationMapStack(
  backend.createStack("LocationMapStack"),
  "LocationMapStack"
);

backend.addOutput({
  custom: {
    mapArn: locationMap.map.attrArn,
  },
});
