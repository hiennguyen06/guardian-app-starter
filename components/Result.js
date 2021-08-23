import React from "react";

const Result = ({ result }) => {
    const date = result.date;
    const newDate = new Date(date);
    let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(newDate);
    let day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(newDate);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
        newDate
    );
    console.log(mo);

    console.log(newDate);
    return (
        <li className="result">
            <img src={`${result.image}`} alt={`${result.title}`} />
            <div className="result-info">
                <a href={result.url}>
                    {result.title}{" "}
                    <span>
                        ({day} {mo} {year})
                    </span>
                </a>
            </div>
        </li>
    );
};

export default Result;
