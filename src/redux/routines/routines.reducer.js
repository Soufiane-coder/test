import { RoutinesActionTypes } from "./routines.types";
import { checkRoutine } from "./routines.utils";

const INITIAL_STATE = {
  routines: null,
  notifications: 0,
};

const routinesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoutinesActionTypes.SET_CURRENT_ROUTINES:
      return {
        ...state,
        routines: action.payload,
      };
    case RoutinesActionTypes.CHECK_ROUTINE:
      return {
        ...state,
        routines: checkRoutine(state.routines, action.payload),
      };
    default:
      return state;
  }
};

export default routinesReducer;
