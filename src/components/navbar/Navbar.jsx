import React from 'react'

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <div className=' shadow-2xl'>
       <div className="flex justify-between px-3 py-6 text-White bg-VeryDarkBlue1 md:px-6">
            <h1 className='font-bold text-xl md:text-3xl'>Where in the world?</h1>
            <div onClick={()=>setDarkMode(!darkMode)} className='flex gap-1 items-center'>
                <i class="ri-moon-fill"></i>
                <p className='text-sm md:text-xl'>Dark mode</p>
            </div>
       </div>
    </div>
  )
}

export default Navbar