import React from 'react'

function SectionOne() {
    return (
        <section className='sectionOne col-span-full h-[70rem] md:h-[45rem] bg-white py-16 pt-24 md:pt-28 md:py-28 bg-secOneBgImgMob md:bg-secOneBgImgDesk bg-no-repeat bg-contain bg-center'>
            <h2 className='text-3xl md:text-4xl text-altDarkBlackBlue text-center font-semibold'>Designed for the future</h2>

            <div className='w-full h-full flex items-center justify-end flex-col md:flex-row-reverse'>
                <div className='w-full md:w-1/2 h-2/3 md:h-full overflow-hidden text-center md:text-left flex items-center justify-center flex-col gap-14 md:gap-10 md:px-24 md:pt-24'>
                    <div>
                        <h3 className='text-3xl font-semibold text-altVeryDarkBlue'>Introducing an extensible editor</h3>
                        <p className='py-5 text-altDarkBlackBlue'>
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                            change the looks of a blog.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold text-altVeryDarkBlue'>Robust content management</h3>
                        <p className='py-5 text-altDarkBlackBlue'>
                            Flexible content management enables users to easily move through posts. Increase the usability of your blog
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionOne