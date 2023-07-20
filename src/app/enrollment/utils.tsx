import { FormActions, FormInputReducer } from "@/components/forms/types";

type EnrollmentInputs =
  | "first_name"
  | "last_name"
  | "gender"
  | "dob"
  | "email"
  | "phone"
  | "grade"
  | "password"
  | "pass_confirmation"
  | "enrollee_type"
  | "father_name"
  | "mother_name"
  | "mother_occupation"
  | "father_occupation"
  | "guardian_email"
  | "guardian_phone"
  | "address"
  | "place_of_birth"
  | "prev_school";

export interface EnrollmentInput {
  name: string;
  label: string;
  required:boolean;
}

export const EnrollmentInputsLabel: Record<
  EnrollmentInputs,
  EnrollmentInput
> = {
  first_name: { label: "First Name", name: "first_name", required:true },
  last_name: { label: "Last Name", name: "last_name", required:true },
  gender: { label: "Gender", name: "gender", required:true },
  dob: { label: "Date of Birth", name: "date_of_birth", required:true },
  email: { label: "Email", name: "email", required:true },
  phone: { label: "Phone Number", name: "phone_no", required:false },
  password: { label: "Password", name: "password", required:true },
  pass_confirmation: {
    label: "Confirm Password",
    name: "password_confirmation",
    required:true
  },
  grade: { label: "Grade", name: "grade", required:false },
  enrollee_type: { label: "Enrollee Type", name: "enrollee_type", required:true },
  father_name: { label: "Father's Name", name: "fathers_name", required:true },
  mother_name: { label: "Mother's Name", name: "mothers_name", required:true },
  father_occupation: {
    label: "Father's Occupation",
    name: "fathers_occupation",
    required:false,
  },
  mother_occupation: {
    label: "Mother's Occupation",
    name: "mothers_occupation",
    required:false
  },
  guardian_email: {
    label: "Guardian's Email",
    name: "parents_email",
    required:false
  },
  guardian_phone: {
    label: "Guardian's Phone No.",
    name: "parents_phone",
    required:true
  },
  address: { label: "Address", name: "address", required:true },
  place_of_birth: { label: "Place of Birth", name: "place_of_birth", required:true },
  prev_school: { label: "Previous School", name: "prev_school", required: false },
};

export const formFieldsInitValue: Array<FormInputReducer> = Object.keys(
    EnrollmentInputsLabel
  ).map((key) => {
    return {
      name: EnrollmentInputsLabel[key as EnrollmentInputs]?.name,
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
    state: Array<FormInputReducer>,
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
