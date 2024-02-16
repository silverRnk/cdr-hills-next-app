'use client'
import React, {
    createRef,
    useState,
} from "react";
import styled from "styled-components";

import { Label, Input} from "@/styled-component/form-components";
import { PageContainer } from "@/styled-component/Containers"

import { Path, UseControllerProps, UseFormRegister, useController, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { teacherSchema } from "./schema";
import { AddTeacherInput } from "./type";
import SelectionOptions from "./components/Selection";


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

  interface InputProps {
    label:string,
    required?:boolean,
    isInvalid?: boolean,
    errorMessage?:string
  }

  type EInputProps = UseControllerProps<AddTeacherInput> & InputProps

  interface ValidationProps {
    isInvalid?: boolean,
    isVisible?: boolean,
  }

  const DatePicker = (prop:EInputProps) => {
    const {field, fieldState} = useController(prop as UseControllerProps<AddTeacherInput>)
      const {label, required} = prop

    return(
    <>
      <InputItem>
        <Label htmlFor={prop.name}>{label}<IsRequired isRequired={required ?? false} /></Label>
        <Input type="date" isInvalid={fieldState.invalid} {...field}/>
        <ValidationFeedback isInvalid={fieldState.invalid} 
        isVisible={fieldState.invalid}>{fieldState.error?.message}</ValidationFeedback>
      </InputItem>
    </>
    )
  }

  const InputField = (prop: EInputProps) => {
      const {field, fieldState} = useController(prop as UseControllerProps<AddTeacherInput>)
      const {label, required} = prop

    return(
    <>
      <InputItem>
        <Label htmlFor={prop.name}>{label}<IsRequired isRequired={required ?? false} /></Label>
        <Input isInvalid={fieldState.invalid} {...field}/>
        <ValidationFeedback isInvalid={fieldState.invalid} 
        isVisible={fieldState.invalid}>{fieldState.error?.message}</ValidationFeedback>
      </InputItem>
    </>
    )
  }

  type FieldRegProp = {
    name: Path<AddTeacherInput>,
    register: UseFormRegister<AddTeacherInput>,
    control: UseControllerProps<AddTeacherInput>,
    required?: boolean,
    isValid?: boolean,
    message?: string
  }

  interface IItems {
    value: string | number,
    label: string | number,
    
  }

  interface SelectionPropsExtension {
    label:string,
    items: Array<IItems>,
    onSelect: (value: any) => void,
  }

  type SelectionOptionsProps = FieldRegProp & SelectionPropsExtension


  const IsRequired = (prop:{isRequired: boolean}) => {
    return (
      <IsRequiredIndicator>{prop.isRequired ? "*" : ""}</IsRequiredIndicator>
    );
  };
  



const AddTeacherPage = () => {
  const formRef = createRef<HTMLFormElement>();
  const teacherPhotoRef = createRef<HTMLInputElement>();
  const {register, formState:{errors}, control, handleSubmit, setValue}
   = useForm<AddTeacherInput>(
    {resolver: zodResolver(teacherSchema)}
   );
  
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
  

  return (
    <Container>
        <PageContainer>
        <Form
          ref={formRef}
          onSubmit={handleSubmit((d) => console.log(d))}
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
                <InputField label="Middle Name" name="middleName" control={control}/>
                <InputField label="Last Name" name="lastName" control={control} required/>
              </InputRow>
  
              <InputRow>
              <DatePicker label="Date Of Birth" name="dateOfBirth" control={control} required/>
              <SelectionOptions name="gender" label="Gender" 
              onSelect={(value) => {}}
              items={[{label: "Male", value: "Male"}, {label: "Female", value: "Female"}]} 
              register={register}
              control={{name: "gender", control: control}}
              message={errors.gender?.message}
              required/>
              </InputRow>

              <InputRow>
                <InputField label="Address Line 1" name="addr1" control={control} required/>
              </InputRow>
              <InputRow>
                <InputField label="Address Line 2" name="addr2" control={control}/>
              </InputRow>
              
              <InputRow>
                <InputField label="Email" name="email" control={control} required/>
                <InputField label="Phone Number" name="phone" control={control} rules={{pattern: /^[0-9]+$/}} required/>
              </InputRow>

              <InputRow>
                <InputField label="Password" name="password" control={control} required/>
                <InputField label="Password Confirmation" name="passwordConfirmation" 
                control={control} required/>

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
                {/* <Input
                  ref={teacherPhotoRef}
                  style={{border: "unset"}}
                  type="file"
                                  /> */}
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
        </PageContainer>
    </Container>
  )
}

export default AddTeacherPage