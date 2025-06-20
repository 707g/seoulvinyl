import React, { createContext, useContext, useReducer } from "react"

const list = [
  // [0] hiphop/soul/r&b
  [
    {
      id: 1,
      src: "/images/hiphop/hip01.png",
      ttl: "Kanye West & Ty Dolla Sign - Vultures 1 (Carnival Edition) [7인치 Maroon 2Vinyl+CD]",
      price: "71,500원",
    },
    {
      id: 2,
      src: "/images/hiphop/hip02.png",
      ttl: "[모서리할인] kanye west 카니예 웨스트 lp - late registration vinyl",
      price: "66,000원",
    },
    {
      id: 3,
      src: "/images/hiphop/hip03.png",
      ttl: "PJ Morton 피제이 모튼 lp – Gumbo Unplugged",
      price: "88,000원",
    },
    {
      id: 4,
      src: "/images/hiphop/hip04.png",
      ttl: "PJ Morton 피제이 모튼 lp – Watch The Sun Live : The Mansion Sessions [2LP]",
      price: "99,000원",
    },
    {
      id: 5,
      src: "/images/hiphop/hip05.png",
      ttl: "PJ Morton 피제이 모튼 lp - Cape Town To Cairo [LP]",
      price: "77,000원",
    },
    {
      id: 6,
      src: "/images/hiphop/hip06.png",
      ttl: "[예약판매] Nujabes 누자베스 lp - 사무라이 참프루 samurai champloo ost music record 7 인치 박스 세트 (6월 중순 발매)",
      price: "150,000원",
    },
    {
      id: 7,
      src: "/images/hiphop/hip07.png",
      ttl: "[에약판매] Nujabes 누자베스 lp - 사무라이 참프루 samurai champloo ost music record 7 인치 박스 세트 (11월 중순 발매)",
      price: "130,000원",
    },
    {
      id: 8,
      src: "/images/hiphop/hip08.png",
      ttl: "Doechii 도이치 lp– Alligator Bites Never Heal [Hazel Translucent]",
      price: "49,000원",
    },
    {
      id: 9,
      src: "/images/hiphop/hip09.png",
      ttl: "Janet Jackson 자넷 잭슨 lp - The Velvet Rope [2LP]",
      price: "57,000원",
    },
    {
      id: 10,
      src: "/images/hiphop/hip10.png",
      ttl: "더 콰이엇 The Quiett lp - 10집 : Luxury Flow [LP]",
      price: "44,000원",
    },
    {
      id: 11,
      src: "/images/hiphop/hip11.png",
      ttl: "[자켓터짐할인] The Weeknd 더 위켄드 - Hurry Up Tomorrow [black vinyl]",
      price: "30,000원",
    },
    {
      id: 12,
      src: "/images/hiphop/hip12.png",
      ttl: "brandy 브랜디 lp -never say never [Clear colored 2LP]",
      price: "65,000원",
    },
    {
      id: 13,
      src: "/images/hiphop/hip13.png",
      ttl: "Brownstone 브라운스톤 lp - From The Bottom Up (2LP)",
      price: "45,000원",
    },
    {
      id: 14,
      src: "/images/hiphop/hip14.png",
      ttl: "The Temptations 더 템테이션 lp - Solid Rock (140 Gram Limited Gatefold Edition)",
      price: "48,500원",
    },
    {
      id: 15,
      src: "/images/hiphop/hip15.png",
      ttl: "New Edition 뉴 에디션 lp - Hits (2LP)",
      price: "56,000원",
    },
    {
      id: 16,
      src: "/images/hiphop/hip16.png",
      ttl: "brandy 브랜디 lp - brandy [Orange Colored 2LP]",
      price: "55,000원",
    },
    {
      id: 17,
      src: "/images/hiphop/hip17.png",
      ttl: "Nas 나스 lp - God's Son [Blue Colored 2LP]",
      price: "57,000원",
    },
    {
      id: 18,
      src: "/images/hiphop/hip18.png",
      ttl: "Ken Carson 켄 칼슨 lp - Great Chaos",
      price: "43,000원",
    },
    {
      id: 19,
      src: "/images/hiphop/hip10.png",
      ttl: "[모서리할인] The Weeknd 위켄드 lp – Starboy (red colored vinyl)",
      price: "55,000원",
    },
    {
      id: 20,
      src: "/images/hiphop/hip20.png",
      ttl: "Kendrick Lamar 켄드릭 라마 lp - GNX",
      price: "56,000원",
    },
  ],
]

function proReducer(list, action) {}

const ProStateContext = createContext();

export function ProProvider({children}) {
  const [ state, dispatch ] = useReducer(proReducer, list);
  return(
    <ProStateContext.Provider value={state}>
      {children}
    </ProStateContext.Provider>
  );
}

export function useProState() {
  const context = useContext(ProStateContext);
  if(!context) {
    throw new Error();
  }
  return context;
}