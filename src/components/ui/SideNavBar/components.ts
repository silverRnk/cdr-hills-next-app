import styled from "styled-components";

export const Logo = styled('img').withConfig({
    shouldForwardProp: (props) => {
      return props != "isCollapsed"}})<{isCollapsed:boolean}>`
    height: 50px;
    width: 50px;
    display: ${(props) => (props.isCollapsed ? "none" : "inline")};
`;