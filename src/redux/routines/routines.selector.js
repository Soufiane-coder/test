import { createSelector } from "reselect";

const selectRoutines = (state) => state.routines;

const selectNotifications = (state) => state.notifications;

export const selectCurrentRoutines = createSelector(
  [selectRoutines],
  (routines) => routines.routineCollection
);

export const selectCurrentNotifications = createSelector(
  [selectNotifications],
  (routines) =>
    routines.reduce((accum, routine) => {
      routine.submitted === "1" ? ++accum : accum;
    }, 0)
);
