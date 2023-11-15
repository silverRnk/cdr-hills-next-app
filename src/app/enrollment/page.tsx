"use client";
import React, { useReducer, useState } from "react";
import styles from "./page.module.css";
import TextInput from "@/components/forms/TextInput";
import InputRow from "@/components/forms/InputRow";
import PasswordInput from "@/components/forms/PasswordInput";
import RadioButtons from "@/components/forms/RadioButtons";
import {
  formFieldsReducer,
  formFieldsInitValue,
  EnrollmentInputsLabel,
  inputList,
  EnrollmentInputs
} from "./utils";
import { styled } from "styled-components";
import { theme } from "../../../styles/styled-component/theme";
import { FormInputReducer } from "@/components/forms/types";
import InputFileCard from "@/components/forms/InputFileCard/InputFileCard";
import axios from "axios";
import axiosClient from "@/axios/AxiosClient";

const FormSlideContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100vw;
  margin-bottom: 20px;
`;

const FormSlideWrapper = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "slidesCount" && props !== "currentPage";
  },
})<{ slidesCount: number; currentPage: number }>`
  display: flex;
  flex-direction: row;
  width: ${(props) => `${props.slidesCount * 100}vw`};
  margin-left: ${(props) => `-${props.currentPage * 100}vw`};
  transition: margin 0.5s ease-in-out;
`;

const FormSlideItem = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
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
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "submit"
      ? theme.colors.secondary
      : theme.colors.primary};
  margin-right: 20px;

  &:active {
    filter: brightness(85%);
  }
`;

const Slide1 = ({
  getFormInput,
  onInput,
  onNext,
}: {
  getFormInput: (name: string) => FormInputReducer;
  onInput: React.FormEventHandler<HTMLFormElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["form-header"]}>Enrollment Form</h2>
      <form onInput={onInput}>
        <div className={styles["form-section"]}>
          <span className={styles["form-section-header"]}>
            Student Information
          </span>
          <InputRow columns={2}>
            <TextInput
              label={EnrollmentInputsLabel.first_name.label}
              name={EnrollmentInputsLabel.first_name.name}
              isInvalid={
                getFormInput(EnrollmentInputsLabel.first_name.name)
                  .isInvalid
              }
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.first_name.name)
                  .feedbackMessage
              }
              required={EnrollmentInputsLabel.first_name.required}
            />
            <TextInput
              label={EnrollmentInputsLabel.last_name.label}
              name={EnrollmentInputsLabel.last_name.name}
              isInvalid={
                getFormInput(EnrollmentInputsLabel.last_name.name)
                  .isInvalid
              }
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.last_name.name)
                  .feedbackMessage
              }
              required={EnrollmentInputsLabel.last_name.required}
            />
          </InputRow>
          <InputRow columns={2}>
            <RadioButtons
              label={EnrollmentInputsLabel.gender.label}
              name={EnrollmentInputsLabel.gender.name}
              required={EnrollmentInputsLabel.gender.required ?? false}
              items={[
                { id: "male", label: "Male", value: "male" },
                {
                  id: "female",
                  label: "Female",
                  value: "female",
                },
              ]}
            />
            <TextInput
              label={EnrollmentInputsLabel.dob.label}
              name={EnrollmentInputsLabel.dob.name}
              type="date"
              isInvalid={
                getFormInput(EnrollmentInputsLabel.dob.name).isInvalid
              }
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.dob.name)
                  .feedbackMessage
              }
              required={EnrollmentInputsLabel.dob.required}
            />
          </InputRow>
          <InputRow>
            <TextInput label="Address" name="address" />
          </InputRow>
          <InputRow columns={2}>
            <RadioButtons
              label={EnrollmentInputsLabel.enrollee_type.label}
              name={EnrollmentInputsLabel.enrollee_type.name}
              required={EnrollmentInputsLabel.enrollee_type.required}
              items={[
                { id: "old", label: "Old", value: "old" },
                { id: "new", label: "New", value: "new" },
                {
                  id: "transferee",
                  label: "transferee",
                  value: "transferee",
                },
              ]}
            />

            <TextInput
              label={EnrollmentInputsLabel.prev_school.label}
              name={EnrollmentInputsLabel.prev_school.name}
              isInvalid={
                getFormInput(EnrollmentInputsLabel.prev_school.name)
                  .isInvalid
              }
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.prev_school.name)
                  .feedbackMessage
              }
              required={
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value == "transferee" ||
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value == "old"
              }
              disabled={
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value == "new"
              }
            />
          </InputRow>
          <InputRow columns={2}>
            <TextInput
              label={EnrollmentInputsLabel.grade.label}
              name={EnrollmentInputsLabel.grade.name}
              isInvalid={
                getFormInput(EnrollmentInputsLabel.grade.name)
                  .isInvalid
              }
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.grade.name)
                  .feedbackMessage
              }
              required={
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value == "transferee" ||
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value == "old"
              }
              disabled={
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value == "new"
              }
            />
            <TextInput
              label={EnrollmentInputsLabel.email.label}
              name={EnrollmentInputsLabel.email.name}
              isInvalid={
                getFormInput(EnrollmentInputsLabel.email.name)
                  .isInvalid
              }
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.email.name)
                  .feedbackMessage
              }
              required={EnrollmentInputsLabel.email.required}
            />
          </InputRow>
          <InputRow columns={2}>
            <PasswordInput
              label={EnrollmentInputsLabel.password.label}
              name={EnrollmentInputsLabel.password.name}
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.password.name)
                  .feedbackMessage
              }
              required={EnrollmentInputsLabel.password.required}
            />
            <PasswordInput
              label={EnrollmentInputsLabel.pass_confirmation.label}
              name={EnrollmentInputsLabel.pass_confirmation.name}
              feedbackMessage={
                getFormInput(
                  EnrollmentInputsLabel.pass_confirmation.name
                ).feedbackMessage
              }
              required={
                EnrollmentInputsLabel.pass_confirmation.required
              }
            />
          </InputRow>
        </div>
      </form>
      <ButtonContainer>
        <Button type="button" onClick={onNext}>
          Next
        </Button>
      </ButtonContainer>
    </div>
  );
};

const Slide2 = ({
  getFormInput,
  onInput,
  onPrev,
  onSubmit,
}: {
  getFormInput: (name: string) => FormInputReducer;
  onInput: React.FormEventHandler<HTMLFormElement>;
  onPrev: React.FormEventHandler<HTMLButtonElement>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["form-header"]}>Enrollment Form</h2>
      <form onInput={onInput}>
        <div className={styles["form-section"]}>
          <span className={styles["form-section-header"]}>
            Parent Information
          </span>
          <InputRow columns={2}>
            <TextInput
              label={EnrollmentInputsLabel.father_name.label}
              name={EnrollmentInputsLabel.father_name.name}
              isInvalid={
                getFormInput(EnrollmentInputsLabel.first_name.name)
                  .isInvalid
              }
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.first_name.name)
                  .feedbackMessage
              }
              required={EnrollmentInputsLabel.first_name.required}
            />
            <TextInput
              label={EnrollmentInputsLabel.father_occupation.label}
              name={EnrollmentInputsLabel.father_occupation.name}
              isInvalid={
                getFormInput(
                  EnrollmentInputsLabel.father_occupation.name
                ).isInvalid
              }
              feedbackMessage={
                getFormInput(
                  EnrollmentInputsLabel.father_occupation.name
                ).feedbackMessage
              }
              required={
                EnrollmentInputsLabel.father_occupation.required
              }
            />
          </InputRow>
          <InputRow columns={2}>
            <TextInput
              label={EnrollmentInputsLabel.mother_name.label}
              name={EnrollmentInputsLabel.mother_name.name}
              isInvalid={
                getFormInput(EnrollmentInputsLabel.mother_name.name)
                  .isInvalid
              }
              feedbackMessage={
                getFormInput(EnrollmentInputsLabel.mother_name.name)
                  .feedbackMessage
              }
              required={EnrollmentInputsLabel.mother_name.required}
            />
            <TextInput
              label={EnrollmentInputsLabel.mother_occupation.label}
              name={EnrollmentInputsLabel.mother_occupation.name}
              isInvalid={
                getFormInput(
                  EnrollmentInputsLabel.mother_occupation.name
                ).isInvalid
              }
              feedbackMessage={
                getFormInput(
                  EnrollmentInputsLabel.mother_occupation.name
                ).feedbackMessage
              }
              required={
                EnrollmentInputsLabel.mother_occupation.required
              }
            />
          </InputRow>
          <InputRow columns={2}>
            <TextInput
              label={EnrollmentInputsLabel.guardian_phone.label}
              name={EnrollmentInputsLabel.guardian_phone.name}
              isInvalid={
                getFormInput(
                  EnrollmentInputsLabel.guardian_phone.name
                ).isInvalid
              }
              feedbackMessage={
                getFormInput(
                  EnrollmentInputsLabel.guardian_phone.name
                ).feedbackMessage
              }
              required={EnrollmentInputsLabel.guardian_phone.required}
            />
            <TextInput
              label={EnrollmentInputsLabel.guardian_email.label}
              name={EnrollmentInputsLabel.guardian_email.name}
              isInvalid={
                getFormInput(
                  EnrollmentInputsLabel.guardian_email.name
                ).isInvalid
              }
              feedbackMessage={
                getFormInput(
                  EnrollmentInputsLabel.guardian_email.name
                ).feedbackMessage
              }
              required={EnrollmentInputsLabel.guardian_email.required}
            />
          </InputRow>
        </div>

        <div className={styles["form-section"]}>
          <span className={styles["form-section-header"]}>
            Credentials
          </span>
          <div className={styles["credentials-input-wrapper"]}>
            <InputFileCard
              name={EnrollmentInputsLabel.birth_cert.name}
              label={EnrollmentInputsLabel.birth_cert.label}
              required
            />
            <InputFileCard
              name={EnrollmentInputsLabel.form_137.name}
              label={EnrollmentInputsLabel.form_137.label}
              required={
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value !== "new"
              }
            />
            <InputFileCard
              name={EnrollmentInputsLabel.form_138.name}
              label={EnrollmentInputsLabel.form_138.label}
              required={
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value === "transferee"
              }
            />
            <InputFileCard
              name={EnrollmentInputsLabel.good_moral.name}
              label={EnrollmentInputsLabel.good_moral.label}
              required={
                getFormInput(EnrollmentInputsLabel.enrollee_type.name)
                  .value === "transferee"
              }
            />
          </div>
        </div>
      </form>
      <ButtonContainer>
        <Button type="button" onClick={onPrev}>
          Previous
        </Button>
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </ButtonContainer>
    </div>
  );
};

const Page = () => {
  const pageNumber: number = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [formInputs, formInputsReducer] = useReducer(
    formFieldsReducer,
    formFieldsInitValue
  );

  const handleFormInput = (e: React.ChangeEvent<HTMLFormElement>) => {
    // console.log(e.target.value)
    if (e.target.name === "std_photo") {
      return;
    }
    formInputsReducer({
      type: "INPUT",
      name: e.target.name,
      value: e.target.value,
    });
    // console.log(formInputs);
  };

  const handleNexPage = (e: any) => {
    const pageTemp = currentPage + 1;
    e.preventDefault();
    setCurrentPage(pageTemp % pageNumber);
    console.log(currentPage);
  };

  const handlePrevPage = (e: any) => {
    e.preventDefault();
    if (currentPage > 0) {
      const pageTemp = currentPage - 1;
      setCurrentPage(pageTemp % pageNumber);
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formInputs);
    formInputsReducer({ type: "INVALID", name: "" });
    const payload = new FormData();

    inputList.forEach((key:EnrollmentInputs)=> {
      const enrollmentLabel = EnrollmentInputsLabel[key]
      if(!enrollmentLabel.isFile){
        payload.append(enrollmentLabel.name, getFormInput(enrollmentLabel.name)?.value ?? "")
      }else{
        payload.append(enrollmentLabel.name, getFormInput(enrollmentLabel.name)?.file?.[0]!)
      }
    })

    console.log(payload)


    axiosClient
      .post("/enroll", payload)
      .then((data) => {
        if (data && data.status === 201) {
          
        }
      })
      .catch((err) => {
        const response = err.response;
        console.log(err.response.data);
        if (response && response.status === 422) {
          const errors = response.data.errors;
          const errorKey = Object.keys(errors);

          //Notify user for invalid
          // addDialogMessages({
          //   message: `You have ${errorKey.length} input `,
          //   messageType: "Error",
          // });

          errorKey.forEach((key) => {
            formInputsReducer({
              type: "INVALID",
              name: key,
              feedbackMessage: errors[key],
            });
          });
        }
      });
  }

  const getFormInput = (name: string) => {
    return formInputs.filter((form) => form.name === name)[0];
  };

  return (
    <FormSlideContainer>
      <FormSlideWrapper
        slidesCount={pageNumber}
        currentPage={currentPage}
      >
        <FormSlideItem>
          <Slide1
            getFormInput={getFormInput}
            onInput={handleFormInput}
            onNext={handleNexPage}
          />
        </FormSlideItem>
        <FormSlideItem>
          <Slide2
            getFormInput={getFormInput}
            onInput={handleFormInput}
            onSubmit={handleSubmit}
            onPrev={handlePrevPage}
          />
        </FormSlideItem>
      </FormSlideWrapper>
    </FormSlideContainer>
  );
};

export default Page;
