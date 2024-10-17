import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import BugaAvanza from './pages/bugaAvanza';
import OfertaInstitucional from './pages/ofertaInstitucional';
import Digicampus from './pages/digicampus';
import AulaVirtual from './pages/aulaVirtual';
import CTD from './pages/ctd';
import TalentoHumano from './pages/talentoHumano';
import Novedades from './pages/novedades';
//import CineAlParque from './pages/cineAlParque';
import Inscripciones from './pages/inscripciones';
import TalentoTech from './pages/talentoTech';
import TalentoTic from './pages/talentoTic';
import HelpPeople from './pages/helpPeople';
import Page404 from './pages/page404';
import Header from './components/header';
import Footer from './components/footer';
import ChatBot from './components/chatBot';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/inscripciones' element={<Inscripciones/>}/>
        <Route path='/centros-transformacion-digital' element={<CTD/>}/>
        <Route path='/aula-virtual' element={<AulaVirtual/>}/>
        <Route path='/formacion-tic' element={<OfertaInstitucional/>}/>
        <Route path='/buga-avanza' element={<BugaAvanza/>}/>
        <Route path='/helppeople' element={<HelpPeople/>}/>
        <Route path='/talento-humano' element={<TalentoHumano/>}/>

        <Route path='/tic-talent' element={<TalentoTic/>}/>

        <Route path='/novedades' element={<Novedades/>}/>
                
        <Route path='/talento-tech' element={<TalentoTech/>}/>
        <Route path='/digicampus' element={<Digicampus/>}/>

        <Route path='/*' element={<Page404/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

ChatBot()

export default App;
