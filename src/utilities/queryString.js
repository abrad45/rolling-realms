import qs from "query-string";
import Round from "../models/Round";
import Minigame from "../models/Minigame";

export const setQueryStringValue = (rounds) => {
  const roundString = rounds.reduce(
    (queryStringAccumulator, round) => {
      return `${queryStringAccumulator}${round.id}=${
        round.minigame.slug
      }${round.id === "3c" ? "" : "&"}`;
    },
    "?",
  );

  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${roundString}`;
  window.history.replaceState(newurl, "", newurl);
};

export const setRoundsUsingQueryString = (setRounds) => {
  const parsedQueryString = qs.parse(window.location.search);

  // Short circuit if the querystring doesn't have 9 entries
  if (Object.keys(parsedQueryString).length !== 9) {
    return;
  }

  const newRounds = Object.keys(parsedQueryString).map((key) => {
    const minigameSlug = parsedQueryString[key];
    const thisRound = new Round(
      key,
      new Minigame(undefined, undefined, minigameSlug),
    );
    return thisRound;
  });

  setRounds(newRounds);
};
