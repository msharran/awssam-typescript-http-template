import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";
import { ulid } from "ulid"
import * as store from "../../helpers/store"

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        //TODO: Construct valid body and save in DynamoDB
        let seller = JSON.parse(event.body)
        seller = {
            ...seller,
            PK: "SELLER#" + ulid(),
            SK: "#PROFILE#" + ulid(),
        }

        await store.putItem(seller)
        console.log(":::::::::::::::::::end")
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