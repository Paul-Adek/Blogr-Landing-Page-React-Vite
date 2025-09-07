import React from 'react'
import logo from '/assets/images/logo.svg';

function Footer() {
    return (
        <footer className='col-span-full h-[50rem] md:h-[20rem] bg-altDarkBlackBlue rounded-tr-[7rem] flex items-center md:items-start md:pt-20 justify-center flex-col md:flex-row text-white gap-14 md:gap-24 relative'>
            <img src={logo} alt="footer logo" className='md:-translate-x-36' />

            <div className='flex items-center md:items-start justify-center flex-col md:flex-row text-center md:text-left gap-10 md:gap-36'>

                <div className='flex items-center md:items-start justify-center flex-col gap-6'>
                    <span className='font-semibold'>Product</span>
                    <ul className='text-altGrayishBlue'>
                        <li className='hover:underline'><a href="/">Overview</a></li>
                        <li className='hover:underline'><a href="/">Pricing</a></li>
                        <li className='hover:underline'><a href="/">Marketplace</a></li>
                        <li className='hover:underline'><a href="/">Features</a></li>
                        <li className='hover:underline'><a href="/">Integrations</a></li>
                    </ul>
                </div>

                <div className='flex items-center md:items-start justify-center flex-col gap-6'>
                    <span className='font-semibold'>Company</span>
                    <ul className='text-altGrayishBlue'>
                        <li className='hover:underline'><a href="/">About</a></li>
                        <li className='hover:underline'><a href="/">Team</a></li>
                        <li className='hover:underline'><a href="/">Blog</a></li>
                        <li className='hover:underline'><a href="/">Careers</a></li>
                    </ul>
                </div>

                <div className='flex items-center md:items-start justify-center flex-col gap-6'>
                    <span className='font-semibold'>Connect</span>
                    <ul className='text-altGrayishBlue'>
                        <li className='hover:underline'><a href="/">Contact</a></li>
                        <li className='hover:underline'><a href="/">Newsletter</a></li>
                        <li className='hover:underline'><a href="/">LinkedIn</a></li>
                    </ul>
                </div>

            </div>

            <div className="attribution text-center absolute bottom-1">
               <span>Challenge by </span> 
                  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                        Frontend Mentor. 
                    <br className='md:hidden'/>
                </a>
                 <span> Coded by <a href="#">Paul Adekomi</a>.</span>
            </div>
        </footer>
    )
}

export default Footer