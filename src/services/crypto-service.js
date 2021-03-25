const CRYPTO_TRENDING_100 = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const CRYPTO_ALL_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false";

const findTrending = () => {
    return fetch(CRYPTO_TRENDING_100).then((response) => {
        return response.json();
    })
}

const findAllCoins = () => {
    return fetch(CRYPTO_ALL_URL).then((response) => {
        return response.json();
    })
}

const api = {
    findTrending,
    findAllCoins
}

export default api;