import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  max-width: 62.5em;
  min-height: 37.5em;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: #ebc137;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  box-shadow: 9px 10px 27px -8px rgba(0, 0, 0, 0.87);
  -webkit-box-shadow: 9px 10px 27px -8px rgba(0, 0, 0, 0.87);
  -moz-box-shadow: 9px 10px 27px -8px rgba(0, 0, 0, 0.87);
`;

// const Body = styled.body`
//   background-color: #fefae1;
//   min-height: 100vh;
// `;
const Left = styled.div`
  height: 100%;
`;
const About = styled.div`
  flex-direction: column;
  margin-top: 30%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Header = styled.h1`
  color: #fff;
  font-size: 2.1875em;
  text-align: center;
`;

const Logo = styled.img`
  position: relative;
  background-repeat: none;
  width: 9.375em;
  height: 9.375em;
  margin-bottom: 1.25em;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2a5b84;
`;
const LoginBox = styled.div`
  box-shadow: 9px 10px 27px -8px rgba(0, 0, 0, 0.87);
  -webkit-box-shadow: 9px 10px 27px -8px rgba(0, 0, 0, 0.87);
  -moz-box-shadow: 9px 10px 27px -8px rgba(0, 0, 0, 0.87);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 300px;
  border-radius: 10px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 12.5em;
  width: 100%;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
`;
const Label = styled.label``;
const Input = styled.input`
  background-color: rgba(221, 222, 238, 0.5);
  border-radius: 5px;
  display: flex;
  width: 100%;
  height: 2.5em;
  padding: 10px;
  font-size: 20px;
  border-style: none;
  &:focus {
    border: 1px solid #ebc137;
    box-shadow: 0 0 3px #ebc137;
    outline-offset: 0px;
    outline: none;
  }
`;
const ValidationFeedback = styled("small").withConfig({
    shouldForwardProp: (value) => value !== "isVisible" && value !== "isInvalid"
})<{isVisible: boolean, isInvalid: boolean}>`
  font-weight: 400;
  margin-top: 2px;
  margin-left: 5px;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  color: ${(props) => (props.isInvalid ? "red" : "gray")};
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 20px;
  background-color: #ebc137;
  border-radius: 5px;
  margin: 10px 0;
  width: 90%;
  height: 55px;
  text-align: center;
  border-style: none;
  &:focus {
    border: 1px solid #ebc137;
    box-shadow: 0 0 3px #ebc137;
    outline-offset: 0px;
    outline: none;
  }
  &:hover {
    background-color: #fefae1;
  }
`;

const Forgot = styled.a`
  margin-top: 10px;
`;

export {
    Container, 
    // Body, 
    Left, 
    About, 
    Header, 
    Logo, 
    LoginBox, 
    Right, 
    InputItem, 
    Label, 
    Input, 
    ValidationFeedback, 
    Button, 
    Forgot, 
    Form}