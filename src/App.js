import React from "react";
import './App.css';
import { ProProvider } from "./stateContext";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Overview from "./component/Overview";
import Korean from "./component/Korean";
import Hiphop from "./component/Hiphop";
import Rock from "./component/Rock";
import Jazz from "./component/Jazz";
import Ost from "./component/Ost";
import Janpanse from "./component/Janpanse";
import Cassette from "./component/Cassette";
import Seoulvinyl from "./component/Seoulvinyl";
import Discount from "./component/Discount";
import Etc from "./component/Etc";

function App() {
  return (
    <ProProvider>
      <div className="wrap">
        <header className="header">
          <div className="header_in">
            <div className="header_top">
              <h1 className="logo">
                <Link to='/'>
                  <img src={process.env.PUBLIC_URL + "/images/main/logo.png"} alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Link>
              </h1>
              <ul className="q_mn">
                <li>HOME</li>
                <li>스토어</li>
                <li>검색</li>
                <li>로그인</li>
                <li>장바구니</li>
              </ul>
            </div>
            <div className="header_bottom">
              <nav>
                <ul>
                    <li><Link to='/overview'>전체</Link></li>
                    <li><Link to='/korean'>KOREAN</Link></li>
                    <li><Link to='/hiphop'>HIPHOP/SOUL/R&B</Link></li>
                    <li><Link to='/rock'>ROCK/POP/ELECTRONICA</Link></li>
                    <li><Link to='/jazz'>JAZZ</Link></li>
                    <li><Link to='/ost'>OST</Link></li>
                    <li><Link to='/janpanse'>JANPANSE</Link></li>
                    <li><Link to='/cassette'>CASSETTE</Link></li>
                    <li><Link to='/seoulvinyl'>ONLY SEOULVINYL</Link></li>
                    <li><Link to='/etc'>ETC</Link></li>
                    <li><Link to='/discount'>Discount</Link></li>
                  </ul>
              </nav>
            </div>
          </div>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/korean" element={<Korean />} />
            <Route path="/hiphop" element={<Hiphop />} />
            <Route path="/rock" element={<Rock />} />
            <Route path="/jazz" element={<Jazz />} />
            <Route path="/ost" element={<Ost />} />
            <Route path="/janpanse" element={<Janpanse />} />
            <Route path="/cassette" element={<Cassette />} />
            <Route path="/seoulvinyl" element={<Seoulvinyl />} />
            <Route path="/etc" element={<Etc />} />
            <Route path="/discount" element={<Discount />} />
          </Routes>
        </div>
        <footer>
          <div className="footer_line"/>
          <div className="footer_in">
            <p>
              문의 이용약관 개인정보처리방침 사업자정보확인<br/>
              상호: 주식회사 서울바이닐(SEOUL VINYL Co.,Ltd) | 대표: 이진욱 | 개인정보관리책임자: 이진욱 | 전화: 02-792-3110 | 이메일: whatsupjin@hanmail.net<br/>
              주소: 서울특별시 용산구 신흥로 30, 1층/2층 | 사업자등록번호: 713-81-02189 | 통신판매: 제2020-서울용산-2144호 | 호스팅제공자: (주)식스샵
            </p>
          </div>
        </footer>
      </div>
    </ProProvider>
  );
}

export default App;
