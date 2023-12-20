import React from "react";
import styled from "styled-components";
import { createRef } from "react";
import { useState } from "react";
import { formFeedbackInitialState, useFormFeedback } from "./reducer";
import {
    Container, 
    Body, 
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
    Form} from './styled'



const handleSubmit = () => {
    // axiosClient
    //   .post("/admin/login", payload)
    //   .then(({ data }) => {
    //     // setUser(data.user);
    //     setToken(data.token);
    //   })
    //   .catch((err) => {
    //     const response = err.response;
    //     if (response && response.status === 422) {
    //       setEmailFeedback(formFeedbackInitialState)
    //       setPasswordFeedback(formFeedbackInitialState)
    //       const error = response.data.errors
    //       Object.keys(error).forEach(key => {
            
    //         switch(key){
    //             case 'email':
    //                 setEmailFeedback({isInvalid:true, isVisible:true, message: error[key]})
    //                 break;
    //             case 'password':
    //                 setPasswordFeedback({isInvalid:true, isVisible:true, message: error[key]})
    //                 break;
    //             default:
    //                 break;
    //         }
    //       })
    //       console.log(response.data.errors);
    //     }
    //   });
}

function Loginform() {
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const [emailFeedback, setEmailFeedback] = useFormFeedback();
  const [passwordFeedback, setPasswordFeedback] = useFormFeedback();



  const onSubmit = (event) => {
    event.preventDefault();

    if(emailRef!.current!.value === 'demo@login.com' && passwordRef!.current!.value === 'demopassword'){
      return
    }

    const payload = {
      email: emailRef!.current!.value,
      password: passwordRef!.current!.value,
    };
    
  };

  return (
    <Body>
      <Container>
        <Left>
          <div className="cover">
            <About>
              <Logo src={"/cedarhills.png"} />
              <Header>CEDAR HILLS CHRISTIAN ACADEMY</Header>
            </About>
          </div>
        </Left>
        <Right>
          <LoginBox>
            <Form onSubmit={onSubmit}>
              <InputItem>
                <Input
                  ref={emailRef}
                  placeholder="Enter your Email"
                />
                <ValidationFeedback
                  isInvalid={emailFeedback.isInvalid}
                  isVisible={emailFeedback.isVisible}
                >
                  {emailFeedback.message}
                </ValidationFeedback>
              </InputItem>

              <InputItem>
                <Input
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter your Password"
                //   isInvalid={passwordFeedback.isInvalid}
                />
                <ValidationFeedback
                  isInvalid={passwordFeedback.isInvalid}
                  isVisible={passwordFeedback.isVisible}
                >
                  {passwordFeedback.message}
                </ValidationFeedback>
              </InputItem>

              <Button>SIGN IN</Button>
              <a href="#">Forget/Reset Password?</a>
            </Form>
          </LoginBox>
        </Right>
      </Container>
    </Body>
  );
}

export default Loginform;