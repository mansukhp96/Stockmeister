const CRYPTO_ALL_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false";

const findAllCoins = () => {
    return fetch(CRYPTO_ALL_URL).then((response) => {
        return response.json();
    })
}

const api = {
    findAllCoins
}

export default api;