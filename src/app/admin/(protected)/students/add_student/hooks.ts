import { FormActions } from "@/util/types";
import { AddStudentInput, addStudentLabels } from "./form_lable";
import { FormInput } from "@/util/interface";

export const formFieldsInitValue: Array<FormInput> = Object.keys(
    addStudentLabels
  ).map((key: string) => {
    return {
      name: addStudentLabels[key as AddStudentInput]?.name,
      value: "",
      isInvalid: false,
      feedbackMessage: "",
    };
});

/**
 * handles AddStudentForm input value and validation state of
 * the input
 * @param state  - state of the reducer
 * @param action -
 * @returns
 */
export const formFieldsReducer = (
    state: Array<FormInput>,
    action: {
      type: FormActions;
      name: string;
      value?: string | undefined;
      file?: FileList | undefined;
      feedbackMessage?: string;
    }
  ) => {
    switch (action.type) {
      case "INPUT":
        return state.map((form) => {
          return form.name === action.name
            ? { ...form, value: action.value }
            : form;
        });
      case "INVALID":
        return state.map((form) => {
          return form.name === action.name
            ? {
                ...form,
                isInvalid: true,
                feedbackMessage: action.feedbackMessage,
              }
            : form;
        });
      case "RESET_INVALID":
        return state.map((form) => {
          return { ...form, isInvalid: false, feedbackMessage: "" };
        });
      default:
        return state;
    }
  };