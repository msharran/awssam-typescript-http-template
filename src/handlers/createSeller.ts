import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";
import { ulid } from "ulid"
import { docClient } from "../helpers/dynamodbDocClient"

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        //TODO: Construct valid body and save in DynamoDB
        let seller = JSON.parse(event.body)
        seller = {
            ...seller,
            PK: "SELLER#" + ulid(),
            SK: "#PROFILE#" + ulid(),
        }

        await createSeller(seller)
        return {
            'statusCode': 201,
            'body': JSON.stringify(seller)
        };
    } catch (err) {
        console.log(err.message);
        return {
            'statusCode': 400,
            'body': JSON.stringify({ error: err.message })
        };
    }
}

export const createSeller = async (item: {}) => {
    let params = {
        TableName: process.env.TABLE_NAME,
        Item: item,
    }
    console.log("Adding new item:", JSON.stringify(params));
    return docClient.put(params).promise()
};