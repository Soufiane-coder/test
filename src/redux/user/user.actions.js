import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const addCoin = (user) => ({
  type: UserActionTypes.ADD_COIN,
  payload: user,
});
