import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
