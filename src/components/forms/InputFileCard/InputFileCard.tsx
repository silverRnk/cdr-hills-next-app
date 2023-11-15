import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../styles/styled-component/theme";
import { IsRequiredIndicator } from "../../../../styles/styled-component/form-components";

const CardContainer = styled.div`
  width: 150x;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 0 5px black;

  @media only screen and (min-width: 760px) {
    width: 200px;
    height: 200px;
  }
`;

const CardTitle = styled.span`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Middle = styled.div`
  flex: 1;
  padding: 5px 10px;
`;

const FileName = styled.span`
  color: gray;
  font-size: 1.15rem;
`;

const Button = styled.label`
  width: 95%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.15rem;
  font-weight: bold;
  color: white;
  background-color: ${theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  cursor: pointer;

  &:active {
    filter: brightness(0.7);
  }
`;

interface IInputFile {
  name: string;
  label: string;
  required?: boolean;
  file?: File;
}

const InputFileCard = (props: IInputFile) => {
  const { name, label, file, required } = props;
  return (
    <CardContainer>
      <CardTitle>
        {label}
        {required && <IsRequiredIndicator>*</IsRequiredIndicator>}
      </CardTitle>
      <input
        name={name}
        id={name}
        type="file"
        accept="image/jpeg
      image/png application/pdf"
        style={{ display: "none" }}
      />
      <Middle>
        <FileName>{file?.name || "*Select a file"}</FileName>
      </Middle>

      <Button htmlFor={name} role="button">
        Upload
      </Button>
    </CardContainer>
  );
};

export default InputFileCard;
