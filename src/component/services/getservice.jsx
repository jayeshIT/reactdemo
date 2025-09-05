import axios from "axios";

const api = axios.create({
    baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=c71576d&s=troy&page=1"
});

export const getMoviesList = () => {
    return api.get("");
}