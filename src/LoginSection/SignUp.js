import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <div className="background"></div>
      <a href="/login" className="login-btn">
        Login
      </a>
      <BoxContainer>
        <div className="heading">Sign Up</div>
        <div className="items firstName">
          <label htmlFor="firstName">First Name </label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="items lastName">
          <label htmlFor="lastName">Last Name </label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="items userName">
          <label htmlFor="userName">User Name </label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div className="items email">
          <label htmlFor="email">Email </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="submit-btn">
          <input type="submit" value="SignUp" id="submit-btn" />
        </div>
      </BoxContainer>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/images/background-image.jpg);
  background-size: cover;
  background-position: center;
  position: relative;

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--black);
    opacity: 0.8;
    z-index: 0;
  }

  .login-btn {
    position: absolute;
    left: 50px;
    top: 50px;
    padding: 15px 30px;
    font-size: var(--font-size-n);
    font-weight: 600;
    color: var(--black);
    background-color: var(--white);
    border-radius: var(--border-radius-s);
    cursor: pointer;

    &:hover {
      background-color: var(--light-gray);
    }
  }
`;

const BoxContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  z-index: 1;
  border-radius: var(--border-radius-s);
  padding: 15px 25px;
  row-gap: 15px;

  .heading {
    color: var(--dark-gray);
    font-size: var(--font-size-l);
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
  }

  .items {
    display: flex;
    align-items: center;

    label {
      flex: 1;
      font-weight: 500;
    }

    input {
      flex: 2;
      padding: 10px 15px;
      border: none;
      border-radius: var(--border-radius-ex);
      outline: none;
      background-color: var(--light-gray);
      font-size: var(--font-size-n);
    }
  }

  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0px;

    input {
      padding: 20px 50px;
      font-size: var(--font-size-n);
      font-weight: 700;
      background-color: var(--dark-gray);
      color: white;
      border: none;
      border-radius: var(--border-radius-s);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--black);
      }
    }
  }
`;
