import { config, DynamoDB } from "aws-sdk"

config.update({ region: process.env.TABLE_REGION });

var docClient = new DynamoDB.DocumentClient();

export const putItem = async (item: {}): Promise<any> => {
    let params = {
        TableName: process.env.TABLE_NAME,
        Item: item,
    }
    console.log("Adding new item:", JSON.stringify(params));
    const data = docClient.put(params).promise()
    console.log("Added item:", JSON.stringify(data));
    return data
};
