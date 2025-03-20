import { useState } from "react";
import { useNavigate } from "react-router";

function SearchBar() {
    // initial state is an empty string
    const [query, setQuery] = useState("");
    // Vi använder useNavigate för att navigera till sökresultatsidan
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="m-2 pl-2 border-l-2 border-[#f96c6c] hover:text-gray-600">Sök</button>
        </form>
    );

};

export default SearchBar;