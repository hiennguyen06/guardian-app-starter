import React from "react";

const Result = ({ result }) => {
    return (
        <li className="result">
            <img src={`${result.image}`} alt={`${result.title}`} />
            <div className="result-info">
                <a href={result.url}>{result.title}</a>
            </div>
        </li>
    );
};

export default Result;
