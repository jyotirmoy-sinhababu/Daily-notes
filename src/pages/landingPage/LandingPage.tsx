import desktopDark from '../../assets/desktopDark.jpg';
import Nav from '../../components/nav/Nav';

import './landingStyle.css';

const LandingPage = () => {
  return (
    <div className='landingPage-cnt'>
      <div className='landingFirst-cnt'>
        <img className='dark-img' src={desktopDark} alt='dark theme' />
        <Nav />
      </div>
    </div>
  );
};

export default LandingPage;
