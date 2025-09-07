import React from 'react'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import Dropdown from './Dropdown'

function MobileNav({ menus, mobileIndex, setMobileIndex, onClose }) {

    return (
        <div className='md:hidden fixed w-full h-screen left-0 top-0 bg-black bg-opacity-40 backdrop-blur-[3px] z-50 flex items-center justify-start gap-5 pt-8 flex-col'>
            <button className='w-[40px] h-[40px] inset-0 self-end mr-5' title='Close Menu' onClick={onClose}>
                <FaTimes className='text-4xl m-auto text-white' />
            </button>

            <nav className='w-[90%] h-3/4 rounded-md bg-white p-10 font-altOverpass'>

                <ul className='flex items-center justify-center flex-col font-semibold gap-10 w-full h-3/5'>
                    {menus.map((menu, idx) => (
                        <>
                            <li
                                key={idx}
                                className='inline-flex align-center gap-1 justify-center cursor-pointer relative hover:underline text-base'>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setMobileIndex(mobileIndex === idx ? null : idx)
                                    }}
                                    href="/"
                                    className='text-altVeryDarkBlue'>
                                    {menu.label}
                                </a>
                                <i
                                    className={`text-md text-altLightRed text-[12px] mt-[0.35rem]  transform transition-transform duration-300 ${mobileIndex === idx ? "rotate-180 -translate-y-[0.4rem]" : "rotate-0"
                                        }`}>
                                    <FaChevronDown />
                                </i>
                            </li>

                            <Dropdown
                                isOpen={mobileIndex === idx}
                                items={menu.items}
                                onClose={()=> setMobileIndex(null)}
                            />
                        </>
                    ))}



                </ul>

                <hr className='my-2 border-altGrayishBlue border-t-2' />
                <div className='w-full h-2/5 flex items-center justify-center flex-col gap-3 text-base'>
                    <button className='border-0 outline-none bg-none text-altVeryDarkBlue font-bold cursor-pointer hover:underline'>Login</button>
                    <button className='text-white w-36 cursor-pointer py-3 rounded-full border-none bg-gradient-to-r from-altGradientRed to-altGradientLightRed hover:underline'>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default MobileNav