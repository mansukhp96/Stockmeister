const initialState = {
    stocks : []
}

const stocksReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FIND_TRENDING_STOCKS":
            return {
                stocks: action.trendingStocks
            }

        default:
            return state;
    }
}

export default stocksReducer;