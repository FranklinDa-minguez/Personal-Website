'use client';

import './NavBar.css';
import { useEffect } from 'react';

const NavBar = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar') as HTMLElement;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        navbar.classList.add('-translate-y-full');
      } else {
        navbar.classList.remove('-translate-y-full');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar flex flex-row justify-around align-top border-2 w-10/12 mx-auto rounded-lg bg-black">
      <button className="neon-button">About Me</button>
      <button className="neon-button">Projects</button>
      <button className="neon-button">Experience</button>
      <button className="neon-button">Resume</button>
      <button className="neon-button">Links</button>
    </div>
  );
};

export default NavBar;