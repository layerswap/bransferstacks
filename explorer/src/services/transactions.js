export const getAll = () => {

    //TODO implement fetch with pagination
    const result = [
        {
            time: "2021-04-15 19:03",
            asset: "LTC",
            amount: "0.95",
            destination: "Ld8TvJqxnZR5ZPCSXadMRCFhceAGMwZbTo",
            status: "Completed"
        },
        {
            time: "2021-04-16 13:03",
            asset: "LTC",
            amount: "1.33",
            destination: "Ld8TvJqxnZR5ZPCSXadMRCFhceAGMwZbTo",
            status: "Completed"
        },
    ]
    
    return new Promise(function(resolve) {
        return resolve(result)
    });

}