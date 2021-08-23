import React from "react";

const Search = ({ term, setTerm, doSearch }) => {
    return (
        <div className="search-container">
            <h1>Guardian Search</h1>
            <div>
                <input
                    value={term}
                    onChange={(evt) => setTerm(evt.target.value)}
                    placeholder="Seach a term i.e. sport"
                />
                <button disabled={!term} onClick={() => doSearch()}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
