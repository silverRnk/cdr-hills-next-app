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
  height: 1000px;
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
                <SectionTitle>{"Parent's Information"}</SectionTitle>
                <InputRow columns={2}>
                  <TextInputMod fieldInfo={addStudentLabels.fth_name} formDatas={formData} required inputProps={{}}/>
                </InputRow>
              </FormSection>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default AddStudentPage