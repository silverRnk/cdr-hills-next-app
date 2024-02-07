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

  export interface StudentProfileLong {
    id_number: number;
    name: string;
    gender: Gender;
    father_name: string;
    mother_name: string;
    date_of_birth: string;
    religion: string;
    father_occupation: string;
    e_mail: string;
    admission_date: string;
    class: string;
    section: string;
    status: StudentStatus;
    profile_img: string
  }