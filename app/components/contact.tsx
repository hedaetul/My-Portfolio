'use client';

import Link from 'next/link';
import { ContactForm } from './contactForm';

const Contact = () => (
  <section
    id='contact'
    className='min-h-screen w-full flex items-center justify-center bg-blue-50 py-20'
  >
    <div className='container'>
      <div className='flex flex-col md:flex-row justify-between items-start'>
        <div className='md:w-1/2 mb-8 md:mb-0 pr-8'>
          <p className='text-indigo-600 font-semibold mb-2'>- LET'S CONNECT</p>
          <h2 className='text-4xl font-bold mb-6 text-gray-800'>
            Get in touch
          </h2>
          <p className='text-gray-600 mb-6'>
            I&apos;m currently available to take on new projects, so feel free to
            send me a message about anything that you want to run past me. You
            can contact anytime at 24/7
          </p>
          <Link
            href='mailto:hedaetul.official@gmail.com'
            className='text-indigo-600 font-semibold'
          >
            hedaetul.official@gmail.com
          </Link>
        </div>
        <div className='md:w-1/2'>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
