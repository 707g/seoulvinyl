import React from 'react';
import styled from 'styled-components';
import { useProState } from '../stateContext';

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-bottom: 100px;
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
`;

const ItemBlock = styled.div`
  width: calc(25% - 20px);
  margin: 30px 10px 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 320px;

  img {
    width: 70%;
    margin: 15px 0;
    cursor: pointer;
  }
  h4 {
    font-size: 14px;
    color: #6B6B6B;
    text-align: center;
    padding: 0 5px;
    flex-grow: 1;
  }
  p {
    font-size: 13px;
    color: #6B6B6B;
  }
`;

function Hiphop() {
  const state = useProState();
  const hiphopList = state[0];

  return (
    <ItemsWrapper>
      {hiphopList.map((item) => (
        <ItemBlock key={item.id}>
          <img src={process.env.PUBLIC_URL + item.src} alt={item.ttl} />
          <h4>{item.ttl}</h4>
          <p>{item.price}</p>
        </ItemBlock>
      ))}
    </ItemsWrapper>
  );
}

export default Hiphop;
