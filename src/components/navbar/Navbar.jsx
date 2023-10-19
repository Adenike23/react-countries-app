import React from 'react'

const Navbar = ({mode, setMode}) => {
  return (
    <div>
       <div className="navbar flex justify-between px-3 py-6 text-White bg-VeryDarkBlue1 md:px-6">
            <h1 className='font-bold text-xl md:text-3xl'>Where in the world?</h1>
            {mode === 'darkMode' ? <div onClick={()=>{setMode('lightMode') 
              }} className=' cursor-pointer flex gap-1 items-center'>
                <i class="ri-sun-fill"></i>
                <p className='text-sm md:text-xl'>Light mode</p>
            </div> : <div onClick={()=>{setMode('darkMode') 
              }} className='cursor-pointer flex gap-1 items-center'>
                <i class="ri-moon-fill"></i>
                <p className='text-sm md:text-xl'>Dark mode</p>
            </div>}
            
       </div>
    </div>
  )
}

export default Navbar