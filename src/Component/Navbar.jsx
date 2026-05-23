import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='bg-stone-400 border-t-2 border-black fixed w-full'>
        <ul className='flex gap-20 p-5 text-[1.2rem] border-t-2 border-white cursor-pointer'>
            <li><img src={Logo} alt="Logo" className='size-10 bg-yellow-100 rounded-2xl' /></li>
            <li>Home</li>
            <li>Categario</li>
            <li>About</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
