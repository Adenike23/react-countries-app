import { useState } from 'react';
import './App.css'
import Navbar from "./components/navbar/Navbar";
import CountryDetails from './pages/countryDetails/CountryDetails';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App(){
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
     <BrowserRouter>
     <div className={`${darkMode} ? 'dark' : 'light'`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/countrydetails/:name' element={<CountryDetails/>}/>
        </Routes>
     </div>
    </BrowserRouter>
    </>
  )
}

export default App
