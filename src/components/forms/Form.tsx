import styled, { css } from "styled-components";

const Form = styled.form`
  width: 100%;
`;

const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  ${(props) => props.theme.fontThemes.h4 ? 
        props.theme.fontThemes.h4 : 
        css``}
`;

export {Form, SectionTitle, FormSection}