import { Stack, StackProps } from "aws-cdk-lib";
import * as locations from "aws-cdk-lib/aws-location";
import { Construct } from "constructs";

export class LocationMapStack extends Stack {
  public readonly map: locations.CfnMap;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create the map resource
    this.map = new locations.CfnMap(this, "LocationMap", {
      configuration: {
        style: "VectorEsriStreets", // map style
      },
      description: "My Location Map",
      mapName: `MyMap${id}`,
    });

    // backend.addOutput({custom:{
    //   value: this.map.attrArn,
    //   exportName: "mapArn",
    // }});
  }
}
