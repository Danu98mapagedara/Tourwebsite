import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TourPage from './pages/TourPage';
import AccomdationPage from './pages/AccomdationPage';
import AvailabilityPage from './pages/AvailabilityPage';
import GetYourRoute from './pages/GetYourRoute';
import ReservePage from './pages/ReservePage';
import RentalPage from './pages/RentalPage';
import Footer from './components/Footer';

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
           <Route path="/getyourroute" element={<GetYourRoute/>} />
           <Route path="/reserve/:id" element={<ReservePage/>} />
           <Route path="/rental" element={<RentalPage/>} />
        </Routes>
          {<Footer/>}
      </Router>

  
      
    </>
  )
}

export default App
