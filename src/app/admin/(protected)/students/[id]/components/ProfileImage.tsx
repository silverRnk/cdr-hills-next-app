import { PlaceHolderStyle } from '@/styled-component/place_holder';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';

const ImageStyle = styled('style-image')`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.background};
`;

const LoadingImg = styled.div`
  ${PlaceHolderStyle}
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 20px;
  background-size: 700px 700px !important;
`;

const ProfileImage = (prop:{src:string}) => {
   const {src} = prop

  return (
    <>
        {src? 
          <Image className={'style-image'} 
          src={src} alt='student-img'/>:
          <LoadingImg/>}
    </>
  )
}

export default ProfileImage