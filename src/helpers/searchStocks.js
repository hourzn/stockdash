const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = 'cdfftt2ad3i8a4q9254gcdfftt2ad3i8a4q92550';
const finnhubClient = new finnhub.DefaultApi();

export default function searchStocks(search) {
    search = search.toUpperCase();
    return finnhubClient.symbolSearch('AAPL', (error, data, response) => {
        console.log(data);
    });
}
