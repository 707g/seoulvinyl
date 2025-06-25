import styled from 'styled-components';
import React from 'react';
import HiphopSlider from './MainSlide/HiphopSlider';
import RockSlider from './MainSlide/RockSlider';
import KoreanSlider from './MainSlide/KoreanSlider';
import JazzSlider from './MainSlide/JazzSlider';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import MapSlider from './MainSlide/MapSlider';

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

const MapArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 50px;
  }

  h3 {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 20px;
  }

  img {
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
  }

  .mapAddress {
    width: 1070px;
    margin: 30px auto 0 auto; 
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h2 {
      font-size: 20px;
      text-align: right;
    }

    p {
      font-size: 16px;
      text-align: right;
      font-weight: 600;
      margin-top: 20px;
    }
  }
`;

const MapContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  img {
    width: 600px;
    height: 400px;
    margin-right: 70px;
  }

  .mapBox {
    width: 400px;
    height: 400px;
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
        <h1>JAZZ</h1>
        <div className='line'/>
        <JazzSlider />
        <div className="footer_line"/>
        <MapArea>
          <h1>대한민국 최고의 vinyl collector가 선정한 LP 음반. 서울바이닐</h1>
          <h3>
            대한민국 최초로 흑인음악과 씨티팝 등을 LP로만 틀어주는 LP BAR & SHOP 입니다.<br/>
            서울바이닐은 용산구 해방촌에 위치해 있으며<br/>
            해방촌 특유의 자유롭고 다양한 문화가 공존하는 가운데 그와 잘 어울리는 곳입니다.<br/>
            음악을, LP를 사랑하시는 분들에겐 천국과 같은 곳입니다.<br/>
            디제이의 음악을 들으면서 술과 음식을 즐길 수 있는 한국의 유일한 곳입니다.<br/>
          </h3>
          <MapContent>
            <img src={process.env.PUBLIC_URL + "/images/main/mapImg.png"} alt="mapImg" />
            <div className="mapBox">
              <Map
                center={{ lat: 37.54089022789371, lng: 126.98732139100917 }}
                style={{ width: "100%", height: "100%" }}
                level={6}
              >
                <MapMarker position={{ lat: 37.5408902278937, lng: 126.98732139100917 }}>
                  <div style={{ color: "#000" }}>서울 바이닐</div>
                </MapMarker>
              </Map>
            </div>
          </MapContent>
          <div className="mapAddress">
            <h2>신 주소 : 서울특별시 용산구 신흥로 30 / 구 주소 : 서울특별시 용산동2가 45-12</h2>
            <p>
              고객센터 : 02 - 792 - 3110<br/>
              +음반문의는 dm주세요 + <br/>
              @seoulvinyl
            </p>
          </div>
          <MapSlider />
        </MapArea>
      </Contents>
    </>
  );
}

export default Main;