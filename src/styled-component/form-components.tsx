import { styled } from "styled-components";
import { theme } from "./theme";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div<{ hidden: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
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
`;

const Container = styled.div``;
const InputField = styled.input``;

const Form = styled.form`
  width: 100%;
`;
const FormReminder = styled.p`
  font-size: 0.75rem;
  color: gray;
`;
const FormTitle = styled.h1`
  ${(props) => props.theme.fontThemes.h2}
`;
const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;
const FormSectionTitle = styled.h2`
  ${(props) => props.theme.fontThemes.h4}
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const InputRow = styled.div<{ columnCount: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnCount}, 1fr);
  gap: 20px;
`;

const Label = styled.label`
  ${theme.fontThemes.inputLabel}
`;
const Input = styled("input").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isInvalid";
  },
})<{ isInvalid: boolean }>`
  font-size: 1rem;
  height: 35px;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid
    ${(props) => (props.isInvalid ? theme.colors.red : "grey")};
  /* box-shadow: 0 0 0 2px
    ${(props) =>
      props.isInvalid ? theme.colors.red : "transparent"}; */
  transition: all 0.25s ease;

  &:disabled{
    filter: brightness(0.7);
  }
`;
const ValidationFeedback = styled("small").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isInvalid" && props !== "isVisible";
  },
})<{
  isInvalid: boolean;
  isVisible: boolean;
}>`
  min-height: 20px;
  max-height: 20px;
  font-weight: 400;
  margin-top: 2px;
  margin-left: 5px;
  line-height: 20px;
  text-overflow: clip;
  overflow: hidden;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  color: ${(props) => (props.isInvalid ? "red" : "gray")};
`;

const Selection = styled("select").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isInvalid";
  },
})<{ isInvalid: boolean }>`
  padding-left: 5px;
  font-size: 1rem;
  height: 35px;
  border-radius: 2px;
  border: 1px solid
    ${(props) => (props.isInvalid ? props.theme.colors.red : "gray")};
  box-shadow: 0 0 0 2px
    ${(props) =>
      props.isInvalid ? props.theme.colors.red : "transparent"};
  transition: all 0.5s ease;
`;
const Option = styled.option``;

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
  background-color: ${theme.colors.secondary};
  background-color: ${(props) =>
    props.type === "reset" && props.theme.colors.primary};
  margin-right: 20px;

  &:active {
    filter: brightness(85%);
  }
`;

const IsRequiredIndicator = styled.span`
  color: red !important;
`;

export { IconWrapper, InputWrapper };

export {
  Form,
  FormReminder,
  FormTitle,
  FormSectionTitle,
  FormSection,
  InputContainer,
  Input,
  IsRequiredIndicator,
  InputRow,
  ValidationFeedback,
  Selection,
  Option,
  Label,
  ButtonContainer,
  Button,
};
