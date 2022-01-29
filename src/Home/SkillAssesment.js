import React from "react";
import styled from "styled-components";
import Header from "../Header";

function SkillAssesment() {
  return (
    <Container>
      <Header />
      <IconContainer>
        <div className="easy item">
          <div className="circle">75%</div>
          <p>Easy</p>
        </div>
        <div className="item">
          <div className="circle">50%</div>
          <p>Medium</p>
        </div>
        <div className="item">
          <div className="circle">15%</div>
          <p>Hard</p>
        </div>
      </IconContainer>
      <ButtonContainer>
        <button onClick={() => (document.location.href = "/assesment")}>Jump to Skill assesment</button>
      </ButtonContainer>
      <InfoContainer>
        <div className="title">What is Skill Assesment? </div>
        <div className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minima dolorum expedita eum enim repudiandae. Adipisci fugit iusto illum eligendi esse corporis rem iure odit nulla, ea dicta mollitia delectus!</div>
      </InfoContainer>
    </Container>
  );
}

export default SkillAssesment;

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

    .circle {
      width: 170px;
      height: 170px;
      display: grid;
      place-items: center;
      border: 2px solid var(--white);
      border-radius: 50%;
      font-size: 2.5rem;
      color: var(--white);
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
  bottom: 230px;
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
