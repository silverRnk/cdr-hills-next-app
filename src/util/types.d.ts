/**
 * INPUT handles storing to the state the value during input event.
 * INVALID handles invalid feedback during error 422 response
 * RESET_INVALID reset isInvalid and feedbackMessage to init state
 */
export type FormActions = "INPUT" | "INVALID" | "RESET_INVALID";

export type textAlignments = "left" | "right" | "center" | "justify";

export type Gender = "Male" | "Female" | "Other"