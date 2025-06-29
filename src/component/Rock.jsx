import React from 'react';
import styled from 'styled-components';
import { useProState } from '../stateContext';
import { Link } from 'react-router-dom';

const ItemsWrapper = styled.div`
  width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RockHeader = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: relative;

  img {
    width: 1350px;
    height: 350px;
    border-radius: 5px;
  }
`;

const OverText = styled.div`
  position: absolute;
  top: 55%; 
  left: 80%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;

  h1 {
    font-size: 40px;
    margin: 0;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
  }
`;

const ItemWrap = styled.div`
  width: 1350px;
  margin: 15px auto 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemBlock = styled.div`
  width: 310px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 310px;
    height: 270px;
    object-fit: contain;
    margin: 20px 0 10px 0;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
      box-shadow: 0 8px 15px rgba(0,0,0,0.2);
    }
  }

  h4 {
    width: 100%;
    font-size: 15px;
    color: #6B6B6B;
    margin: 0 0 8px;
    padding: 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    width: 100%;
    font-size: 14px;
    color: #6B6B6B;
    margin: 0;
  }
`;

function Rock() {
  const state = useProState();
  const rockList = state[1];

  return (
    <ItemsWrapper>
      <RockHeader>
        <img src={process.env.PUBLIC_URL + "/images/rock/mainImg.png"} alt="mainImg" />
        <OverText>
          <h1>ROCK/POP/ELECTRONICA</h1>
        </OverText>
      </RockHeader>
      <ItemWrap>
        {rockList.map((item) => (
          <ItemBlock key={item.id}>
            <Link to={`/component/SubRock/${item.id}`} className='no-underline'>
              <img src={process.env.PUBLIC_URL + item.src} alt={item.ttl} />
            </Link>
            <h4>{item.ttl}</h4>
            <p>{item.price}</p>      
          </ItemBlock>
        ))}
      </ItemWrap>
    </ItemsWrapper>
  );
}

export default Rock;
