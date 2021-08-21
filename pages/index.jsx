import React, { useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import ResultsList from "../components/ResultsList";

const IndexPage = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const doSearch = async () => {
        try {
            if (term) {
                setLoading(true);
                const resultSet = await axios.get("/api/search", {
                    params: {
                        term: term,
                    },
                });
                setResults(resultSet.data);
                setTerm("");
            }
        } catch (error) {
            alert(error);
        }
        setLoading(false);
    };

    return (
        <div>
            <Search term={term} setTerm={setTerm} doSearch={doSearch} />
            <ResultsList results={results} loading={loading} />
        </div>
    );
};

export default IndexPage;
