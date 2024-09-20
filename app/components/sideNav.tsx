'use client';

import Hedaetul from '@/dist/AvatarMaker.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaLinkedinIn,
  FaPen,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';

const NavItem = ({
  section,
  icon: Icon,
  children,
  isActive,
}: {
  section: string;
  icon: React.ElementType;
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <button
    onClick={() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className={`flex items-center space-x-3 transition-colors duration-200 py-2 px-4 rounded-lg w-full text-left ${
      isActive
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
    }`}
  >
    <Icon className='w-5 h-5' />
    <span>{children}</span>
  </button>
);

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) => (
  <a
    href={href}
    className='text-gray-500 hover:text-blue-600 transition-colors duration-200'
    target='_blank'
    rel='noopener noreferrer'
  >
    <Icon className='w-5 h-5' />
  </a>
);

const Sidenav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className='w-full bg-white h-screen flex flex-col justify-between p-8 nav-shadow'>
      <div className='space-y-8'>
        <div className='flex flex-col items-center'>
          <div className='w-32 h-32 mb-4 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4 ring-offset-white'>
            <Image
              src={Hedaetul}
              alt='Hedaetul Islam'
              width={128}
              height={128}
              className='object-cover w-full h-full'
            />
          </div>
          <h2 className='text-2xl font-bold text-gray-800'>Hedaetul Islam</h2>
          <p className='text-blue-600 font-medium'>Web Developer</p>
        </div>
        <div className='space-y-2'>
          <NavItem
            section='home'
            icon={FaHome}
            isActive={activeSection === 'home'}
          >
            Home
          </NavItem>
          <NavItem
            section='about'
            icon={FaUser}
            isActive={activeSection === 'about'}
          >
            About
          </NavItem>
          <NavItem
            section='blog'
            icon={FaPen}
            isActive={activeSection === 'blog'}
          >
            Blog
          </NavItem>
          <NavItem
            section='contact'
            icon={FaEnvelope}
            isActive={activeSection === 'contact'}
          >
            Contact
          </NavItem>
        </div>
      </div>
      <div className='flex justify-center space-x-6'>
        <SocialIcon href='https://facebook.com' icon={FaFacebookF} />
        <SocialIcon href='https://twitter.com' icon={FaTwitter} />
        <SocialIcon href='https://linkedin.com' icon={FaLinkedinIn} />
      </div>
    </nav>
  );
};

export default Sidenav;
