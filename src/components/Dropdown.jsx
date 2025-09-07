import React from 'react';

import { useRef, useState, useEffect } from 'react';

function Dropdown({isOpen, items}) {

    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
            // measure natural height
        }
    }, [items]);

    return (
        <div className={`absolute left-0 w-max h-42 translate-y-9 shadow-2xl md:shadow-none rounded-md overflow-hidden z-50 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{
                maxHeight: isOpen ? `${height}px` : "0px", // animate height
            }}>
            

            <ul
                ref={contentRef}
                className='w-36 h-42 bg-white text-altVeryDarkBlue flex items-start justify-center flex-col p-4 gap-2'>
                {items.map((item, i) => (
                    <li
                        key={i} className='hover:font-semibold'>
                        <a href="/">{item}</a>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Dropdown