export const lambdaHandler = async (event: any): Promise<any> => {
    let response = {
        "isAuthorized": false,
        "context": {
            "stringKey": "value",
            "numberKey": 1,
            "booleanKey": true,
            "arrayKey": ["value1", "value2"],
            "mapKey": { "value1": "value2" }
        }
    };

    console.error("::::::::::::::::::::::::::: errorrrrrrrrrrrrrr");
    console.error(":::::::::::::::::::::::::::", JSON.stringify(event.body));


    if (event.headers.Authorization === "secretToken") {
        response = {
            "isAuthorized": true,
            "context": {
                "stringKey": "value",
                "numberKey": 1,
                "booleanKey": true,
                "arrayKey": ["value1", "value"],
                "mapKey": { "value1": "value" }
            }
        };
    }
    return response;
}