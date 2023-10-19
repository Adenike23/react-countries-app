import { useEffect, useState } from 'react'
import HomeCard from '../../components/homeCard/HomeCard'
import loadingImage from '../../assets/images/loading-img.gif'
import CountryDetails from '../countryDetails/CountryDetails';



const Home = () => {
    const [allCountries, setAllCountries] = useState();
    const [toggleRegion, setToggleRegion] = useState(false)
    const [loading, setLoading]= useState(false)
    const [searchInput, setSearchInput] = useState('')
    const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']
    

    async function searchCountries() {
            setLoading(true)
            const response = await fetch(`https://restcountries.com/v3.1/all`)
            const data = await response.json();
            setAllCountries(data);
            if(response) setLoading(false)
        }

        useEffect(()=>{
            searchCountries()
        }, [])
        

        const getRegion = async (region)=>{
            if(region === 'All'){
                searchCountries()
            } else{
                // console.log(region);
                const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
                const data = await response.json();
                setAllCountries(data);
            }
        }
  return (
    <div className='lightModebg bg-VeryDarkBlue1 min-h-[100vh]'>
        <div className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[25%]'>{loading && <img src={loadingImage} />}</div>
        <div className="main-top flex flex-col space-y-4 justify-between items-start px-12 py-7 bg-DarkBlue md:items-center md:flex-row md:space-y-0">
            <div className='inputbox flex bg-VeryDarkBlue1 ps-2 py-2 text-White w-[65%] rounded-lg md:w-[45%] lg:w-[25%]'>
             <i class="ri-search-line"></i>
             <input onChange={(e)=> setSearchInput(e.target.value)} type="search" name="search" id="" placeholder='Search for a country' className='input bg-VeryDarkBlue1 ps-2 outline-none w-[92%]'/>
            </div>
            
            <div className='text-white'>
                <div onClick={()=> setToggleRegion(!toggleRegion)} className='filter flex gap-1 items-center bg-VeryDarkBlue1 p-2 rounded-md cursor-pointer'>
                    <p className='text-sm'>Filter By Region</p>
                    <p className='text-3xl'><i class="ri-arrow-drop-down-line"></i></p>
                </div>

                {toggleRegion && 
                <ul className='absolute text-sm w-[9.5rem] bg-VeryDarkBlue1 mt-1 rounded-lg'>
                    {regions.map(region=>(
                        <li onClick={()=> {
                            getRegion(region)
                            setToggleRegion(false)
                        }} className='ps-4 cursor-pointer hover:bg-gray-500'>{region}</li>
                    ))}
                </ul>}
            </div>
        </div>


        <div className='grid grid-cols-1 md:gap-8 py-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ps-10 mx-auto w-[99%] text-White'>
                {allCountries && 
                allCountries.filter(country => country.name.common.toLowerCase().includes(searchInput.toLowerCase()) || country.region.toLowerCase().includes(searchInput.toLowerCase()))
               .map(country=>(
                    <HomeCard country={country}/>
                ))}

                 {/* <div className='max-w-md shadow-xl'>
                    <img src='/src/assets/images/easybanking image-currency.jpg' alt="" />
                    <div className='p-5 bg-VeryDarkBlue1'>
                        <h1 className="font-bold my-2"></h1>
                        <h2 className="population">Population: 280567</h2>
                        <h3 className="Region">Region: Oceania</h3>
                        <h4 className="Capital">Capital: bgffhg</h4>
                    </div>
                </div> */}  
            </div>
    </div>
  )
}

export default Home