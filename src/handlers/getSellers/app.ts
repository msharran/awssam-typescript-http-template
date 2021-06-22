import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";
import * as store from "../../helpers/store"

export const lambdaHandler = async (_: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const sellers = (await store.scan()).Items
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