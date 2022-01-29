import React from "react";
import styled from "styled-components";

function Header() {
  const onAnchorClick = (e) => {
    e.preventDefault();
    const clickedItem = e.target.outerText.toLowerCase().split(" ")[0];
    const ClickedItemHref = document.querySelector(`.${clickedItem}`).href;
    document.location.href = `${ClickedItemHref}`;
  };

  return (
    <Container>
      <div className="icon-container">
        <img src="/images/icon.png" alt="logo" />
      </div>
      <div className="header-items-container">
        <ul>
          <li>
            <a className="dashboard" href="/" onClick={(e) => onAnchorClick(e)}>
              Dashboard
            </a>
          </li>
          <li>
            <a className="vark" href="/varklearning" onClick={(e) => onAnchorClick(e)}>
              VARK
            </a>
          </li>
          <li>
            <a className="skill" href="/skillassesment" onClick={(e) => onAnchorClick(e)}>
              Skill assesment
            </a>
          </li>
          <li>
            <a className="pricing" href="/pricing" onClick={(e) => onAnchorClick(e)}>
              Pricing
            </a>
          </li>
          <li>
            <a className="contact" href="/contact" onClick={(e) => onAnchorClick(e)}>
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <ProfileContainer>
        <img src="/images/user.png" alt="user-profile" />
      </ProfileContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: var(--black);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;

  .icon-container {
    height: 70px;
    display: flex;
    align-items: center;
    width: max-content;
    position: relative;

    img {
      width: 80px;
    }
  }

  .header-items-container {
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 150px;
          height: 70px;
          text-align: center;
          font-size: var(--font-size-n);
          color: var(--white);
          transition: all 0.3s ease;

          &:hover {
            background-color: var(--dark-gray);
          }

          &.active {
            background-color: var(--dark-gray);
          }
        }
      }
    }
  }
`;

const ProfileContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
