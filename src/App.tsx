import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourPage from './pages/TourPage';
import AccomdationPage from './pages/AccomdationPage';
import AvailabilityPage from './pages/AvailabilityPage';

function App() {


  return (
    <>
   <Router>
        <Navbar/><br />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/tour/:id" element={<TourPage/>} />
          <Route path="/accommodation" element={<AccomdationPage/>} />  
          <Route path="/accommodation/:id" element={<AvailabilityPage/>} />  
        </Routes>
          {/* <Footer/>  */}
      </Router>

  
      
    </>
  )
}

export default App
