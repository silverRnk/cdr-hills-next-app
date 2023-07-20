"use client";
import React, { useEffect } from "react";
import "./component.css";
import styles from "./component.module.css";
import { styled } from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div<{ hidden: boolean }>`
  position: absolute;
  top: 0;
  right: 5px;
  min-width: 25px;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  transition: ease-in-out 0.25s none;
  opacity: 0.4;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  & > :first-child {
    height: 25px;
    width: 25px;
    font-size: 25px;
  }
`;

type TextInputType = Exclude<React.HTMLInputTypeAttribute, "radio">;
/**
 *
 * @implements React.FormHTMLAttributes<HTMLInputElement>
 * @property {boolean} isInvalid - set if forms is invalid
 * @property {boolean} isFeedbackVisible - set if feedback is shown or not
 * @property {string} feedbackMessage
 */
export interface ITextInput
  extends React.FormHTMLAttributes<HTMLInputElement> {
  type?: TextInputType;
  label?: string;
  isInvalid?: boolean;
  isFeedbackVisible?: boolean;
  feedbackMessage?: string;
  labelID?: string;
  inputID?: string;
  feedbackID?: string;
  icon?: React.ReactNode;
  onIconClick?: (event: React.ChangeEvent<any>) => void;
  required?: boolean;
}

const initValue: ITextInput = {
  type: "text",
  required: false,
};

const TextInput = (props: ITextInput = initValue) => {
  const {
    required,
    type,
    label,
    name,
    isInvalid,
    isFeedbackVisible,
    feedbackMessage,
    icon,
    onIconClick
  } = props;

  useEffect(() => {
    let textInputDOM, feedbackDOM;
    feedbackDOM = document.querySelector(`#${name}-message`);
    if (isInvalid) {
      textInputDOM = document.querySelector(`#${name}`);
      textInputDOM?.classList.remove("text-input-valid");
      textInputDOM?.classList.add("text-input-invalid");

      feedbackDOM?.classList.remove("validation-feedback-hidden");
      feedbackDOM?.classList.add("validation-feedback-invalid");
    }

    if (isFeedbackVisible) {
      feedbackDOM?.classList.remove("validation-feedback-hidden");
    }

    if (!isFeedbackVisible && !isInvalid) {
      feedbackDOM?.classList.add("validation-feedback-hidden");
      feedbackDOM?.classList.remove("validation-feedback-invalid");
    }
  }, [isInvalid, name, isFeedbackVisible]);

  return (
    <>
      <div className="input-wrapper">
        <label htmlFor={name} className="form-label">
          {label}
          {required && (
            <sup className={styles["required-indicator"]}>*</sup>
          )}
        </label>
        <InputWrapper>
          <input
            type={type}
            {...props}
            name={name}
            id={`${name}`}
            className="text-input text-input-valid"
            required={required}
          ></input>

          <IconWrapper onClick={onIconClick} hidden={!icon}>{icon}</IconWrapper>
        </InputWrapper>

        <span
          id={`${name}-message`}
          className="validation-feedback validation-feedback-hidden validation-feedback-valid"
        >
          {feedbackMessage}
        </span>
      </div>
    </>
  );
};

export default TextInput;
