import { RoutinesActionTypes } from "./routines.types";

export const setCurrentRoutines = (routines) => ({
  type: RoutinesActionTypes.SET_CURRENT_ROUTINES,
  payload: routines,
});

export const checkRoutine = (taskId) => ({
  type: RoutinesActionTypes.CHECK_ROUTINE,
  payload: taskId,
});
