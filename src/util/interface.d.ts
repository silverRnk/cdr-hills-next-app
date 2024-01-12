export interface FormInputLabel {
    name: string;
    label: string;
}

/**
 * Object for storing input value and validation state
 */
export interface FormInput {
    name: string;
    value: string | undefined;
    file?: FileList | undefined;
    isInvalid: boolean;
    feedbackMessage: string | undefined;
  }
  
  export interface FormValidationFeedback {
    message: string;
    isInvalid: boolean;
    isVisible: boolean;
  }

  export interface StudentProfileShort {
    std_id: string;
    std_name: string;
    std_gender: string;
    std_grade: string;
    std_section: string;
    std_status: string;
    std_date_of_birth: string;
    parents_phone: string;
  }