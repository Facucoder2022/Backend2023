import { Link } from 'react-router-dom'
import { FiAlignJustify, FiX, FiHelpCircle } from "react-icons/fi";
import { useState } from 'react';


export const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const handleHamburgerMenu = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const categories = [
    {
      name: 'All products',
      link: '/products'
    },
    {
      name: 'Jerseys',
      link: '/products/Jersey'
    },
    {
      name: 'Shorts',
      link: '/products/Short'
    },
    {
      name: 'Shoes',
      link: '/products/Shoes'
    },
    {
      name: 'Merchandise',
      link: '/products/Merchandise'
    }
  ]

  return (
    <>
      <div className='flex items-center justify-between visible lg:hidden'>
        {visible ? <FiX onClick={handleHamburgerMenu} className='text-myDarkColor text-2xl cursor-pointer visible lg:hidden' />
        : <FiAlignJustify onClick={handleHamburgerMenu} className='text-myDarkColor text-2xl cursor-pointer visible lg:hidden' />  }
        <div className='flex items-center gap-2'>
          <Link href='/help' className='flex items-center gap-1 text-myLightGreen group'>
              <FiHelpCircle className='text-2xl group-hover:fill-myLightGreen group-hover:text-myDarkGreen transition-all'/>
              <span>Help</span>
            </Link>
        </div>
      </div>
      <nav className='flex items-center justify-between text-white gap-2 relative mt-2 md:m-auto'>
        <ul
          className={`justify-between text-white gap-4 flex-col lg:flex-row lg:flex
          ${ visible ? 'flex' : 'hidden' }`}
        >
          {categories.map((category) => (
            <li key={category.name} className='nav-item'>
              <Link to={category.link}>{category.name}</Link>
            </li>
          ))}
        </ul>
        <Link href='/help' className='items-center gap-1 text-white group hidden lg:flex hover:text-blue-500'>
          <FiHelpCircle className='text-2xl group-hover:fill-blue group-hover:text-blue transition-all '/>
          <span>Help</span>
        </Link>
      </nav>
    </>
  );
};