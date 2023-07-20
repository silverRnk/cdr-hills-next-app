"use client";
import React, { useState } from "react";
import TextInput, { ITextInput } from "./TextInput";
import VisibleIcon from "@mui/icons-material/VisibilityOutlined";
import HideIcon from "@mui/icons-material/VisibilityOffOutlined";
type IPasswordInput = Omit<ITextInput, "type">;

const PasswordInput = (props: IPasswordInput) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextInput
      type={showPassword ? "text" : "password"}
      icon={showPassword ? <VisibleIcon /> : <HideIcon />}
      onIconClick={handleTogglePassword}
      {...props}
    />
  );
};

export default PasswordInput;
