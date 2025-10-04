import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {


  return (
    <>
   <Router>
        <Navbar/><br />
         <Routes>
          { <Route path="/" element={<Home />} />}
          

         
        </Routes>
          {/* <Footer/>  */}
      </Router>

  
      
    </>
  )
}

export default App
