import React from "react";
import styled from "styled-components";
import Header from "../Header";

function Vark() {
  return (
    <Container>
      <Header />
      <IconContainer>
        <div className="visinary item">
          <img src="/images/eye.png" alt="eye" />
          <p>Visinary</p>
        </div>
        <div className="auditory item">
          <img src="/images/auditory.png" alt="auditory" />
          <p>Auditory</p>
        </div>
        <div className="read-write item">
          <img src="/images/contract.png" alt="read-write" />
          <p>Read/Write</p>
        </div>
        <div className="kenesthatic item">
          <img src="/images/man.png" alt="kenesthatic" />
          <p>Kenesthatic</p>
        </div>
      </IconContainer>
      <ButtonContainer>
        <button>Jump to VARK assesment</button>
      </ButtonContainer>
      <InfoContainer>
        <div className="title">What is VARK? </div>
        <div className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minima dolorum expedita eum enim repudiandae. Adipisci fugit iusto illum eligendi esse corporis rem iure odit nulla, ea dicta mollitia delectus!</div>
      </InfoContainer>
    </Container>
  );
}

export default Vark;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-gray);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: calc(70px + 50px);
  column-gap: 100px;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 25px;
    cursor: pointer;

    img {
      width: 150px;
      height: 150px;
    }

    p {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--white);

      &::selection {
        background-color: transparent;
      }
    }
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 50px;
  padding: 25px 100px;

  .title {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--white);
  }

  .info {
    margin-top: 10px;
    font-size: var(--font-size-n);
    color: var(--normal-gray);
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 250px;
  left: 50%;
  transform: translateX(-50%);

  button {
    padding: 20px 50px;
    font-size: var(--font-size-n);
    font-weight: 700;
    background-color: var(--white);
    cursor: pointer;
    border: none;

    &:hover {
      background-color: var(--light-gray);
    }
  }
`;