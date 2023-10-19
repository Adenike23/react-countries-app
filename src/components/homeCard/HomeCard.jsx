import React from "react"
import { useNavigate } from "react-router-dom"


const HomeCard = ({country}) => {
  const navigate = useNavigate()
  return (
    <div>
        <div onClick={()=> navigate(`/countrydetails/${country.name.common}`)} className='max-w-md shadow-xl rounded-lg w-[90%] h-[80%] cursor-pointer hover:scale-105 duration-1000'>
                <img src={country.flags.svg} alt="" className="w-[100%] h-[55%] aspect-square object-cover rounded-t-xl"/>
                <div className='p-5 bg-VeryDarkBlue1 country-text'>
                    <h1 className="font-bold my-2 text-2xl">{country.name.common}</h1>
                    <h2><strong>Population:</strong> {country.population}</h2>
                    <h3><strong>Region</strong>: {country.region}</h3>
                    <h4><strong>Capital</strong>: {country.capital}</h4>
                </div>
        </div>
    </div>
  )
}

export default HomeCard