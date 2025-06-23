import styled from 'styled-components';
import React from 'react';
import HiphopSlider from './MainSlide/HiphopSlider';
import RockSlider from './MainSlide/RockSlider';
import KoreanSlider from './MainSlide/KoreanSlider';

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

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 100px;
  }

  .line {
    width: 80px;
    height: 4px;
    background-color: #20CBFD;
    margin: 10px auto;
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
      <div className="footer_line"/>
      <Contents>
        <h1>HIPHOP/SOUL/R&B</h1>
        <div className='line'/>
        <HiphopSlider />
        <h1>ROCK/POP/ELECTRONICA</h1>
        <div className='line'/>
        <RockSlider />
        <h1>KOREAN</h1>
        <div className='line'/>
        <KoreanSlider />
      </Contents>
    </>
  );
}

export default Main;