import * as AWS from "aws-sdk"
import { DocumentClient } from "aws-sdk/clients/dynamodb";

//For linux use http://localhost:8000
AWS.config.update({
    region: "us-east-1",
    dynamodb: {
        endpoint: process.env.STAGE === "dev" ? "http://docker.for.mac.localhost:8000" : undefined
    }
});

var docClient = new DocumentClient();

export const putItem = async (item: {}) => {
    let params = {
        TableName: process.env.TABLE_NAME,
        Item: item,
    }
    console.log("Adding new item:", JSON.stringify(params));
    return docClient.put(params).promise()
};

export const scan = async () => {
    let params = {
        TableName: process.env.TABLE_NAME,
    }
    console.log("Adding new item:", JSON.stringify(params));
    return docClient.scan(params).promise()
};
