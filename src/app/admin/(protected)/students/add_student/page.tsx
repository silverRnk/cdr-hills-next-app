'use client'
import { Form, FormSection, InputRow, SectionTitle, TextInput } from '@/components/forms'
import React, { ComponentProps, useEffect, useReducer } from 'react'
import styled from 'styled-components'
import { addStudentLabels } from './form_lable'
import { ITextInput } from '@/components/forms/TextInput'
import { FormInput, FormInputLabel } from '@/util/interface'
import { formFieldsInitValue, formFieldsReducer } from './hooks'

const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;
`

const Wrapper = styled.div`
  width: 1080px;
  min-height: 1000px;
  border-radius: 10px;
  box-shadow: 0 0 7px lightgray;
  background-color: white;
  margin: 100px auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 5px gray;
`

const StudentImage = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
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
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) =>
    props.type === "reset" && props.theme.colors.primary};
  margin-right: 20px;

  &:active {
    filter: brightness(85%);
  }
`;

type TextInputModProps = ComponentProps<typeof TextInput> & {fieldInfo?: FormInputLabel, formDatas?: FormInput[]}

const TextInputMod = (props: TextInputModProps) => {
  const {formDatas, fieldInfo} = props
  const formData = formDatas?.filter((form: FormInput) => form.name === fieldInfo!.name)[0]

  return <TextInput 
    name={props.fieldInfo?.name} 
    label={props.fieldInfo?.label} 
    isInvalid={formData?.isInvalid}
    feedbackMessage={formData?.feedbackMessage}
    {...props as ITextInput}/>
}

const AddStudentPage = () => {
  const [formData, setFormData] = useReducer(formFieldsReducer, formFieldsInitValue);

  return (
    <Container>
        <Wrapper>
            <Form>
              <FormSection>
                <SectionTitle>Personal Information</SectionTitle>
                <InputRow columns={3}>
                  <TextInputMod 
                   fieldInfo={addStudentLabels.std_first_name} formDatas={formData} 
                   required />
                  <TextInputMod label='Middle Name' name='middle_name'/>
                  <TextInputMod 
                    fieldInfo={addStudentLabels.std_last_name} formDatas={formData} 
                    required />
                </InputRow>
                <InputRow columns={2}>
                  <TextInputMod 
                    fieldInfo={addStudentLabels.std_gender} formDatas={formData} />
                  <TextInputMod 
                    fieldInfo={addStudentLabels.std_dob} formDatas={formData} type='date' required/>
                </InputRow>
                <InputRow columns={2}>
                <TextInputMod 
                    fieldInfo={addStudentLabels.std_phone} formDatas={formData} type='tel'
                    inputProps={{pattern:'[0-9]{1,5}', placeholder:"Enter Digits only"}}/>
                <TextInputMod 
                    fieldInfo={addStudentLabels.std_email} formDatas={formData} type='email'/>
                </InputRow>
                <InputRow columns={2}>
                  <TextInputMod 
                    fieldInfo={addStudentLabels.std_password} 
                    formDatas={formData} type="password" required/>
                  <TextInputMod fieldInfo={addStudentLabels.std_passconf} 
                    formDatas={formData} 
                    type='password' required/>
                </InputRow>
              </FormSection>

              <FormSection>
                <SectionTitle>{"Guardian's Information"}</SectionTitle>
                <InputRow columns={2}>
                  <TextInputMod fieldInfo={addStudentLabels.guardians_first_name}
                   formDatas={formData} required/>
                  <TextInputMod fieldInfo={addStudentLabels.guardians_last_name}
                   formDatas={formData} required/>
                </InputRow>
                <InputRow columns={2}>
                  <TextInputMod fieldInfo={addStudentLabels.guardians_occupation}
                    formDatas={formData} />
                  <TextInputMod fieldInfo={addStudentLabels.guardians_religion}
                    formDatas={formData} />
                </InputRow>
                <InputRow columns={2}>
                  <TextInputMod fieldInfo={addStudentLabels.guardians_phone}
                    formDatas={formData} required/>
                  <TextInputMod fieldInfo={addStudentLabels.guardians_email}
                    formDatas={formData} required/>
                </InputRow>
              </FormSection>

              <FormSection>
                <SectionTitle>Profile Picture</SectionTitle>
                <StudentImage>
                  <TextInputMod fieldInfo={addStudentLabels.std_photo} formDatas={formData} 
                  type='file' inputProps={{accept:'image/*'}}/>
                </StudentImage>
              </FormSection>
              <ButtonContainer>
                <Button type='submit'>Add</Button>
                <Button type='reset'>Reset</Button>
              </ButtonContainer>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default AddStudentPage