import React from 'react'

function SectionThree() {
    return (
        <section className='sectionThree col-span-full h-[55rem] bg-white flex items-end  justify-center  md:items-center md:justify-end bg-laptopImgMob md:bg-laptopImgDesk bg-no-repeat'>
            <div className='w-full md:w-1/2 h-2/3 md:h-full overflow-hidden text-center md:text-left flex items-center justify-center flex-col md:px-16'>

                <div>
                    <h3 className='text-3xl font-semibold text-altVeryDarkBlue'>Free, open, simple</h3>
                    <p className='py-5 text-altDarkBlackBlue'>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                </div>

                <div>
                    <h3 className='text-3xl font-semibold text-altVeryDarkBlue'>Powerful tooling</h3>
                    <p className='py-5 text-altDarkBlackBlue'>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default SectionThree