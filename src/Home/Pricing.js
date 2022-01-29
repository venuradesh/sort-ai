import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Card from "./Card";
import Plans from "./Plans";

function Pricing() {
  return (
    <Container>
      <Header />
      <ItemContainer>
        <div className="title">Find Your Plan</div>
        <CardContainer>
          {Plans.map((plan) => (
            <Card name={plan.name} desc={plan.desc} price={plan.price} details={plan.details} />
          ))}
        </CardContainer>
      </ItemContainer>
    </Container>
  );
}

export default Pricing;

const Container = styled.div``;

const ItemContainer = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 70px);
  padding: 50px;

  .title {
    font-size: var(--font-size-l);
    font-weight: 700;
    color: var(--dark-gray);
  }
`;

const CardContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
