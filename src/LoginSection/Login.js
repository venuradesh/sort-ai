import React from "react";
import styled from "styled-components";

function Login() {
  const onLoginClick = (e) => {
    e.preventDefault();
    document.location.href = "/";
  };

  return (
    <Container>
      <div className="background"></div>
      <div className="title">
        <img src="/images/brain-icon.png" alt="brain-icon" />
        <div className="name">SORT AI</div>
        <div className="moto">Equal opportunities for everyone</div>
      </div>
      <BoxContainer>
        <div className="heading">Log In</div>
        <div className="user-name-container">
          <input type="text" name="username" id="username" placeholder="Username" />
        </div>
        <div className="password-container">
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <div className="forget-password">Forget Password</div>
        <div className="btn-container">
          <input type="submit" value="Login" id="login-btn" onClick={(e) => onLoginClick(e)} />
          <div className="separator"></div>
          <a href="/signup">Create an account</a>
        </div>
      </BoxContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/background-image.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;

  .background {
    width: 100%;
    height: 100%;
    background-color: var(--black);
    position: absolute;
    z-index: -1;
    opacity: 0.8;
  }

  .title {
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: default;

    img {
      width: 150px;
      position: relative;
    }

    .name {
      font-size: 4rem;
      color: var(--white);
      font-weight: 700;
      letter-spacing: 5px;
      text-align: center;

      &::selection {
        background-color: transparent;
      }
    }

    .moto {
      font-size: 1.2rem;
      color: var(--normal-gray);
      text-align: center;
      letter-spacing: 2px;

      &::selection {
        background-color: transparent;
      }
    }
  }
`;

const BoxContainer = styled.div`
  z-index: 1;
  width: 380px;
  padding: 25px 15px;
  background-color: var(--white);
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: var(--border-radius-s);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  .heading {
    font-size: 2rem;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 10px;
  }

  .user-name-container,
  .password-container {
    width: 100%;
    flex: 1;
    display: flex;

    input {
      flex: 1;
      padding: 20px 20px;
      font-size: 1rem;
      border: none;
      background-color: var(--light-gray);
      border-radius: var(--border-radius-s);
      outline: none;
    }
  }

  .forget-password {
    font-size: var(--font-size-s);
    font-weight: 600;
    margin-top: 10px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    flex: 1;
    width: 100%;

    input {
      flex: 1;
      width: 100%;
      padding: 20px 20px;
      outline: none;
      border: none;
      border-radius: var(--border-radius-s);
      background-color: var(--blue);
      color: var(--white);
      font-size: var(--font-size-n);
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--blue-hover);
      }
    }

    .separator {
      width: 90%;
      height: 1px;
      background-color: var(--black);
      margin: 5px 0px;
    }

    a {
      width: 100%;
      background-color: var(--green);
      padding: 20px 20px;
      border-radius: var(--border-radius-s);
      text-align: center;
      color: var(--white);
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--green-hover);
      }
    }
  }
`;
