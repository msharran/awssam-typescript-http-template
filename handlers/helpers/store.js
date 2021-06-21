var AWS = require("aws-sdk");

AWS.config.update({ region: process.env.USERS_TABLE_REGION });

var docClient = new AWS.DynamoDB.DocumentClient();
exports.putItem = async (item) => {
    let params = {
        TableName: process.env.USERS_TABLE,
        Item: item,
    }
    console.log("Adding new item:", JSON.stringify(params));
    const data = docClient.put(params).promise()
    console.log("Added item:", JSON.stringify(data));
    return data
};