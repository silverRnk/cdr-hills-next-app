'use client'
import React, { useEffect, useState, createRef } from 'react'
import { redirect } from 'next/navigation';
import Image from 'next/image'
import loginStyles from './login.module.css'
import {useFormFeedback } from "./reducer";
import {
    Container, 
    // Body, 
    Left, 
    About, 
    Header, 
    // Logo, 
    LoginBox, 
    Right, 
    InputItem, 
    Label, 
    Input, 
    ValidationFeedback, 
    Button, 
    Forgot, 
    Form} from './styled'

const Logo = () => {
  return <Image alt='logo' src='/cedarhills.png' className={loginStyles['logo']} width={100} height={100}/>
}


function AdminLoginPage() {
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const [emailFeedback, setEmailFeedback] = useFormFeedback();
  const [passwordFeedback, setPasswordFeedback] = useFormFeedback();
  const [doWeGo, setDoWeGo] = useState(false)

    useEffect(() => {
        if(doWeGo){
            redirect('/admin/dashboard')
        }
    }, [doWeGo])

    const handleLogin = async (e) => {
      e.preventDefault();
       const resp = await fetch('/api/admin/login');
       console.log('status' + resp.status)
       if(resp.status == 200){
            setDoWeGo(true);
        }
    }

  // const onSubmit = (event) => {
  //   event.preventDefault();

  //   if(emailRef!.current!.value === 'demo@login.com' && passwordRef!.current!.value === 'demopassword'){
  //     return
  //   }

  //   const payload = {
  //     email: emailRef!.current!.value,
  //     password: passwordRef!.current!.value,
  //   };
    
  // };

  return (
      <Container>
        <Left>
          <div className="cover">
            <About>
              <Logo/>
              {/* <Logo src={"/cedarhills.png"} /> */}
              <Header>CEDAR HILLS CHRISTIAN ACADEMY</Header>
            </About>
          </div>
        </Left>
        <Right>
          <LoginBox>
            <Form onSubmit={handleLogin}>
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
  );
}

export default AdminLoginPage;