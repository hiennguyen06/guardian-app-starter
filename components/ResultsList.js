import React from "react";
import Result from "./Result";

const ResultsList = ({ results, loading }) => {
    return (
        <div>
            <h2>{loading && "Loading stories..."}</h2>
            <h2>{results.length > 0 ? "Results" : ""}</h2>
            <ul className="results-container">
                {results.map((result) => {
                    return <Result key={result.id} result={result} />;
                })}
            </ul>
        </div>
    );
};

export default ResultsList;
