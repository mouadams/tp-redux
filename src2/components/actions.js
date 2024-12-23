export const INCREMENT_VOTE = "INCREMENT_VOTE";
export const RESET_VOTES = "RESET_VOTES";
//export const ADD_OPTION = "ADD_OPTION";

export const incrementVote = (id) => ({
  type: INCREMENT_VOTE,
  payload: id,
});

export const resetVotes = () => ({
  type: RESET_VOTES,
});

/*export const addOption = (title) => ({
  type: ADD_OPTION,
  payload: title,
});*/