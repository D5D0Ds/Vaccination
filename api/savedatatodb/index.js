module.exports = async function (context, req) {
    context.log('Vaccine Registration Microservice');

    /*
    {
        "PartitionKey": "vaccine",
        "RowKey": "a@gmail.com",
        "Name": "Rogerio",
        "Vendor": "Astra-Zeneca"
    }
    */
    
    try {

        context.bindings.tablevaccination = [];
        context.bindings.tablevaccination.push(req.body);        
        context.res = {
            status: 200,
            body: "Successful Saved"
        };

    } catch (error) {

        context.res = {
            status: 409,
            body: "Some Error Occurred"
        };
    }
}