import axios from "axios";
const TWLDATA_KEY = process.env.TWLDATA_APIKEY

export default axios.create({
    baseURL: "https://api.twelvedata.com/symbol_search?outputsize=120apikey=" + TWLDATA_KEY
})