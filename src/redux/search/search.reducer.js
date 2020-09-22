import { searchActionTypes } from "./search.types";

//TODO remove searchText or switch this over to filtering inside the react componenent
const INITIAL_STATE = {
  isHidden: true,
  searchText: ""
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.TOGGLE_SEARCH:
      return {
        ...state,
        isHidden: !state.isHidden
      };

    default:
      return state;
  }
};

export default searchReducer;
