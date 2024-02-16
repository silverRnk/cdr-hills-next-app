import { useState } from "react";

export const formFeedbackInitialState = {
  message: 'valid',
  isInvalid: false,
  isVisible: false
};

type FormValidationFeedback = typeof formFeedbackInitialState;

export const useFormFeedback = (): [FormValidationFeedback, (arg0: FormValidationFeedback) => void] => {
  const [feedback, setFeedback] = useState<FormValidationFeedback>({
    message: "valid",
    isInvalid: false,
    isVisible: false,
  });

  return [feedback, setFeedback]
};