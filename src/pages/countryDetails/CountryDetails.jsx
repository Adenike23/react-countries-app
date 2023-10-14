import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import loadingImage from '../../assets/images/loading-img.gif'


const CountryDetails = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(false)

  const getCountries = async ()=>{
    setLoading(true)
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const data = await response.json();
      setCountry(data)
      if(response) setLoading(false)
     
    }
  useEffect(()=>{
    getCountries()
  }, [])
  
  return (
    <div className='bg-VeryDarkBlue1 text-white min-h-[100vh] '>
      <button onClick={()=>navigate('/')} className='bg-DarkBlue my-14 ms-10 py-3 px-5 shadow-xl rounded-lg focus:border border-White'><i class="ri-arrow-left-line"></i> Back</button>
      <div className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[25%]'>{(loading === true) ? <img src={loadingImage} /> : ''}</div>
      {
        country.map(element=>(
          <div className='flex flex-col justify-around items-center py-12 mx-auto rounded-xl w-[90%] md:flex-row'>
        <img src={element.flags.svg} alt="" className="w-[80%] md:w-[50%] rounded-xl"/>
        <div className='p-5 space-y-4'>
            <h1 className="font-bold my-2 text-3xl pb-5">{element.name.common}</h1>
            <h4><strong>Capital</strong>: {element.capital}</h4>
            <h3><strong>Region</strong>: {element.region}</h3>
            <h4><strong>Subregion</strong>: {element.subregion}</h4>
            <h2><strong>Population:</strong> {element.population}</h2>
            <h4><strong>Timezone</strong>: {element.timezones[0]}</h4>
            <h4><strong className='me-3'>Borders:</strong>{Object.keys(element).includes('borders') &&  (element.borders.map(border=> (
              <div className='borderDiv inline-block ms-4 py-2 px-3'>{border}</div>
            )))}</h4>
        </div>
        </div>
        ))
      }
    </div>
  )
}


export default CountryDetails