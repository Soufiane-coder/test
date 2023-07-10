import { DisplayModeActionTypes } from "./display-mode.types";
import {displayMode} from '../../enums/displayModes';

const INITIAL_STATE = {
  displayMode: displayMode.dark,
};

const displayModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DisplayModeActionTypes.SET_DISPLAY_MODE:
      return {
        ...state,
        displayMode: action.payload
      };
    default:
      return state;
  }
};

export default displayModeReducer;
