import axios from "axios";

export default axios.create({
    baseURL: "https://newscatcher.p.rapidapi.com/v1/"
})