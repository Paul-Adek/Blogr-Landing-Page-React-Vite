import React from 'react'

function SectionTwo() {
    return (
        <section className='col-span-full h-[40rem] md:h-[25rem] flex items-center justify-center relative'>

            <div className='phoneImgCon absolute left-0 w-full md:w-1/2 h-[70%] md:h-full bg-phoneImg bg-center bg-contain bg-no-repeat -translate-y-44 md:-translate-y-10'></div>

            <div className='secTwoBg w-full h-[35rem] md:h-[20rem] rounded-tr-[6rem]  md:rounded-tr-[7rem] rounded-bl-[6rem] md:rounded-bl-[7rem] flex items-end md:items-center justify-end md:px-24 bg-patternCircles bg-no-repeat'>

                <div className='text-white text-center md:text-left w-full h-[65%] md:h-full md:w-1/2 md:mr-5 flex items-center md:items-start justify-center flex-col'>
                    <h3 className='text-3xl font-semibold'>State of the Art Infrastructure</h3>
                    <p className='pt-4'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>

            </div>


        </section>
    )
}

export default SectionTwo