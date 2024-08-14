import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import BugaAvanza from './pages/bugaAvanza';
import OfertaInstitucional from './pages/ofertaInstitucional';
import Digicampus from './pages/digicampus';
import AulaVirtual from './pages/aulaVirtual';
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
        <Route path='/tico' element={<Tico/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
