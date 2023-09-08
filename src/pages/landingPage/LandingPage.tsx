import desktopDark from '../../assets/desktopDark.jpg';
import Nav from '../../components/nav/Nav';

const LandingPage = () => {
  return (
    <div className='flex justify-center'>
      <div>
        <img className='darkImg' src={desktopDark} alt='dark theme' />
        <Nav />
      </div>
    </div>
  );
};

export default LandingPage;
