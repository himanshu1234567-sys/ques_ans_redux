import { QUES_APP } from "./Constants";

const initialState = [];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case QUES_APP:
      return action.data;
    default:
      return state;
  }
}
