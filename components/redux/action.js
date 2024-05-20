import { QUES_APP } from "./Constants";

export function que_action_App(data) {
  return {
    type: QUES_APP,
    data: data,
  };
}
