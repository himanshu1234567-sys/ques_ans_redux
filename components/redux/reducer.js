import { QUES_APP, QUES_APP_WITH_OPTION } from "./Constants";

const initialState = {
    quiz: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case QUES_APP:
      return action.data;
      case QUES_APP_WITH_OPTION:
        return action.data
    default:
      return state;
  }
}
