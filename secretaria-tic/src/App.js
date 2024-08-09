import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import BugaAvanza from './pages/bugaAvanza';
import OfertaInstitucional from './pages/ofertaInstitucional';
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

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
