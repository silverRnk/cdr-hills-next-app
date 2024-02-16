import { Gender } from "@/util/types"

export type AddTeacherInput = {
    firstName: string,
    middleName:string,
    lastName: string,
    gender: Gender,
    dateOfBirth: string,
    addr1: string,
    addr2: string,
    religion: string,
    email:string,
    phone:string,
    password: string,
    passwordConfirmation:string,
    class:string,
    admissionData:string
  }