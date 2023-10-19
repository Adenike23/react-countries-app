import { useState } from 'react';
import './App.css'
import Navbar from "./components/navbar/Navbar";
import CountryDetails from './pages/countryDetails/CountryDetails';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App(){
  const [mode, setMode] = useState('darkMode')

  // function ch
  return (
    <>
     <BrowserRouter>
     <div className={`${mode} bg-VeryDarkBlue1`}>
      <Navbar mode={mode} setMode={setMode}/>
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
