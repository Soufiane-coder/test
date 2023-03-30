import { createSelector } from "reselect";

const selectRoutines = (state) => state.routines;

export const selectCurrentRoutines = createSelector(
  [selectRoutines],
  (routines) => routines.routines
);
