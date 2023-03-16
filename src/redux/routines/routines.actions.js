import { RoutinesActionTypes } from "./routines.types";

export const setCurrentRoutines = (routines) => ({
  type: RoutinesActionTypes.SET_CURRENT_ROUTINES,
  payload: routines,
});

export const loadCurrentRoutines = (state) => ({
  type: RoutinesActionTypes.LOAD_CURRENT_ROUTINES,
  payload: state.routines,
});

export const getAllNotifications = (state) => ({
  type: RoutinesActionTypes.GET_ALL_NOTIFICATIONS,
  payload: state.routines,
});
