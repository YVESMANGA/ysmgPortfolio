'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  // État pour gérer l'ouverture/fermeture du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='p-5 md:px-[15%]' >
      <header className='flex justify-between items-center p-4'>
        
        <a href="#home" className='flex items-center font-bold text-3xl md:text-xl'>
          THE
          <span className='text-accent'>YSMG</span>
        </a>

        {/* Menu de navigation sur grands écrans */}
        <ul className='hidden xl:flex space-x-4'>
          <li>
            <a href="#home" className='btn btn-sm btn-ghost'>Home</a>
          </li>
          <li>
            <a href="#about" className='btn btn-sm btn-ghost'>A propos</a>
          </li>
          <li>
            <a href="#project" className='btn btn-sm btn-ghost'>Mes projets</a>
          </li>
          <li>
            <a href="#footer" className='btn btn-sm btn-ghost'>Contacts</a>
          </li>
        </ul>

        {/* Icône du menu mobile */}
      
        <FontAwesomeIcon icon={faBars} className='md:hidden block text-5xl cursor-pointer'onClick={toggleMenu} />

        {/* Menu mobile */}
        <div
          className={`absolute  list-none xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 'translateY-0 opacity-100' : 'translateY-[-100%] opacity-0'}`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
        >
          <li>
            <a href="#home" className='btn btn-sm btn-ghost'>Home</a>
          </li>
          <li>
            <a href="#about" className='btn btn-sm btn-ghost'>A propos</a>
          </li>
          <li>
            <a href="#project" className='btn btn-sm btn-ghost'>Mes projets</a>
          </li>
          <li>
            <a href="#footer" className='btn btn-sm btn-ghost'>Contacts</a>
          </li>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
