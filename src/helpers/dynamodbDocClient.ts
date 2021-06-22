import * as AWS from "aws-sdk"
import { DocumentClient } from "aws-sdk/clients/dynamodb";

//For linux use http://localhost:8000
AWS.config.update({
    region: "us-east-1",
    dynamodb: {
        endpoint: process.env.STAGE === "dev" ? "http://docker.for.mac.localhost:8000" : undefined
    }
});

export var docClient = new DocumentClient();