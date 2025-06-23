import React, { createContext, useContext, useReducer } from "react"

const list = [
  // [0] HIPHOP/SOUL/R&B
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
  // [1] ROCK/POP/ELECTRONICA
  [
    {
      id: 1,
      src: "/images/rock/rock01.png",
      ttl: "Meshell Ndegeocello 미셀 엔디지오첼로 lp - Bitter LP",
      price: "69,000원",
    },
    {
      id: 2,
      src: "/images/rock/rock02.png",
      ttl: "The Jackson 5 잭슨파이브 lp - Maybe Tomorrow [Japan Pressing]",
      price: "37,000원",
    },
    {
      id: 3,
      src: "/images/rock/rock03.png",
      ttl: "Erik Tagg 에릭 테그 lp - Smilin' Memories",
      price: "37,000원",
    },
    {
      id: 4,
      src: "/images/rock/rock04.png",
      ttl: "Magdalena Bay 막달레나 베이 lp - Imaginal Disk [Black Vinyl, Gatefold]",
      price: "59,000원",
    },
    {
      id: 5,
      src: "/images/rock/rock05.png",
      ttl: "Lauv 라우브 lp - 1집 How i'm feeling [투명 컬러 2LP]",
      price: "47,000원",
    },
    {
      id: 6,
      src: "/images/rock/rock06.png",
      ttl: "Arctic Monkeys 악틱 몽키즈 lp - 7집 The Car (black vinyl)",
      price: "44,000원",
    },
    {
      id: 7,
      src: "/images/rock/rock07.png",
      ttl: "Prince(프린스) lp - For You",
      price: "31,500원",
    },
    {
      id: 8,
      src: "/images/rock/rock08.png",
      ttl: "Nirvana (너바나) lp - Incesticide [2LP]",
      price: "53,500원",
    },
    {
      id: 9,
      src: "/images/rock/rock09.png",
      ttl: "Nirvana (너바나) lp - Bleach",
      price: "42,500원",
    },
    {
      id: 10,
      src: "/images/rock/rock10.png",
      ttl: "Oasis 오아시스 lp - 5집 Heathen Chemistry [2LP]",
      price: "47,500원",
    },
    {
      id: 11,
      src: "/images/rock/rock11.png",
      ttl: "Gracie Abrams 그레이시 에이브럼스 lp - The Secret Of Us (Transparent Blue Colored)",
      price: "65,500원",
    },
    {
      id: 12,
      src: "/images/rock/rock12.png",
      ttl: "Charli XCX 찰리 엑스씨엑스 lp - 6집 Brat [Greed Colored]",
      price: "58,500원",
    },
    {
      id: 13,
      src: "/images/rock/rock13.png",
      ttl: "Stevie Ray Vaughan 스티비 레이 본 lp - In Step [LP]",
      price: "45,000원",
    },
    {
      id: 14,
      src: "/images/rock/rock14.png",
      ttl: "[예약 판매] HYBS 하입스 lp - MAKING STEAK [ 1LP Transparent Orange & Blue Colored ]",
      price: "103,000원",
    },
    {
      id: 15,
      src: "/images/rock/rock15.png",
      ttl: "HYBS 하입스 lp - MAKING STEAK [ 1LP Transparent Orange Colored ]",
      price: "59,000원",
    },
    {
      id: 16,
      src: "/images/rock/rock16.png",
      ttl: "HYBS 하입스 lp - MAKING STEAK [ 1LP Transparent Blue Colored ]",
      price: "59,000원",
    },
    {
      id: 17,
      src: "/images/rock/rock17.png",
      ttl: "The Prodigy 더 프로디지 lp- Their Law: The Singles 1990-2005 (Download Code)(2LP)",
      price: "47,500원",
    },
    {
      id: 18,
      src: "/images/rock/rock18.png",
      ttl: "Timothee Chalamet 티모시 살라메 lp - A Complete Unknown (어 컴플리트 언노운) (Soundtrack)(Ltd)(Colored)",
      price: "52,500원",
    },
    {
      id: 19,
      src: "/images/rock/rock19.png",
      ttl: "brandy 브랜디 lp - Christmas With Brandy [Red Colored]",
      price: "47,000원",
    },
    {
      id: 20,
      src: "/images/rock/rock20.png",
      ttl: "Peder Elias 페더 엘리아스 lp - 2집 Youth & Family",
      price: "44,000원",
    },
  ],
  // [2] KOREAN
  [
    {
      id: 1,
      src: "/images/korean/korean01.png",
      ttl: "[예약판매] 한로로 lp - 이상비행 [블루 마블 컬러 LP] (12월 발매)",
      price: "41,000원",
    },
    {
      id: 2,
      src: "/images/korean/korean02.png",
      ttl: "[예약판매] 크러쉬 Crush lp - Everything Happens To Me [7인치 투명 레드 컬러]",
      price: "31,500원",
    },
    {
      id: 3,
      src: "/images/korean/korean03.png",
      ttl: "[예약판매] 신해경 Shin Hae Kyung lp - 나의 가역 반응 [투명 컬러 LP]",
      price: "44,000원",
    },
    {
      id: 4,
      src: "/images/korean/korean04.png",
      ttl: "부활 lp - 5집 불의 발견 [LP]",
      price: "45,000원",
    },
    {
      id: 5,
      src: "/images/korean/korean05.png",
      ttl: "블랙핑크 BLACKPINK - BLACKPINK 2nd BORN PINK [LP]",
      price: "88,000원",
    },
    {
      id: 6,
      src: "/images/korean/korean06.png",
      ttl: "유재하 lp - 사랑하기 때문에 [초기 엠보싱 재질 재킷 / 블랙 디스크]",
      price: "44,000원",
    },
    {
      id: 7,
      src: "/images/korean/korean07.png",
      ttl: "김아름 lp - OCEAN WAVE [300장 한정]",
      price: "49,000원",
    },
    {
      id: 8,
      src: "/images/korean/korean08.png",
      ttl: "김민규 lp - 언제 어디인지 알 수는 없지만 (Yellow Color Vinyl)",
      price: "37,000원",
    },
    {
      id: 9,
      src: "/images/korean/korean09.png",
      ttl: "[예약판매] 모허 Moher lp - 만화경 [Green Color]",
      price: "52,000원",
    },
    {
      id: 10,
      src: "/images/korean/korean10.png",
      ttl: "[예약판매] 멜로망스 lp - 미니 4집 Moonlight [Orange Color LP]",
      price: "42,000원",
    },
    {
      id: 11,
      src: "/images/korean/korean11.png",
      ttl: "[예약판매] 멜로망스 lp - 미니 3집 Sunshine [Clear Red Color LP]",
      price: "42,000원",
    },
    {
      id: 12,
      src: "/images/korean/korean12.png",
      ttl: "[예약판매] 유령서점 Ghost Bookstore lp - 유령서점 [Color Vinyl]",
      price: "43,000원",
    },
    {
      id: 13,
      src: "/images/korean/korean13.png",
      ttl: "[예약판매] wave to earth 웨이브 투 어스 lp - play with earth! 0.03 [black vinyl]",
      price: "40,000원",
    },
    {
      id: 14,
      src: "/images/korean/korean14.png",
      ttl: "누구인지 모를 당신이 곁이 되는 순간 lp [10 inch 옐로우 컬러 Vinyl, 333 장 한정]",
      price: "27,500원",
    },
    {
      id: 15,
      src: "/images/korean/korean15.png",
      ttl: "SMTOWN 에스엠타운 lp - 2025 SMTOWN : THE CULTURE, THE FUTURE [2LP]",
      price: "75,000원",
    },
    {
      id: 16,
      src: "/images/korean/korean16.png",
      ttl: "태버 Tabber lp - Deep End Mixtape",
      price: "55,000원",
    },
    {
      id: 17,
      src: "/images/korean/korean17.png",
      ttl: "[모서리할인] 에코 - ECO BEST _ Voice of memory [180g 12인치 White marbled LP+7인치 LP][게이트 폴드 커버]",
      price: "50,000원",
    },
    {
      id: 18,
      src: "/images/korean/korean18.png",
      ttl: "투모로우바이투게더 TXT lp - 별의 장: SANCTUARY [Color LP]",
      price: "52,500원",
    },
    {
      id: 19,
      src: "/images/korean/korean19.png",
      ttl: "로제 ROSE lp - 1ST STUDIO ALBUM [ROSIE] [BAND COVER] (Pink Colored Vinyl)",
      price: "47,000원",
    },
    {
      id: 20,
      src: "/images/korean/korean20.png",
      ttl: "[예약판매] 제니 JENNIE lp - The 1st Studio Album : Ruby [Red Colored LP]",
      price: "47,500원",
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