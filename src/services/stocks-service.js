const TWLDATA_KEY = process.env.TWLDATA_APIKEY
const YAHOO_KEY = process.env.YAHOO_APIKEY

const STOCKS_TRENDING_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US";
const STOCKS_ALL_URL = "https://api.twelvedata.com/stocks?country=United%20States&type=Common Stock";
const STOCKS_SEARCH_URL = "https://api.twelvedata.com/symbol_search?outputsize=120apikey=" + TWLDATA_KEY + "&symbol=";
//const STOCKS_SEARCH_URL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&apikey=GRYS5WKLUO2DAHSE&keywords=";


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

const findAllStocks = () => {
    return fetch(STOCKS_ALL_URL).then((response) => {
        return response.json();
    })
}

const findMatchingStocks = (keyword) => {
    return fetch(STOCKS_SEARCH_URL + keyword).then((response) => {
        return response.json();
    })
}

const api = {
    findTrendingStocks,
    findAllStocks,
    findMatchingStocks
}

export default api;