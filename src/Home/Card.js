import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <Container>
      <div className="content-container">
        <div className="front-side">
          <div className="border"></div>
          <div className="content">
            <div className="name">{props.name}</div>
            <div className="desc">{props.desc}</div>
            <div className="price">
              <sup>$ {props.price}</sup>
            </div>
          </div>
        </div>
        <div className="back-side">
          <div className="content">
            <ul>
              {props.details.map((detail) => (
                <li>{detail}</li>
              ))}
            </ul>
            <div className="button">
              <div className="subscribe">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;

  .content-container {
    width: 100%;
    padding: 15px;
    background-color: #bfbfbf;
    height: 100%;
    border-radius: var(--border-radius-s);
    position: relative;
    transition: all 2s ease;
    transform-style: preserve-3d;

    .front-side,
    .back-side {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      padding: 10px;
      transform-style: preserve-3d;
    }

    .front-side {
      transform: translateZ(20px);
      text-align: center;

      .border {
        border-radius: var(--border-radius-s);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        border: 2px solid var(--black);
      }

      .content {
        color: var(--dark-gray);

        .name {
          margin-top: 20px;
          font-weight: 600;
          font-size: 1.5rem;
        }

        .desc {
          margin-top: 30px;
        }

        .price {
          font-size: 3rem;
          margin-top: 30px;
        }
      }
    }

    .back-side {
      transform: rotateY(0.5turn);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: var(--border-radius-s);

      .content {
        padding: 25px;
        cursor: default;

        ul {
          text-align: center;
          margin-bottom: 25px;
        }
      }

      .subscribe {
        padding: 15px 40px;
        border: 4px solid var(--black);
        text-align: center;
        margin-top: 20px;
        border-radius: var(--border-radius-s);
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 700;
        color: var(--black);

        &:hover {
          border-color: var(--white);
          color: var(--white);
        }
      }
    }
  }

  &:hover .content-container {
    transform: rotateY(0.5turn);
  }
`;
