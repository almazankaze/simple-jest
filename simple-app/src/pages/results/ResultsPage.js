import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSearchedAnime } from "../../actions/anime";
import Pagination from "../../components/pagination/Pagination";
import ResultsHeader from "../../components/resultsHeader/ResultsHeader";

import "./results.css";
import LoadingCircle from "../../components/loader/LoadingCircle";

function ResultsPage() {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const navigate = useNavigate();

  let query = useQuery();

  let page = +query.get("page");
  if (page === 0) page = 1;

  const offset = page * 18 - 18;

  let searchQuery = query.get("searchQuery");
  if (searchQuery === null) searchQuery = "";

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery === "") {
      dispatch(getSearchedAnime(18, offset, "naruto"));
    } else if (page < 0) {
      navigate("/notfound");
    } else {
      dispatch(getSearchedAnime(18, offset, searchQuery));
    }
  }, [dispatch, offset, navigate, page, searchQuery]);

  const results = useSelector((state) => state.anime);

  if (results.status >= 500) navigate("/error");

  if (results.loading)
    return (
      <div>
        <LoadingCircle />
      </div>
    );
  if (results.count === 0)
    return (
      <div>
        <ResultsHeader numResults={0} />
        <h1>No Results Found</h1>
      </div>
    );
  return (
    <div>
      <ResultsHeader numResults={results.count} />
      <Pagination
        currentPage={page}
        pages={Math.ceil(results.count / 18)}
        path={`?searchQuery=${searchQuery}&`}
        loading={results.loading}
      />
    </div>
  );
}

export default ResultsPage;
