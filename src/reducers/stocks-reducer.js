const initialState = {
    matchingStocks : []
}

const stocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_MATCHING_STOCKS":
            return {
                matchingStocks: action.matchStocks
            }
        default:
            return state;
    }
}

export default stocksReducer;