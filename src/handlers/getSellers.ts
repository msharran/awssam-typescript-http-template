import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";
import { docClient } from "../helpers/dynamodbDocClient"

export const lambdaHandler = async (_: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const sellers = (await getAllSellers()).Items
        return {
            'statusCode': 200,
            'body': JSON.stringify(sellers)
        };
    } catch (err) {
        console.log(err);
        return {
            'statusCode': 400,
            'body': JSON.stringify({ error: err.message })
        };
    }
}

export const getAllSellers = async () => {
    let params = {
        TableName: process.env.TABLE_NAME,
    }
    return docClient.scan(params).promise()
};
