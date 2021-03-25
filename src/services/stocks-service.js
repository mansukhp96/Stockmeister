const STOCKS_TRENDING_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US";

const findTrendingStocks = () => {
    return fetch(STOCKS_TRENDING_URL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "dd2c68c0b8msh7a436aa8ec273d1p13d278jsnf1e7c9c3ac8f",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    }).then((response) => {
        return response.json();
    })
}

const api = {
    findTrendingStocks
}

export default api;