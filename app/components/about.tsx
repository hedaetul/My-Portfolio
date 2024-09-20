const About = () => (
  <section
    id='about'
    className='min-h-screen w-full container flex flex-col items-center justify-center bg-white py-20'
  >
    <div className=' w-full'>
      <h2 className='text-4xl font-bold mb-12 text-gray-800'>
        NICE TO MEET YOU!
      </h2>
      <div className='flex flex-col lg:flex-row items-start justify-between gap-8'>
        <div className='lg:w-1/2'>
          <h3 className='text-5xl font-bold text-indigo-900 mb-4'>
            Hedaetul Islam
          </h3>
          <p className='text-xl text-indigo-900 mb-6'>Web Developer</p>
          <button className='bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors duration-200'>
            GOT A PROJECT?
          </button>
        </div>
        <div className='lg:w-1/2'>
          <h2 className='text-4xl font-bold mb-12 text-gray-800'>
            Hi there, I'm Hedaetul Islam
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed mb-6'>
            I am a skilled web developer specializing in front-end technologies,
            with expertise in HTML, CSS, Tailwind, React, Next.js, ChakraUI,
            ShadCdnUi, MUI. I excel at creating modern, responsive, and
            user-friendly web interfaces.
            <br />
            My proficiency with GitHub ensures effective collaboration and
            version control. I am passionate about leveraging my skills to
            deliver high-quality, innovative web solutions and continuously
            learning to stay updated with the latest industry trends.
          </p>
          <p className='text-gray-700 text-lg leading-relaxed'>
            🌱 I’m currently learning Express.js
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-between gap-4 mt-16'>
        <StatCard
          number='1+'
          text='YEARS OF EXPERIENCE'
          bgColor='bg-green-100'
        />
        <StatCard
          number='5+'
          text='PROJECTS COMPLETED'
          bgColor='bg-orange-100'
        />
       
      </div>
    </div>
  </section>
);

const StatCard = ({
  number,
  text,
  bgColor,
}: {
  number: string;
  text: string;
  bgColor: string;
}) => (
  <div className={`${bgColor} p-8 rounded-lg text-center flex-1 min-w-[200px]`}>
    <h4 className='text-4xl font-bold text-indigo-900 mb-2'>{number}</h4>
    <p className='text-indigo-900 uppercase'>{text}</p>
  </div>
);

export default About;
