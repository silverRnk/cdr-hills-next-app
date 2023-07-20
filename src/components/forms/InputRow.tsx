"use client";
import React, { useRef } from "react";
import styles from "./component.module.css";
import { styled } from "styled-components";

const InputsWrapper = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "column" && props !== "gap";
  },
})<{ column: number; gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  justify-items: "center";
  align-items: "center";

  @media screen and (min-width: 560px) {
    display: grid;
    grid-template-columns: repeat(${(props) => props.column}, 1fr);
  }
`;

const InputRow = ({
  children,
  columns = 1,
  gap = "10px",
}: {
  children?: React.ReactNode;
  columns?: number;
  gap?: string;
}) => {
  return (
    <InputsWrapper column={columns} gap={gap}>
      {children}
    </InputsWrapper>
  );
};

export default InputRow;
