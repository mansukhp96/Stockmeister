const initialState = {
    cryptoCoins : []
}

const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FIND_TRENDING_COINS":
            return {
                cryptoCoins: action.trendingCoins
            }
        case "FIND_ALL_COINS":
            return {
                cryptoCoins: action.allCoins
            }

        default:
            return state;
    }
}

export default cryptoReducer;