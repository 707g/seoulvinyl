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
  // [3] JAZZ
  [
    {
      id: 1,
      src: "/images/jazz/jazz01.png",
      ttl: "Chet Baker 쳇 베이커 lp - Sings: It Could Happen To You",
      price: "50,000원",
    },
    {
      id: 2,
      src: "/images/jazz/jazz02.png",
      ttl: "Ryo Fukui 후쿠이 료 lp – Mellow Dream (Transparent Colored)",
      price: "40,000원",
    },
    {
      id: 3,
      src: "/images/jazz/jazz03.png",
      ttl: "Miles Davis 마일즈 데이비스 lp - Kind Of Blue [Blue colored]",
      price: "52,500원",
    },
    {
      id: 4,
      src: "/images/jazz/jazz04.png",
      ttl: "Casiopea 카시오페아 - Casiopea (clear orange colored LP)",
      price: "47,500원",
    },
    {
      id: 5,
      src: "/images/jazz/jazz05.png",
      ttl: "Casiopea 카시오페아 - Mint Jams (clear green colored LP)",
      price: "47,500원",
    },
    {
      id: 6,
      src: "/images/jazz/jazz06.png",
      ttl: "KEITH JARRETT 키스 자렛 - THE KOLN CONCERT [180G LP]",
      price: "47,500원",
    },
    {
      id: 7,
      src: "/images/jazz/jazz07.png",
      ttl: "[예약판매] Takanaka Masayoshi (타카나카 마사요시)- BRASILIAN SKIES [colored LP]",
      price: "47,500원",
    },
    {
      id: 8,
      src: "/images/jazz/jazz08.png",
      ttl: "[예약판매] Takanaka Masayoshi (타카나카 마사요시)- JOLLY JIVE [colored LP]",
      price: "47,500원",
    },
    {
      id: 9,
      src: "/images/jazz/jazz09.png",
      ttl: "[예약판매] Takanaka Masayoshi (타카나카 마사요시) -All Of Me [colored 2LP]",
      price: "64,000원",
    },
    {
      id: 10,
      src: "/images/jazz/jazz10.png",
      ttl: "Roy Hargrove 로이 하그로브 - Earfood [2LP]",
      price: "87,500원",
    },
    {
      id: 11,
      src: "/images/jazz/jazz11.png",
      ttl: "이판근과 코리아째즈퀸텟 '78 - Plays Arirang & Other Assorted Classics [Blue colored LP]",
      price: "38,500원",
    },
    {
      id: 12,
      src: "/images/jazz/jazz12.png",
      ttl: "Miles Davis 마일즈 데이비스- You're Under Arrest (LP)",
      price: "41,500원",
    },
    {
      id: 13,
      src: "/images/jazz/jazz13.png",
      ttl: "Fourplay 포플레이 - Heartfelt (Gold Colored 2LP)",
      price: "47,500원",
    },
    {
      id: 14,
      src: "/images/jazz/jazz14.png",
      ttl: "Blue Mitchell 블루 미첼 - Blue's Moods (Original Jazz Classics Series)(180g LP)",
      price: "61,500원",
    },
    {
      id: 15,
      src: "/images/jazz/jazz15.png",
      ttl: "Cory Wong 코리웡- Starship Syncopation [LP]",
      price: "46,000원",
    },
    {
      id: 16,
      src: "/images/jazz/jazz16.png",
      ttl: "Fourplay 포플레이 - Fourplay [Dark blue colored 2LP]",
      price: "67,500원",
    },
    {
      id: 17,
      src: "/images/jazz/jazz17.png",
      ttl: "Fourplay 포플레이 - Between The Sheets [Transparent purple colored 2LP]",
      price: "77,500원",
    },
    {
      id: 18,
      src: "/images/jazz/jazz18.png",
      ttl: "Sergio Mendes 세르지오 멘데스 - The Swinger From Rio (Green /Yellow coloredLP)",
      price: "37,000원",
    },
    {
      id: 19,
      src: "/images/jazz/jazz19.png",
      ttl: "Kamasi Washington(카마시 워싱턴) - The Epic [3LP]",
      price: "59,000원",
    },
    {
      id: 20,
      src: "/images/jazz/jazz20.png",
      ttl: "Kamasi Washington (카마시 워싱턴) - Harmony Of Difference (EP) [LP]",
      price: "30,000원",
    },
  ],
  // [4] mapSlide
  [
    {
      id: 1,
      src: "/images/main/mapSlide01.png"
    },
    {
      id: 2,
      src: "/images/main/mapSlide02.png"
    },
    {
      id: 3,
      src: "/images/main/mapSlide03.png"
    },
    {
      id: 4,
      src: "/images/main/mapSlide04.png"
    },
    {
      id: 5,
      src: "/images/main/mapSlide05.png"
    },
    {
      id: 6,
      src: "/images/main/mapSlide06.png"
    },
    {
      id: 7,
      src: "/images/main/mapSlide07.png"
    },
    {
      id: 8,
      src: "/images/main/mapSlide08.png"
    },
  ],
  // [5] OST
  [
    {
      id: 1,
      src: "/images/ost/ost01.png",
      ttl: "John Williams 존 윌리엄스 lp - Hollywood Story [오렌지 컬러 2LP]",
      price: "39,000원",
    },
    {
      id: 2,
      src: "/images/ost/ost02.png",
      ttl: "Ennio Morricone 엔니오 모리꼬네 lp - The Legend of 1900 OST (Limited Edition, green color) Vinyl LP",
      price: "57,000원",
    },
    {
      id: 3,
      src: "/images/ost/ost03.png",
      ttl: "Timothee Chalamet 티모시 살라메 lp - A Complete Unknown (어 컴플리트 언노운) (Soundtrack)(Ltd)(Colored)",
      price: "52,500원",
    },
    {
      id: 4,
      src: "/images/ost/ost04.png",
      ttl: "Ennio Morricone 엔니오 모리꼬네 - Cinema Paradiso OST 시네마천국 OST Vinyl (Yellow color LP)",
      price: "42,000원",
    },
    {
      id: 5,
      src: "/images/ost/ost05.png",
      ttl: "나의 완벽한 비서 (SBS 금토 드라마) OST [오렌지 & 투명 컬러 2LP]",
      price: "82,500원",
    },
    {
      id: 6,
      src: "/images/ost/ost06.png",
      ttl: "Whitney Houston 휘트니 휴스턴 – The Preacher's Wife (Original Soundtrack Album) [2LP]",
      price: "44,000원",
    },
    {
      id: 7,
      src: "/images/ost/ost07.png",
      ttl: "Bob Marley 밥 말리 - One Love(Original Motion Picture Soundtrack) [LP]",
      price: "77,000원",
    },
    {
      id: 8,
      src: "/images/ost/ost08.png",
      ttl: "헤어질 결심 영화음악 (Decision to Leave OST) [2LP]",
      price: "67,000원",
    },
    {
      id: 9,
      src: "/images/ost/ost09.png",
      ttl: "사운드 오브 뮤직 영화음악 (The Sound Of Music OST) [LP]",
      price: "46,000원",
    },
    {
      id: 10,
      src: "/images/ost/ost10.png",
      ttl: "[모서리 할인] friends ost - 프렌즈 ost lp 리미티드에디션 핑크컬러",
      price: "53,000원",
    },
    {
      id: 11,
      src: "/images/ost/ost11.png",
      ttl: "Juice (2Pac) - OST",
      price: "46,000원",
    },
    {
      id: 12,
      src: "/images/ost/ost12.png",
      ttl: "데드풀과 울버린 영화음악 (Deadpool & Wolverine OST) [컬러 2LP]",
      price: "60,000원",
    },
    {
      id: 13,
      src: "/images/ost/ost13.png",
      ttl: "[모서리 할인] 트레인스포팅 영화음악 (Trainspotting OST) [LP]",
      price: "52,500원",
    },
    {
      id: 14,
      src: "/images/ost/ost14.png",
      ttl: "드라마 '눈물의 여왕' O.S.T [투명 스카이블루 LP]",
      price: "52,500원",
    },
    {
      id: 15,
      src: "/images/ost/ost15.png",
      ttl: "Kessoku Band (결속밴드) - 結束バンド (180g 2LP)",
      price: "77,000원",
    },
    {
      id: 16,
      src: "/images/ost/ost16.png",
      ttl: "Ryuichi Sakamoto (류이치 사카모토) - Playing the Piano 12122020",
      price: "92,500원",
    },
    {
      id: 17,
      src: "/images/ost/ost17.png",
      ttl: "Twilight Saga New Moon 트와일라잇 뉴문 ost [Gold vinyl]",
      price: "60,000원",
    },
    {
      id: 18,
      src: "/images/ost/ost18.png",
      ttl: "Twilight 트와일라잇 ost [Mercuty Marbled vinyl]",
      price: "52,500원",
    },
    {
      id: 19,
      src: "/images/ost/ost19.png",
      ttl: "그대들은 어떻게 살 것인가 애니메이션 음악 (君たちはどう生きるか OST by Joe Hisaishi) [2LP]",
      price: "52,000원",
    },
    {
      id: 20,
      src: "/images/ost/ost20.png",
      ttl: "O.S.T. - Shaft In Africa [black vinyl]",
      price: "38,500원",
    },
  ],
  // [6] JAPANSE
  [
    {
      id: 1,
      src: "/images/japanse/japanse01.png",
      ttl: "Inoue Tadao 이노우에 타다오 lp - DANCING SHADOWS",
      price: "55,000원",
    },
    {
      id: 2,
      src: "/images/japanse/japanse02.png",
      ttl: "Yamashita Tatsuro 야마시타 타츠로 - Melodies [카세트테이프] 2025 EDITION",
      price: "40,000원",
    },
    {
      id: 3,
      src: "/images/japanse/japanse03.png",
      ttl: "Yamashita Tatsuro 야마시타 타츠로 lp - Circus Town LP",
      price: "60,000원",
    },
    {
      id: 4,
      src: "/images/japanse/japanse04.png",
      ttl: "[예약판매] Radwimps 래드윔프스 lp - 너의 이름은 애니메이션 음악 (君の名は。/ your name. OST) [180g 2LP]",
      price: "66,000원",
    },
    {
      id: 5,
      src: "/images/japanse/japanse05.png",
      ttl: "[예약판매] Utada Hikaru 우타다 히카루 lp - First Love",
      price: "49,000원",
    },
    {
      id: 6,
      src: "/images/japanse/japanse06.png",
      ttl: "KIRINJI 키린지 lp - PAPER DRIVER'S MUSIC",
      price: "70,000원",
    },
    {
      id: 7,
      src: "/images/japanse/japanse07.png",
      ttl: "KIRINJI 키린지 lp - 47'45”",
      price: "70,000원",
    },
    {
      id: 8,
      src: "/images/japanse/japanse08.png",
      ttl: "[예약판매] DJ NOTOYA 디제이 노토야 lp - Tokyo 1980s Victor Edition (The Vinyl Collection) Boogie, Funk & Modern Soul from Japan",
      price: "50,000원",
    },
    {
      id: 9,
      src: "/images/japanse/japanse09.png",
      ttl: "[예약판매] Mrs. GREEN APPLE 미세스 그린애플 lp - 10",
      price: "70,000원",
    },
    {
      id: 10,
      src: "/images/japanse/japanse10.png",
      ttl: "[예약판매] Mrs. GREEN APPLE 미세스 그린애플 lp - Unity",
      price: "37,000원",
    },
    {
      id: 11,
      src: "/images/japanse/japanse11.png",
      ttl: "[예약판매] Nujabes 누자베스 lp - 사무라이 참프루 samurai champloo ost music record 7 인치 박스 세트 (6월 중순 발매)",
      price: "150,000원",
    },
    {
      id: 12,
      src: "/images/japanse/japanse12.png",
      ttl: "[에약판매] Nujabes 누자베스 lp - 사무라이 참프루 samurai champloo ost music record 7 인치 박스 세트 (11월 중순 발매)",
      price: "130,000원",
    },
    {
      id: 13,
      src: "/images/japanse/japanse13.png",
      ttl: "Sugar Babe 슈가 베이브 lp - SONGS [50th Anniversary Edition]",
      price: "50,000원",
    },
    {
      id: 14,
      src: "/images/japanse/japanse14.png",
      ttl: "[예약판매] Lamp 램프 lp - Yume",
      price: "52,500원",
    },
    {
      id: 15,
      src: "/images/japanse/japanse15.png",
      ttl: "[예약판매] Lamp 램프 lp - Tokyo Utopia Tsushin",
      price: "52,500원",
    },
    {
      id: 16,
      src: "/images/japanse/japanse16.png",
      ttl: "[예약판매] Koji Tamaki 코지 타마키 lp - billboard classics Koji Tamaki LEGENDARY SYMPHONIC CONCERT 2024",
      price: "65,000원",
    },
    {
      id: 17,
      src: "/images/japanse/japanse17.png",
      ttl: "[예약판매] Tatsuro Yamashita 타츠로 야마시타 lp - Boku no Naka no Shounen (2025 Vinyl Edition)",
      price: "51,500원",
    },
    {
      id: 18,
      src: "/images/japanse/japanse18.png",
      ttl: "Hiroshi Sato 히로시 사토 lp - Evening Shadows [12인치]",
      price: "55,000원",
    },
    {
      id: 19,
      src: "/images/japanse/japanse19.png",
      ttl: "[예약판매] Masayoshi Takanaka 마사요시 타카나카 lp - The Rainbow Goblins [Clear Purple Vinyl]",
      price: "64,500원",
    },
    {
      id: 20,
      src: "/images/japanse/japanse20.png",
      ttl: "[예약판매] Masayoshi Takanaka 마사요시 타카나카 lp - Alone [Blue Colored LP + Red Colored 7 인치 LP]",
      price: "51,500원",
    },
  ],
  // [7] CASSETTE
  [
    {
      id: 1,
      src: "/images/cassette/cassette01.png",
      ttl: "Yamashita Tatsuro 야마시타 타츠로 - Melodies [카세트테이프] 2025 EDITION",
      price: "40,000원",
    },
    {
      id: 2,
      src: "/images/cassette/cassette02.png",
      ttl: "Kanye West 카니예 웨스트 - Vultures 1 (Cassette Tape)",
      price: "34,000원",
    },
    {
      id: 3,
      src: "/images/cassette/cassette03.png",
      ttl: "Yamasita Tatsuro 카세트 테이프 모음집",
      price: "380,000원",
    },
    {
      id: 4,
      src: "/images/cassette/cassette04.png",
      ttl: "데이식스 (DAY6) 1집 - Sunrise (Green Colored Cassette Tape)",
      price: "27,500원",
    },
    {
      id: 5,
      src: "/images/cassette/cassette05.png",
      ttl: "데이식스 (DAY6) 1집 - Sunrise (Orange Colored Cassette Tape)",
      price: "27,500원",
    },
    {
      id: 6,
      src: "/images/cassette/cassette06.png",
      ttl: "데이식스 (DAY6) 2집 - Moonrise (Clear Colored Cassette Tape)",
      price: "27,500원",
    },
    {
      id: 7,
      src: "/images/cassette/cassette07.png",
      ttl: "데이식스 (DAY6) 2집 - Moonrise (Yellow Colored Cassette Tape)",
      price: "27,500원",
    },
    {
      id: 8,
      src: "/images/cassette/cassette08.png",
      ttl: "P-TYPE 피타입 1st ALBUM HEAVY BASS (Clear colored Cassette Tape 카세트테이프)",
      price: "20,000원",
    },
    {
      id: 9,
      src: "/images/cassette/cassette09.png",
      ttl: "P-TYPE 피타입 2nd ALBUM THE VINTAGE (Green colored Cassette Tape 카세트테이프)",
      price: "20,000원",
    },
    {
      id: 10,
      src: "/images/cassette/cassette10.png",
      ttl: "DINDIN (딘딘) EP 소음집(小音集) (Green Colored Cassette Tape)",
      price: "19,500원",
    },
    {
      id: 11,
      src: "/images/cassette/cassette11.png",
      ttl: "DINDIN (딘딘) EP 소음집(小音集) (Black Colored Cassette Tape)",
      price: "19,500원",
    },
    {
      id: 12,
      src: "/images/cassette/cassette12.png",
      ttl: "Summer Soul 썸머 소울 - December (Cassette Tape)",
      price: "20,000원",
    },
    {
      id: 13,
      src: "/images/cassette/cassette13.png",
      ttl: "Summer Soul 썸머 소울 - November (Cassette Tape)",
      price: "20,000원",
    },
    {
      id: 14,
      src: "/images/cassette/cassette14.png",
      ttl: "BLACKPINK 블랙핑크 - [THE ALBUM] 카세트 테이프 (리미티드 에디션)",
      price: "27,500원",
    },
    {
      id: 15,
      src: "/images/cassette/cassette15.png",
      ttl: "DEUX FOREVER CASSETTE TAPE (Orange 500장 한정)",
      price: "30,000원",
    },
    {
      id: 16,
      src: "/images/cassette/cassette16.png",
      ttl: "DEUX FOREVER CASSETTE TAPE (Clear 500장 한정)",
      price: "30,000원",
    },
    {
      id: 17,
      src: "/images/cassette/cassette17.png",
      ttl: "카세트테이프 케이스",
      price: "2,000원",
    },
    {
      id: 18,
      src: "/images/cassette/cassette18.png",
      ttl: "키(KEY) - BAD LOVE'(cassette tape)",
      price: "12,500원",
    },
    {
      id: 19,
      src: "/images/cassette/cassette19.png",
      ttl: "Ariana Grande 아리아나 그란데 - Positions (Limited Edition, Cassette 카세트 테이프)",
      price: "21,000원",
    },
    {
      id: 20,
      src: "/images/cassette/cassette20.png",
      ttl: "Kanye West 칸예 웨스트 - Jesus Is King cassette 카세트 테이프 리미티드 에디션",
      price: "27,500원",
    },
  ],
  // [8] ONLY
  [
    {
      id: 1,
      src: "/images/only/only01.png",
      ttl: "장범준 소공연 라이브 4종 5lp 박스 세트",
      price: "256,500원",
    },
    {
      id: 2,
      src: "/images/only/only02.png",
      ttl: "장범준 소공연 라이브 언더스테이지 [Yellow colored Gatefold 2LP]",
      price: "69,000원",
    },
    {
      id: 3,
      src: "/images/only/only03.png",
      ttl: "장범준 소공연 라이브 원더로크 [Black colored]",
      price: "62,500원",
    },
    {
      id: 4,
      src: "/images/only/only04.png",
      ttl: "[예약판매] 장범준 소공연 라이브 온에어, 무신사 개러지 X 29 cm [세트 상품]",
      price: "125,000원",
    },
    {
      id: 5,
      src: "/images/only/only05.png",
      ttl: "장범준 소공연 라이브 무신사 개러지 X 29cm [Pink colored]",
      price: "62,500원",
    },
    {
      id: 6,
      src: "/images/only/only06.png",
      ttl: "장범준 - 소공연 라이브 온에어 [Transparent sky blue colored]",
      price: "62,500원",
    },
    {
      id: 7,
      src: "/images/only/only07.png",
      ttl: "장범준 - 아파트 (7 인치) [Transparent green colored]",
      price: "30,000원",
    },
    {
      id: 8,
      src: "/images/only/only08.png",
      ttl: "[예약판매] 장범준 - 소공연 라이브 온에어, 장범준 - 아파트 (7 인치) [세트 상품]",
      price: "91,500원",
    },
    {
      id: 9,
      src: "/images/only/only09.png",
      ttl: "Colde 콜드 lp - Love part 2 (blue colored vinyl)",
      price: "55,000원",
    },
    {
      id: 10,
      src: "/images/only/only10.png",
      ttl: "홍다빈 DPR LIVE lp - GiGgles LP",
      price: "47,000원",
    },
    {
      id: 11,
      src: "/images/only/only11.png",
      ttl: "Babylon 베이빌론 - EGO 90'S (Clear Colored Cassette Tape) [300장 한정반]",
      price: "27,500원",
    },
    {
      id: 12,
      src: "/images/only/only12.png",
      ttl: "베이빌론 (Babylon) - 6집 MOOD (친필싸인반) [핑크 & 퍼플 마블 컬러 2LP]",
      price: "62,500원",
    },
    {
      id: 13,
      src: "/images/only/only13.png",
      ttl: "Colde 콜드 lp - 이상주의 ( Transparent Clear colored LP)",
      price: "55,000원",
    },
    {
      id: 14,
      src: "/images/only/only14.png",
      ttl: "Colde 콜드 lp - Love part 1 (Pink Colored LP)",
      price: "55,000원",
    },
    {
      id: 15,
      src: "/images/only/only15.png",
      ttl: "Colde 콜드 lp - Wave (Blue Colored LP)",
      price: "55,000원",
    },
    {
      id: 16,
      src: "/images/only/only16.png",
      ttl: "듀스 (DEUX) - 3집 FORCE DEUX [레드 앤 화이트 컬러 2LP]",
      price: "70,000원",
    },
    {
      id: 17,
      src: "/images/only/only17.png",
      ttl: "Yamasita Tatsuro 카세트 테이프 모음집",
      price: "380,000원",
    },
    {
      id: 18,
      src: "/images/only/only18.png",
      ttl: "데이식스 (DAY6) 1집 - Sunrise (Pink Colored 2LP)",
      price: "82,500원",
    },
    {
      id: 19,
      src: "/images/only/only19.png",
      ttl: "데이식스 (DAY6) 1집 - Sunrise (Hot Pink Colored 2LP)",
      price: "82,500원",
    },
    {
      id: 20,
      src: "/images/only/only20.png",
      ttl: "데이식스 (DAY6) 2집 - Moonrise (Orange Colored 2LP)",
      price: "82,500원",
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