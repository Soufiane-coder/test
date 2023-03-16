import { RoutinesActionTypes } from "./routines.types";

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
    case RoutinesActionTypes.LOAD_CURRENT_ROUTINES:
      return {
        ...state,
        routines: action.payload,
      };
    case RoutinesActionTypes.GET_ALL_NOTIFICATIONS:
      return {
        ...state,
        notifications: action,
      };
    default:
      return state;
  }
};

export default routinesReducer;
