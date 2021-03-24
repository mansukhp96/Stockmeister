const CRYPTO_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page1&sparkline=false";

const findTrending = () => {
    return fetch(CRYPTO_URL).then((response) => {
        return response.json();
    })
}

const api = {
    findTrending
}

export default api;