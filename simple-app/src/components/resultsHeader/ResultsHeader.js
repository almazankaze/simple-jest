import { Link } from "react-router-dom";
import "./resultsHeader.css";

function ResultsHeader({ numResults }) {
  return (
    <div className="resultsHeader">
      <p>
        {numResults} {numResults === 1 ? "result found" : "results found"}
      </p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default ResultsHeader;
