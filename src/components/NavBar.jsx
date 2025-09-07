import Dropdown from './Dropdown';
import { FaChevronDown } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

import logo from '/assets/images/logo.svg';
import hamburger from '/assets/images/icon-hamburger.svg'
import MobileNav from './MobileNav';


function NavBar() {

    // Mobile nav
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleClick = () => {
        setMobileOpen(true);
    };

    const [openIndex, setOpenIndex] = useState(null);
    const containerRef = useRef(null);

    const menus = [
        {
            label: "Product",
            items: ["Overview", "Pricing", "Marketplace", "Features", "  Integrations"],
        },
        {
            label: "Company",
            items: ["About", "Team", "Blog", "Careers"],
        },
        {
            label: "Connect",
            items: ["Contact", "  Newsletter", "  LinkedIn"]
        },
    ];



    useEffect(() => {
        function handleClickOutside(e) {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpenIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }

    }, [])

    return (
        <nav className='w-full md:w-[85%] h-24 md:h-32 flex items-center justify-between py-3 px-5 md:mt-4 font-altUbuntu'>

            <div className='md:flex md:items-center justify-start md:w-2/4 gap-14'>

                <a href="/">
                    <img src={logo} alt="Blogr logo" />
                </a>

                <ul className='hidden md:flex items-center justify-center w-max gap-10 mt-[8px] text-white' ref={containerRef}>

                    {menus.map((menu, index) => (
                        <li
                            key={index}
                            className='inline-flex align-center gap-2 justify-center cursor-pointer relative hover:underline'
                        >
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenIndex(openIndex === index ? null : index);
                                }}>
                                {menu.label}
                            </a>
                            <i
                                className={`mt-2 transform transition-transform duration-300 ${openIndex === index ? "rotate-180 -translate-y-[0.4rem]" : "rotate-0"
                                    }`}>
                                <FaChevronDown size={12} />
                            </i>

                            {/* Dropdown Component */}
                            <Dropdown
                                isOpen={openIndex === index}
                                items={menu.items}
                                onClose={() => setOpenIndex(null)}
                            />

                        </li>
                    ))
                    }
                </ul>
            </div>

            {/* Mobile hamburger */}
            <button className='h-8 md:hidden' onClick={() => handleClick()}>
                <img src={hamburger} alt="hamburger icon" />
            </button>

            {
                mobileOpen && (
                    <MobileNav
                        menus={menus}
                        mobileIndex={openIndex}
                        setMobileIndex={setOpenIndex}
                        onClose={()=> setMobileOpen(false)}
                        
                    />
                )
            }

            {/* Auth buttons */}
            <div className="hidden md:flex w-max h-max gap-2">
                <button className="w-[7.5rem] h-max border-2 border-transparent bg-none px-4 py-3 text-white rounded-full">
                    Login
                </button>
                <button className="w-[7.5rem] h-max border-2 border-white  bg-white px-4 py-[0.55rem] text-altLightRed rounded-full hover:bg-altVeryLightRed hover:text-white hover:border-transparent">
                    Sign Up
                </button>
            </div>
        </nav>

    )
}

export default NavBar