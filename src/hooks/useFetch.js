import { useState, useEffect } from "react";
export const useFetch = (apipath, queryTerm = "") => {
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    const [data, setData] = useState([]);



    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchMovies();
    }, [url])
    return (
        { data }
    )
}

