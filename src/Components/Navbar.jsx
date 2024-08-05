import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
     const navItems = [
        { name: "About", link: "about" },
        { name: "Projects", link: "projects" },
        { name: "Experience", link: "experience" },
        { name: "Contact", link: "contact" },
      ];
  return (
    <div className=' fixed flex justify-center items-center top-3 md:top-6  w-full z-30'>
        <nav className='nav flex justify-center items-center gap-3 py-1 px-2 md:py-2 md:px-4  rounded-md' >
            {
                navItems.map((items)=>(
                   <div>
                    <Link 
                     to={items.link} 
                     spy={true} 
                     smooth={true} 
                     offset={10} 
                     duration={1000} 
                    className=' text-white text-[10px] md:text-sm font-semibold' href={items.link}>{items.name}</Link>
                   </div>    
                ))
            }
        </nav>
    </div>
  )
}

export default Navbar