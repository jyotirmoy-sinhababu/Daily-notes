import desktopDark from '../../assets/desktopDark.jpg';
import Nav from '../../components/nav/Nav';

const LandingPage = () => {
  return (
    <div className='flex justify-center '>
      <div>
        <img className='w-96' src={desktopDark} alt='dark theme' />
        <Nav />
      </div>
    </div>
  );
};

export default LandingPage;
