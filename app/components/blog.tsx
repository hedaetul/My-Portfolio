import Link from 'next/link';

const BlogPost = ({
  date,
  title,
  link,
}: {
  date: string;
  title: string;
  link: string;
}) => (
  <div className='mb-8 p-6 border-l-4 border-indigo-600 bg-white shadow-md rounded-lg'>
    <p className='text-gray-500 mb-2'>{date}</p>
    <h3 className='text-2xl font-bold text-indigo-900 mb-2'>{title}</h3>
    <Link
      href={link}
      className='text-blue-600 hover:underline inline-flex items-center'
    >
      Learn More
      <svg
        className='w-4 h-4 ml-2'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M5 12h14'></path>
        <path d='M12 5l7 7-7 7'></path>
      </svg>
    </Link>
  </div>
);

const Blog = () => (
  <section
    id='blog'
    className='min-h-screen w-full flex items-center justify-center bg-gray-100 py-20'
  >
    <div className='container'>
      <div className='flex flex-col md:flex-row justify-between items-start'>
        <div className='md:w-1/3 mb-8 md:mb-0 pr-8 border-r border-gray-300'>
          <p className='text-indigo-600 font-semibold mb-2'>- BLOG</p>
          <h2 className='text-4xl font-bold mb-6 text-gray-800'>My Blog</h2>
          <button className='bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors duration-200 shadow-md'>
            GOT A PROJECT?
          </button>
        </div>
        <div className='md:w-2/3 md:pl-8'>
          <BlogPost
            date='April 12, 2023'
            title="How to fix the error 'CODE NOT FOUND' in Vercel?"
            link='https://hedaetul.hashnode.dev/how-to-fix-the-error-code-not-found-in-vercel'
          />
          {/* Add more BlogPost components here for additional blog posts */}
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
