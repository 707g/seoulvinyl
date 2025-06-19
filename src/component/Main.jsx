import styled from 'styled-components';
import React from 'react';

const MainHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 30px;
  position: relative;

  img {
    width: 1350px;
    height: 650px;
    display: block;
  }
`;

const OverText = styled.div`
  position: absolute;
  top: 60%; 
  left: 70%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;

  h1 {
    font-size: 55px;
    margin: 0;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
  }

  p {
    font-size: 25px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  }
`;

function Main() {
  return (
    <>
      <MainHeader>
        <img src={process.env.PUBLIC_URL + "/images/main/mainImg.jpg"} alt="mainImg" />
        <OverText>
          <h1>SEOUL VINYL</h1>
          <p>Turn up your life</p>
        </OverText>
      </MainHeader>
    </>
  );
}

export default Main;