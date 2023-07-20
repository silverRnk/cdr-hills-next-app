"use client";
import React, { useReducer, useState } from "react";
import styles from "./page.module.css";
import TextInput from "@/components/forms/TextInput";
import InputRow from "@/components/forms/InputRow";
import PasswordInput from "@/components/forms/PasswordInput";
import RadioButtons from "@/components/forms/RadioButtons";
import { formFieldsReducer, formFieldsInitValue } from "./utils";
import { styled } from "styled-components";

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
  grid-template-columns: repeat(2, 1fr);
`;

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

  const handleNexPage = (e:any) => {
    const pageTemp = currentPage + 1;
    e.preventDefault();
    setCurrentPage(pageTemp % pageNumber);
    console.log(currentPage);
  };

  const handlePrevPage = (e:any) => {
    e.preventDefault();
    if (currentPage > 0) {
      const pageTemp = currentPage - 1;
      setCurrentPage(pageTemp % pageNumber);
    }
  };

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
          <div className={styles["form-container"]}>
            <h2 className={styles["form-header"]}>Enrollment Form</h2>
            <form onInput={handleFormInput}>
              <div className={styles["form-section"]}>
                <span className={styles["form-section-header"]}>
                  Student Information
                </span>
                <InputRow columns={2}>
                  <TextInput
                    label="First Name"
                    name="first_name"
                    isInvalid
                    feedbackMessage="Error"
                    icon={"h"}
                    required={true}
                    defaultValue={getFormInput("first_name").value}
                  />
                  <TextInput
                    type="text"
                    label="Last Name"
                    name="last_name"
                    isFeedbackVisible
                    feedbackMessage="message"
                  />
                </InputRow>
                <InputRow columns={2}>
                  <RadioButtons
                    name="gender"
                    label="Gender"
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
                    type="date"
                    label="Date of Birth"
                    name="birth_date"
                  />
                </InputRow>
                <InputRow>
                  <TextInput label="Address" name="address" />
                </InputRow>
                <InputRow columns={2}>
                  <RadioButtons
                    label="Enrollee Type"
                    name="enrollee_type"
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

                  <TextInput label="Previous School" />
                </InputRow>
                <InputRow columns={2}>
                  <TextInput label="Grade" />
                  <TextInput
                    type="email"
                    label="Email"
                    name="email"
                  />
                </InputRow>
                <InputRow columns={2}>
                  <PasswordInput label="Password" name="password" />
                  <PasswordInput
                    label="Confirm Password"
                    name="confirm_password"
                  />
                </InputRow>
              </div>
            </form>
            <ButtonContainer>
              <button onClick={handleNexPage}>Next</button>
            </ButtonContainer>
          </div>
        </FormSlideItem>
        <FormSlideItem>
          <div className={styles["form-container"]}>
            <h2 className={styles["form-header"]}>Enrollment Form</h2>
          </div>
        </FormSlideItem>
      </FormSlideWrapper>
    </FormSlideContainer>
  );
};

export default Page;
