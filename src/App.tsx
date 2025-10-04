import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourPage from './pages/TourPage';

function App() {


  return (
    <>
   <Router>
        <Navbar/><br />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/tour/:id" element={<TourPage/>} />
        </Routes>
          {/* <Footer/>  */}
      </Router>

  
      
    </>
  )
}

export default App
