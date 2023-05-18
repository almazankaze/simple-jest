import {
  FETCH_ANIME_BY_SEARCH,
  LOADING,
  ERROR,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getSearchedAnime =
  (limit, offset, searchTerm) => async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const { data } = await api.fetchSearchedAnime(limit, offset, searchTerm);

      dispatch({ type: FETCH_ANIME_BY_SEARCH, payload: data });
    } catch (e) {
      dispatch({ type: ERROR });
    }
  };
