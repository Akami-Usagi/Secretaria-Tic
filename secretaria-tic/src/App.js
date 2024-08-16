import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import BugaAvanza from './pages/bugaAvanza';
import OfertaInstitucional from './pages/ofertaInstitucional';
import Digicampus from './pages/digicampus';
import AulaVirtual from './pages/aulaVirtual';
import CTD from './pages/ctd';
import TalentoHumano from './pages/talentoHumano';
import Novedades from './pages/novedades';
import Tico from './pages/tico';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/buga-avanza' element={<BugaAvanza/>}/>
        <Route path='/oferta-institucional' element={<OfertaInstitucional/>}/>
        <Route path='/digicampus' element={<Digicampus/>}/>
        <Route path='/aula-virtual' element={<AulaVirtual/>}/>
        <Route path='/centros-transformacion-digital' element={<CTD/>}/>
        <Route path='/talento-humano' element={<TalentoHumano/>}/>
        <Route path='/tico' element={<Tico/>}/>
        <Route path='/novedades' element={<Novedades/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
