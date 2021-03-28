const TWLDATA_KEY = process.env.TWLDATA_APIKEY

const STOCKS_SEARCH_URL = "https://api.twelvedata.com/symbol_search?outputsize=120apikey=" + TWLDATA_KEY + "&symbol=";
//const STOCKS_SEARCH_URL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&apikey=GRYS5WKLUO2DAHSE&keywords=";

const findMatchingStocks = (keyword) => {
    return fetch(STOCKS_SEARCH_URL + keyword).then((response) => {
        return response.json();
    })
}

const api = {
    findMatchingStocks
}

export default api;