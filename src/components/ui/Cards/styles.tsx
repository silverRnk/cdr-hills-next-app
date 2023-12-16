import { SvgIcon, SvgIconProps } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  height: 530px;
  width: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: white;
  padding: 30px;
  box-shadow: 5px 5px 5px gray;
  border-radius: 7px;
`;

const ContainerL = styled(Container)`
    height: 600px;
    width: 600px;
`

const ContainerSm = styled(Container)`
    width: 255px;
`

const Title = styled.h3`
    font-size: 1.15rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    margin: 0 auto 0 0;
`

const OuterCircle = styled.div`
    height: 10px;
    width: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    box-shadow: 1px 1px lightgray;
`

const InnerCircle = styled.div`
    height: 7px;
    width: 7px;
    margin: auto;
    border-radius: 100%;
`

const MenuButtonWrapper = styled.div`
    position: relative;
`

const Button = styled.button`
    all: unset;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    cursor: pointer;

    :active{
        border-radius: 100%;
        background-color: lightgray;
    }
`


interface SvgPropsExtended extends SvgIconProps {
    innerCircleColor: string
}

const SmallCircle = (props: SvgPropsExtended) => {
    const {innerCircleColor} = props

    return(
        <SvgIcon width="15" height="15" viewBox="0 0 30 30" {...props as SvgIconProps}>
            <g filter="url(#filter0_d_315_757)">
            <circle cx="15" cy="11" r="5" fill={innerCircleColor}/>
            <circle cx="15" cy="11" r="6" stroke="white" stroke-width="2"/>
            </g>
            {/* <defs>
            <filter id="filter0_d_315_757" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="4"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_315_757"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_315_757" result="shape"/>
            </filter>
            </defs> */}
        </SvgIcon>
    )
}

export {Container, Title, SmallCircle, ContainerSm, ContainerL, MenuButtonWrapper, Button}