// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './components/Main/Main';
 
import Ceo from './routes/Intro/Ceo';
import Outline from './routes/Intro/Outline';
import Ci from './routes/Intro/CI';
import History from './routes/Intro/History';
import Orga from './routes/Intro/Orga';
import OpenInno from './routes/Intro/OpenInno';
import Invest from './routes/Intro/Invest';

import Tech from './routes/Research/Tech';
import Lab from './routes/Research/Lab';

import Medical from './routes/Product/Medical';
import Cosmetic from './routes/Product/Cosmetic';

import Notice from './routes/List/Notice/Notice';
import NoticeDetail from './routes/List/Notice/NoticeDetail';

import Press from './routes/List/Press/Press';
import Event from './routes/List/Event/Event';
import Album from './routes/List/Album/Album';
import Map from './etc/Map/Map';
import Contact from './etc/Contact/Contact';
import Paper from './routes/Research/Paper/Paper';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* 헤더 */}
        <Route path="/Intro/Ceo" element={<Ceo />} />
        <Route path="/Intro/Outline" element={<Outline />} />
        <Route path="/Intro/Ci" element={<Ci />} />
        <Route path="/Intro/Orga" element={<Orga />} />
        <Route path="/Intro/History" element={<History />} />
        <Route path="/Intro/OpenInno" element={<OpenInno />} />
        <Route path="/Intro/Invest" element={<Invest />} />

        <Route path="/Research/Tech" element={<Tech />} />
        <Route path="/Research/Lab" element={<Lab />} />

        {/* 논문 */}
        <Route path="/Research/Paper" element={<Paper />} />


        <Route path="/Product/Medical" element={<Medical />} />
        <Route path="/Product/Cosmetic" element={<Cosmetic />} />



        <Route path="/List/Notice" element={<Notice />} />
        <Route path="/Board/notices/:noticeId" element={<NoticeDetail />} />
        <Route path="/List/Press" element={<Press />} />
        <Route path="/List/Event" element={<Event />} />
        <Route path="/List/Album" element={<Album />} />


        {/* 푸터 */}
        <Route path="/Map/Map" element={<Map />} />
        <Route path="/Contact/Contact" element={<Contact />} />

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
