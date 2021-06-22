const store = require('./helpers/store')
const ULID = require('ulid')
let response;
exports.lambdaHandler = async (event) => {
    try {
        //TODO: Construct valid body and save in DynamoDB
        let seller = JSON.parse(event.body)
        seller = {
            ...seller,
            PK: "SELLER#" + ULID.ulid(),
            SK: "#PROFILE#" + ULID.ulid(),
        }

        await store.putItem(seller)
        return {
            'statusCode': 200,
            'body': JSON.stringify(seller)
        };
    } catch (err) {
        console.log(err);
        return {
            'statusCode': 400,
            'body': JSON.stringify({ error: err.message })
        };
    }
};
