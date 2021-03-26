const initialState = {
    trendStocks : [],
    matchingStocks : []
}

const stocksReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FIND_TRENDING_STOCKS":
            return {
                trendStocks: action.trendingStocks
            }
        // case "FIND_ALL_STOCKS":
        //     return {
        //         stocks: action.allStocks
        //     }
        case "FIND_MATCHING_STOCKS":
            return {
                matchingStocks: action.matchStocks
            }
        default:
            return state;
    }
}

export default stocksReducer;