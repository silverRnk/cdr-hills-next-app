import { PlaceHolderStyle } from '@/styled-component/place_holder';
import React from 'react'
import styled from 'styled-components';

const Name = styled.h2`
  ${(props) => props.theme.fontThemes.h2}
`;

const NameLoading = styled.h2`
  height: 2rem;
  width: 300px;
  ${PlaceHolderStyle}
`;

const StudentName = (prop: { children?: React.ReactNode}) => {
  const {children} = prop;

  return (
    <>
    {children? <NameLoading /> : <Name>{children || "N/A"}</Name>}
    </>
  )
}

export default StudentName