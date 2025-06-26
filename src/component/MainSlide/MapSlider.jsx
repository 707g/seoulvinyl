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
  background-color: #f5f5f5;
  margin-top: 60px;
  border-radius: 8px;

  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
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
  width: 270px;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  
  img {
    width: 100%;
    height: 200px;
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

export default function MapSlider() {
  const state = useProState();
  const albumsM = state[4];

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
        {albumsM.map((album) => (
          <SwiperSlide key={album.id}>
            <SlideItem>
              <img src={process.env.PUBLIC_URL + album.src} alt={album.ttl} />
            </SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}