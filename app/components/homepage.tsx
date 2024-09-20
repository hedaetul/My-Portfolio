import pg1 from '@/dist/pg1.png';
import Image from 'next/image';
import Link from 'next/link';

const Homepage = () => (
  <section
    id='home'
    className='min-h-screen w-full flex items-center justify-between container bg-[#EFFBF8]'
  >
    <div className='text-left max-w-2xl'>
      <h1 className='text-6xl font-bold text-gray-800 mb-4'>
        Hi, I&apos;m <br />
        <span className='text-indigo-600'>Hedaetul!</span>Creative <br />
        Web Developer in <br />
        Bangladesh
      </h1>
      <p className='text-xl text-gray-600 mb-8'>
        I&apos;m a remote web developer working globally
      </p>
      <div className='flex gap-4'>
        <Link href='mailto:hedaetul.official@gmail.com' target='_blank'>
          <button className='bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors duration-200'>
            GOT A PROJECT?
          </button>
        </Link>
        <Link
          href='https://www.linkedin.com/messaging/compose/?recipient=007.hedaetul'
          target='_blank'
        >
          <button className='border-2 border-indigo-900 text-indigo-900 px-6 py-3 rounded-lg hover:bg-indigo-100 transition-colors duration-200'>
            LET&apos;S TALK
          </button>
        </Link>
      </div>
    </div>
    <div className='relative w-1/2 h-[37.5rem]'>
      <Image
        src={pg1}
        alt='Web Developer Illustration'
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  </section>
);

export default Homepage;
