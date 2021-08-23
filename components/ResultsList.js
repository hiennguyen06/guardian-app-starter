import React from "react";
import Result from "./Result";

const ResultsList = ({ results, loading }) => {
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {results.length > 0 && <h2>Results</h2>}
            <ul className="results-container">
                {results.map((result) => {
                    return <Result key={result.id} result={result} />;
                })}
            </ul>
        </div>
    );
};

export default ResultsList;
