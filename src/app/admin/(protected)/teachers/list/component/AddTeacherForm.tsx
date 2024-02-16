'use client'
import React, {
    createRef,
    useReducer,
    useState,
  } from "react";
  import styled from "styled-components";
  import DefaultImg from "../../../assets/profile_default.svg";
  // import axiosClient from "../../../utils/AxiosClient";

  import { Label, Input, Selection, Option } from "../../../compenents/forms/Forms";
  import { PageContainer } from "../../../compenents/style-components/PageStyleComponents";
//   imort {}

  import { Path, UseControllerProps, UseFormRegister, useController, useForm } from "react-hook-form";

  const Container = styled.div`
    height: 90vh;
    overflow-y: scroll;
  `;
  
  const Title = styled.h1`
    ${(props) => props.theme.fontThemes.h2}
  `;
  const Reminder = styled.p`
    font-size: 0.75rem;
    color: gray;
  `;
  const Form = styled.form`
    width: 100%;
  `;
  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  `;
  
  const FormSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
  `;
  const SectionTitle = styled.h2`
    ${(props) => props.theme.fontThemes.h4}
  `;
  
  const InputItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `;
  // const Label = styled.label``;
  // const Input = styled.input<AddStudentProps>`
  //   height: 30px;
  //   padding: 5px;
  //   border-radius: 2px;
  //   border: 1px solid ${(props) => (props.isInvalid ? "red" : "gray")};
  //   box-shadow: 0 0 0
  //     ${(props) => (props.isInvalid ? "2px red" : "0px transparent")};
  // `;
  const ValidationFeedback = styled.small<ValidationProps>`
    min-height: 20px;
    font-weight: 400;
    margin-top: 2px;
    margin-left: 5px;
    visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
    color: ${(props) => (props.isInvalid ? "red" : "gray")};
  `;
  const IsRequiredIndicator = styled.span`
    color: red;
  `;
  
  const InputRow = styled.div`
    display: flex;
    gap: 20px;
  `;
  // const Selection = styled.select<AddStudentProps>`
  //   padding-left: 5px;
  //   height: 30px;
  //   border-radius: 2px;
  //   border: 1px solid ${(props) => (props.isInvalid ? "red" : "gray")};
  // `;
  // const Option = styled.option``;
  const StudentImage = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 10px;
  `;
  const Image = styled.img`
    height: 200px;
    width: 200px;
    background-color: aqua;
    border-radius: 50%;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `;
  const Button = styled.button`
    width: 100px;
    height: 50px;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) =>
      props.type === "reset" && props.theme.colors.primary};
    margin-right: 20px;
  
    &:active {
      filter: brightness(85%);
    }
  `;

  enum Gender {
    Male,
    Female,
    Other
  }

  type AddTeacherInput = {
    firstName: string,
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

  interface InputProps {
    label:string,
    required:boolean,
    isInvalid?: boolean,
    errorMessage?:string
  }

  type EInputProps = UseControllerProps<AddTeacherInput> & InputProps

  interface ValidationProps {
    isInvalid?: boolean,
    isVisible?: boolean,
  }

  const InputField = (prop: EInputProps) => {
      const {field, fieldState} = useController(prop as UseControllerProps<AddTeacherInput>)
      const {label, required} = prop

    return(
    <>
      <InputItem>
        <Label>{label}<IsRequired isRequired={required} /></Label>
        <Input {...field}/>
        <ValidationFeedback isInvalid={fieldState.invalid} 
        isVisible={fieldState.invalid}>{fieldState.error?.message}</ValidationFeedback>
      </InputItem>
    </>
    )
  }
  
  const IsRequired = (prop:{isRequired: boolean}) => {
    return (
      <IsRequiredIndicator>{prop.isRequired ? "*" : ""}</IsRequiredIndicator>
    );
  };
  
  const AddTeacher = () => {
    const formRef = createRef<HTMLFormElement>();
    const teacherPhotoRef = createRef<HTMLInputElement>();
    const {register, formState:{errors}, control} = useForm<AddTeacherInput>();
  
    const [profileImage, setProfileImage] = useState<
      string | ArrayBuffer | null
    >("");
  
    const handlerForm = (e: any) => {
      
    };
  
    const handlerSelectImg = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
  
      reader.readAsDataURL(e.target.files[0]);
    };
  
    const handleFormInput = (e: React.ChangeEvent<HTMLFormElement>) => {
      
    };
  
    const getFormInput = (name: string) => {
      return formInputs.filter((form) => form.name === name)[0];
    };
  
    return (
      <Container>
        <Form
          ref={formRef}
          onSubmit={handlerForm}
          onInput={handleFormInput}
          method="post"
        >
          <Title>Add Teacher</Title>
          <Reminder>Required(*)</Reminder>
  
          <InputContainer>
            <FormSection>
              <SectionTitle>Teacher Info</SectionTitle>
              <InputRow>
                <InputField label="First Name" name="firstName" control={control} required/>
                <InputField label="Last Name" name="lastName" control={control} required/>
              </InputRow>
  
              <InputRow>
              <InputField label="Gender" name="gender" control={control} required/>
              <InputField label="Gender" name="gender" control={control} required/>              
              </InputRow>

              <InputRow>
                <InputField label="Gender" name="gender" control={control} required/>
                <InputField label="Gender" name="gender" control={control} required/>
              </InputRow>
              
              
              
              <InputRow>
                <InputField label="Gender" name="gender" control={control} required/>
                <InputField label="Gender" name="gender" control={control} required/>
              </InputRow>
  
              <InputRow>
                <InputField label="Gender" name="gender" control={control} required/>
                <InputField label="Gender" name="gender" control={control} required/>
              </InputRow>
  
              <InputRow>
                <InputField label="Gender" name="gender" control={control} required/>
                <InputField label="Gender" name="gender" control={control} required/>
              </InputRow>
            </FormSection>
  
            <StudentImage>
              <Image
                alt="student_img"
              />
  
              <InputItem>
                {/* <Label htmlFor={FormField.profile_img.name}>
                  {FormField.profile_img.label}
                </Label> */}
                <Input
                  ref={teacherPhotoRef}
                  style={{border: "unset"}}
                  type="file"
                                  />
                {/* <ValidationFeedback
                  isVisible={
                    getFormInput(FormField.profile_img.name).isInvalid
                  }
                  isInvalid={
                    getFormInput(FormField.profile_img.name).isInvalid
                  }
                >
                  {
                    getFormInput(FormField.profile_img.name)
                      .feedbackMessage
                  }
                </ValidationFeedback> */}
              </InputItem>
            </StudentImage>
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">Save</Button>
            <Button type="reset">Reset</Button>
          </ButtonContainer>
        </Form>
      </Container>
    );
  };
  
  export default AddTeacher;
  