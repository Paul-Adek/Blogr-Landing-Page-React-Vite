import React from 'react'
import NavBar from './NavBar'


function Header() {
    return (
        <header className='header bg-mobileImg md:bg-desktopImg col-span-full h-[40rem] md:h-[35rem] rounded-bl-[7rem] bg-no-repeat bg-cover bg-fixed bg-blend-color flex items-center justify-start flex-col inset-0'>
            <NavBar/>
            <main className='text-white w-full h-max flex items-center justify-center flex-col text-center gap-5 md:gap-6 m-auto -translate-y-16 md:-translate-y-10'>
                <h1 className='text-[2.5rem] md:text-6xl font-semibold'>A modern <br className='md:hidden'/> publishing platform </h1>
                <p>Grow your audience and build your online brand</p>
                <div className='flex items-center justify-center gap-5 mt-4 font-semibold'>
                    <button
                        className="w-[9rem] h-max border-2 border-white  bg-white px-4 py-[0.55rem] text-altLightRed rounded-full hover:bg-altVeryLightRed hover:text-white hover:border-transparent">
                    Start for free
                </button>
                    <button
                        className="w-[7.5rem] h-max border-2 border-white bg-transparent px-4 py-[0.55rem] text-white rounded-full hover:bg-white hover:text-altLightRed">
                    Sign Up
                </button>
                </div>
            </main>
        </header>
    )
}

export default Header