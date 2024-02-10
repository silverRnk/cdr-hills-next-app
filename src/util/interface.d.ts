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

  export interface TeacherProfileShort {
    teacher_id: string,
    teacher_name: string,
    teacher_gender: Gender,
    teacher_advisory_class: string,
    teacher_address: string,
    teacher_dob: string,
    teacher_phone: string
  } 

  export export interface TeacherProfileLong {
    teacher_id: string,
    teacher_name: string
    teacher_gender: Gender,
    teacher_date_of_birth: string | Date,
    teacher_address: string,
    teacher_religion: string,
    teacher_email: string,
    teacher_phone: string,
    teacher_advisory_class: string,
    teacher_admission_date: string
    teacher_profile_img: string
  }


  export interface GradeLevels {
    grade_level_id: string;
    level: number;
    grade_level: string;
    sections: Section[];
  }
  
  export interface Section {
    id: number;
    section_name: string;
  }





  // Tables

  export interface ColumnHeader {
    id: string;
    label: string;
    minWidth: number;
    align?: string | null;
    format?: () => any | null;
  }