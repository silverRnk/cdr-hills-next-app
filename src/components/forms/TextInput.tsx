"use client";
import React, { ComponentProps, useEffect } from "react";
import "./component.css";
import styles from "./component.module.css";
import { styled } from "styled-components";
import {
  Input,
  IsRequiredIndicator,
  Label,
  ValidationFeedback,
} from "../../styled-component/form-components";

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

type InputPartial = "feedbackID";
/**
 *
 * @implements React.FormHTMLAttributes<HTMLInputElement>
 * @property {boolean} isInvalid - set if forms is invalid
 * @property {boolean} isFeedbackVisible - set if feedback is shown or not
 * @property {string} feedbackMessage
 */
export interface ITextInput {
  type?: TextInputType;
  label?: string;
  name?: string;
  isInvalid?: boolean;
  isFeedbackVisible?: boolean;
  feedbackMessage?: string;
  labelID?: string;
  inputID?: string;
  feedbackID?: string;
  icon?: React.ReactNode;
  onIconClick?: (event: React.ChangeEvent<any>) => void;
  required?: boolean;
  inputProps?: Exclude<
    ComponentProps<"input">,
    "type" | "required"
  >;
  disabled?:boolean
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
    onIconClick,
    disabled
  } = props;

  return (
    <>
      <div className="input-wrapper">
        <Label htmlFor={name}>
          {label}
          {required && <IsRequiredIndicator>*</IsRequiredIndicator>}
        </Label>
        <InputWrapper>
          <Input
            type={type}
            name={name}
            {...props.inputProps as ComponentProps<"input">}
            id={`${name}`}
            className="text-input text-input-valid"
            required={required}
            isInvalid={isInvalid ?? false}
            disabled={disabled ?? false}
          />

          {onIconClick && (
            <IconWrapper onClick={onIconClick} hidden={!icon}>
              {icon}
            </IconWrapper>
          )}
        </InputWrapper>

        <ValidationFeedback
          isInvalid={isInvalid ?? false}
          isVisible={(isInvalid ?? false) || (isFeedbackVisible ?? false)}
        >{feedbackMessage}</ValidationFeedback>
      </div>
    </>
  );
};

export default TextInput;
