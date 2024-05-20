import { QUES_APP, QUES_APP_WITH_OPTION } from "./Constants";

export function que_action_App(data) {
  return {
    type: QUES_APP,
    data: data,
  };
}

export function que_action_Options(data) {
    return {
      type: QUES_APP_WITH_OPTION,
      data: data,
    };
  }
  