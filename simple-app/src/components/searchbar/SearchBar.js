import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/anime?searchQuery=${searchTerm || "none"}&page=${1}`);
    }

    setSearchTerm("");
  };

  return (
    <div className="search-container">
      <form
        className="search-form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="search-input"
          placeholder="SEARCH"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className="search-btn" type="submit"></button>
      </form>
    </div>
  );
}

export default SearchBar;
