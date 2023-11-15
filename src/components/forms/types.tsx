/**
 * Object for storing input value and validation state
 */
export interface FormInputReducer {
    name: string;
    value: string | undefined;
    file?: FileList| undefined;
    isInvalid: boolean;
    feedbackMessage: string | undefined;
  }
  
  /**
   * INPUT handles storing to the state the value during input event.
   * INVALID handles invalid feedback during error 422 response
   * RESET_INVALID reset isInvalid and feedbackMessage to init state
   */
  export type FormActions = "INPUT" | "INVALID" | "RESET_INVALID";
  