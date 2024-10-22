'use client';

import './NavBar.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();

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

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div id="navbar" className="navbar flex flex-row justify-around align-top border-2 w-1/2 mx-auto rounded-lg bg-black mt-2 flex-wrap">
      <button className="neon-button" onClick={() => handleNavigation('/')}>Home</button>
      <button className="neon-button" onClick={() => handleNavigation('/AboutMe')}>About Me</button>
      <button className="neon-button" onClick={() => handleNavigation('/Projects')}>Projects</button>
      <button className="neon-button" onClick={() => handleNavigation('/Experience')}>Experience</button>
      <button className="neon-button" onClick={() => handleNavigation('/Resume')}>Resume</button>
      <button className="neon-button" onClick={() => handleNavigation('/Links')}>Links</button>
    </div>
  );
};

export default NavBar;