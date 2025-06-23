import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { useProState } from '../../stateContext';

const SliderWrapper = styled.div`
  width: 1350px;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    top: 40%;
    width: 35px;
    height: 35px;
    z-index: 10;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 15px;
    color: black;
  }

  .swiper-button-prev {
    left: 2px;
  }

  .swiper-button-next {
    right: 2px;
  }
`;

const SlideItem = styled.div`
  text-align: center;
  padding: 10px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
      box-shadow: 0 8px 15px rgba(0,0,0,0.2);
    }
  }

  p {
    margin-top: 10px;
    font-size: 15px;
    color: #333;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    font-weight: 600;
    color: #555555;
  }
`;

export default function JazzSlider() {
  const state = useProState();
  const albumsJ = state[3];

  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        style={{ padding: '0 29px' }} 
        navigation
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {albumsJ.map((album) => (
          <SwiperSlide key={album.id}>
            <SlideItem>
              <img src={process.env.PUBLIC_URL + album.src} alt={album.ttl} />
              <p>{album.ttl}</p>
              <p className="price">{album.price}</p>
            </SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}