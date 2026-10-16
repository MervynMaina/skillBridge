import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Cannot Fetch Data!");
                    }
                    return response.json(); //parsing 
                })
                .then((data) => {
                    setAllData(data);
                    setLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }, 1000)
    }, [url]);

    return { allData, loading, error }

}
export default useFetch;