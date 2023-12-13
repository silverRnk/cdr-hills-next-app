"use client";
import React from "react";
import { styled } from "styled-components";
import { theme } from "../../styled-component/theme";
import {
  InputContainer, IsRequiredIndicator
} from "../../styled-component/form-components";

const Container = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    gap: 10px;`;

const RadioItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const ItemLabel = styled.label`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.medium};
`;

const Label = styled.label`
  ${theme.fontThemes.inputLabel}
`

const Input = styled.input``;

interface RadioItem {
  id: string;
  label: string;
  value: string | number;
}

interface RadioButtonItem extends RadioItem {
  name: string;
}

const RadioButton = (props: RadioButtonItem) => {
  const { id, label, value, name } = props;

  return (
    <RadioItemWrapper>
      <ItemLabel htmlFor={id}>{label}</ItemLabel>
      <Input type="radio" id={id} value={value} name={name}></Input>
    </RadioItemWrapper>
  );
};

interface RadioButtonProps {
  label: string;
  name: string;
  required:boolean;
  items: RadioItem[];
}

const RadioButtons = (props: RadioButtonProps) => {
  const { name, items, label, required } = props;
  return (
    <InputContainer>
      <Label>{label}
      {required && <IsRequiredIndicator>*</IsRequiredIndicator>}
      </Label>
      <Container>
        {items.map((radioItem) => (
          <RadioButton
            key={radioItem.id}
            {...radioItem}
            name={name}
          />
        ))}
      </Container>
    </InputContainer>
  );
};

export default RadioButtons;
