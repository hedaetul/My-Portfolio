import SideNav from './components/sideNav';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div className='flex'>
      <div className='w-96 fixed left-0 top-0 h-screen'>
        <SideNav />
      </div>
      <div className='ml-96 flex-1'>
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
