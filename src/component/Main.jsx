import styled from 'styled-components';
import React from 'react';

const MainHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 30px;

  img {
    width: 1350px;
    height: 650px;
  }
`;

function Main() {
  return (
    <>
      <MainHeader>
        <img src={process.env.PUBLIC_URL + "/images/main/mainImg.jpg"} alt="mainImg" />
      </MainHeader>
    </>
  );
}

export default Main;