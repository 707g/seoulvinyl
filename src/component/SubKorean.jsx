import { useParams } from 'react-router-dom';
import { useProState } from '../stateContext';
import styled from 'styled-components';
import { useState } from 'react';

const ItemsWrapper = styled.div`
  width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KoreanHeader = styled.div`
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
    object-fit: cover;
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
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  max-width: 1000px;
  justify-content: flex-start;
`;

const ProductImg = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin-right: 50px;
  border-radius: 5px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: 600;
  }

  .price {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 400;
  }

  .delivery {
    font-size: 14px;
    color: #555555;
    margin-bottom: 20px;
  }

  .quantity {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    input {
      width: 40px;
      height: 25px;
      text-align: center;
      border: solid 1px #bbbbbb;
      box-sizing: border-box;
    }

    button {
      font-size: 17px;
      width: 25px;
      height: 25px;
      border: solid 1px #bbbbbb;
      background-color: #ffffff;
      cursor: pointer;
    }

    button:hover {
      background-color: #bbbbbb;
      color: white;
      border-color: #bbbbbb;
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #20CBFD;
    margin: 20px 0;
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      font-size: 16px;
    }
  }

  .buttons {
    display: flex;

    button {
      width: 120px;
      height: 40px;
      border: none;
      cursor: pointer;
      margin-right: 10px;
      border-radius: 3px;
      font-size: 16px;
    }

    .buy {
      background-color: #20CBFD;
      color: #ffffff;
    }

    .buy:hover {
      background-color: #1998e0;
    }

    .cart {
      color: #20CBFD;
      border: solid 1px #20CBFD;
      background-color: #ffffff;
    }

    .cart:hover {
      color: #ffffff;
      background-color: #20CBFD ;
    }
  }
`;

function SubKorean() {
  const { id } = useParams();
  const koreanList = useProState()[2];

  const item = koreanList.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const price = parseInt(item?.price.replace(',', '')) || 0;
  const totalPrice = price * quantity;

  if (!item) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ItemsWrapper>
      <KoreanHeader>
        <img src={process.env.PUBLIC_URL + '/images/korean/mainImg.png'} alt="mainImg" />
        <OverText>
          <h1>KOREAN</h1>
        </OverText>
      </KoreanHeader>

      <ProductWrapper>
        <ProductImg src={process.env.PUBLIC_URL + item.src} alt={item.ttl} />
        <ProductInfo>
          <h2>[모서리할인] {item.ttl}</h2>
          <div className="price">{item.price}</div>
          <div className="delivery">
            배송비 &nbsp; 2,500원 (4개마다 반복 부과)<br />
            제주 3,000원, 제주 외 도서 산간 5,000원 추가
          </div>

          <div className="quantity">
            수량 &nbsp;
            <button onClick={handleDecrease}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={handleIncrease}>+</button>
          </div>

          <div className="line"></div>

          <div className="total">
            <span>주문 수량</span>
            <span>{quantity}개</span>
          </div>
          <div className="total">
            <span>총 상품 금액</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>

          <div className="buttons">
            <button className="buy">구매하기</button>
            <button className="cart">장바구니</button>
          </div>
        </ProductInfo>
      </ProductWrapper>
    </ItemsWrapper>
  );
}

export default SubKorean;
