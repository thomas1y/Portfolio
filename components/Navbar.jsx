import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo2.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
  style={{ backgroundColor: `${navBg}` }}
  className={
    shadow
      ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
      : 'fixed w-full h-20 z-[100]'
  }
>
  <div className='relative flex items-center w-full h-full px-2 2xl:px-16'>
    {/* Logo */}
    <Link href='/'>
      
        <Image
          src={NavLogo}
          alt='/'
          width='125'
          height='50'
          className='cursor-pointer'
        />
      
    </Link>

    {/* Centered Nav Items */}
    <div className='absolute left-1/2 transform -translate-x-1/2'>
      <ul style={{ color: `${linkColor}` }} className='hidden md:flex space-x-10'>
        <li className='text-sm uppercase hover:border-b'>
          <Link href='/'>Home</Link>
        </li>
        <li className='text-sm uppercase hover:border-b'>
          <Link href='/#about'>About</Link>
        </li>
        <li className='text-sm uppercase hover:border-b'>
          <Link href='/#skills'>Skills</Link>
        </li>
        <li className='text-sm uppercase hover:border-b'>
          <Link href='/#projects'>Projects</Link>
        </li>
        <li className='text-sm uppercase hover:border-b'>
          <Link href="/#experience">Experience</Link>

        </li>
        <li className='text-sm uppercase hover:border-b'>
          <Link href='/#contact'>Contact</Link>
        </li>
      </ul>
    </div>

    {/* Hamburger Menu Icon */}
    <div
      style={{ color: `${linkColor}` }}
      onClick={handleNav}
      className='md:hidden ml-auto'
    >
      <AiOutlineMenu size={25} />
    </div>
  </div>

  {/* Mobile Menu + Overlay (unchanged) */}
  {/* You can leave everything below as-is from your original code */}
</div>

  );
};

export default Navbar;
