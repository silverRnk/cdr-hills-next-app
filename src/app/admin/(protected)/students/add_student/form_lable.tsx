import { FormInputLabel } from "@/util/interface"

export type AddStudentInput = 'std_first_name'
         | 'std_last_name'
         | 'std_gender' 
         | 'std_dob'
         | 'std_religion'
         | 'std_email'
         | 'std_phone'
         | 'std_grade'
         | 'std_section'
         | 'std_password'
         | 'std_passconf'
         | 'std_photo'
         | 'guardians_first_name'
         | 'guardians_last_name'
         | 'guardians_occupation'
         | 'guardians_religion'
         | 'guardians_email'
         | 'guardians_phone'


export const addStudentLabels: Record<AddStudentInput, FormInputLabel> = {
    std_first_name: {label: 'First Name', name: 'std_first_name'},
    std_last_name: {label: 'Last Name', name: 'std_last_name'},
    std_gender: {label: 'Gender', name: 'std_gender'},
    std_dob: {label: 'Date of Birth', name: 'std_date_of_birth'},
    std_religion: {label: 'Religion', name: 'std_religion'},
    std_email: {label: 'Email', name: 'std_email'},
    std_phone: {label: 'Phone Number', name: 'std_phone'},
    std_password: {label: 'Password', name: 'std_password'},
    std_passconf: {label: 'Password Confirmation', name: 'std_password_confirmation'},
    std_grade: {label: 'Grade', name: 'std_grade'},
    std_section: {label: 'Section', name: 'std_section'},
    std_photo: {label: 'Profile Image', name: 'std_photo'},
    guardians_first_name: {label: "Guardian\'s First Name", name:'guardians_first_name'},
    guardians_last_name: {label: "Guardian\'s Last Name", name: 'guardians_last_name'},
    guardians_occupation: {label: "Guardian\'s Occupation", name: 'guardians_occupation'},
    guardians_religion: {label: "Guardian\'s Religion", name: 'guardian_religion'},
    guardians_email: {label: "Guardian\'s Email", name: 'guardian_email'},
    guardians_phone: {label: "Guardian\'s Phone Number", name: 'guardian_phone'}

}