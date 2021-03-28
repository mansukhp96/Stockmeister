import axios from "axios";

export default axios.create({
    baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/"
})