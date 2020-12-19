import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  //Fecth Axios
  const popularData = await axios.get(popularGamesURL());
  const UpcomingData = await axios.get(upcomingGamesURL());
  const newGameData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: UpcomingData.data.results,
      newGames: newGameData.data.results,
    },
  });
};
