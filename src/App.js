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
/*  */
import Patent from "./routes/Research/Patent";
import Certi from "./routes/Research/Certi";


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
import AlbumDetail from './routes/List/Album/AlbumDetail';

import Material from './routes/Product/Material';
import Matinfo from "./routes/Product/Matinfo";


import Cosmebusiness from "./routes/Business/Cosmebusiness";
import Machine from "./routes/Business/Machine";
import NewMedi from "./routes/Business/Newmedi";
import Nonclinical from "./routes/Business/Nonclinical";

import Intro from "./routes/Cro/Intro";
import Introinfo from "./routes/Cro/Introinfo";
import Item from "./routes/Cro/Item";
import Cropath from "./routes/Cro/Cropath";
import Cropk from "./routes/Cro/Cropk";
import Crolnp from "./routes/Cro/Crolnp";
import Croorga from "./routes/Cro/Croorga";
import Crotcm from "./routes/Cro/Crotcm";
import PressDetail from './routes/List/Press/PressDetail';
import EventDetail from './routes/List/Event/EventDetail';
import LabDetail from './routes/Research/LabDetail';
import PatentDetail from './routes/Research/PatentDetail';
import CertiDetail from './routes/Research/CertiDetail';


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
        <Route path="/Research/blogs/:blogId" element={<LabDetail />} />


        {/* 논문 */}
        <Route path="/Research/Paper" element={<Paper />} />



        {/* Research */}

        <Route path="/Research/Patent" element={<Patent />} />
        <Route path="/Research/patents/:patentId" element={<PatentDetail/>}/>

        <Route path="/Research/Certi" element={<Certi />} />
        <Route path="/Research/certifications/:certificationId" element={<CertiDetail/>}/>


        <Route path="/Business/Cosmebusiness" element={<Cosmebusiness />} />
        <Route path="/Business/Machine" element={<Machine />} />
        <Route path="/Business/NewMedi" element={<NewMedi />} />
        <Route path="/Business/Nonclinical" element={<Nonclinical />} />




        <Route path="/Product/Medical" element={<Medical />} />
        <Route path="/Product/Cosmetic" element={<Cosmetic />} />
        <Route path="/Product/Material" element={<Material />} />
        <Route path="/Product/Matinfo" element={<Matinfo />} />




        <Route path="/List/Notice" element={<Notice />} />
        <Route path="/Board/notices/:noticeId" element={<NoticeDetail />} />

        <Route path="/List/Press" element={<Press />} />
        <Route path="/Board/presses/:pressId" element={<PressDetail />} />

        <Route path="/List/Event" element={<Event />} />
        <Route path="/Board/events/:eventId" element={<EventDetail />} />

        <Route path="/List/Album" element={<Album />} />
        <Route path="/Board/albums/:albumId" element={<AlbumDetail />} />

        <Route path="/Cro/Crolnp" element={<Crolnp />} />

        <Route path="/Cro/Intro" element={<Intro />} />
        <Route path="/Cro/Introinfo" element={<Introinfo />} />
        <Route path="/Cro/Item" element={<Item />} />
        <Route path="/Cro/Cropath" element={<Cropath />} />
        <Route path="/Cro/Cropk" element={<Cropk />} />
        <Route path="/Cro/Croorga" element={<Croorga />} />
        <Route path="/Cro/Crotcm" element={<Crotcm />} />



        {/* 푸터 */}
        <Route path="/Map/Map" element={<Map />} />
        <Route path="/Contact/Contact" element={<Contact />} />

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
