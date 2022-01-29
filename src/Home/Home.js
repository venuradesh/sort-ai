import React from "react";
import styled from "styled-components";
import Header from "../Header";

function Home() {
  return (
    <Container>
      <Header />
      <div className="image">
        <img src="/images/dashboard.jpg" alt="dashboard" />
      </div>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: var(--background-gray);
  height: 100vh;

  .image {
    display: flex;
    justify-content: center;
    overflow-x: hidden;

    img {
      height: calc(100vh - 70px);
    }
  }
`;
