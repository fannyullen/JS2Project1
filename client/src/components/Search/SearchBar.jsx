import { useState } from "react";
import { useNavigate } from "react-router";

function SearchBar() {
    // initial state is an empty string
    const [query, setQuery] = useState("");
    // Vi använder useNavigate för att navigera till sökresultatsidan
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // vi vill själva kontrollera hur formuläret submitteras
        e.preventDefault();
        // trim method = undvik tomma värden (removes leading and trailing white spaces)
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="search"
            value={query}
            // we set the query to the value that the user inputs into the input field
            // setQuery = det nya värdet blir det som användaren matar in i sökrutan. e.target.value är det värdet som användaren matar in, and we set the query (setQuery) to that value 
            // onChange = when the value in the input field changes
            // e = event
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="m-2 pl-2 border-l-2 border-[#f96c6c] hover:text-gray-600">Sök</button>
        </form>
    );

};

export default SearchBar;