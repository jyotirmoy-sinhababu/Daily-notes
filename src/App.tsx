import './App.css';
import LandingPage from './pages/landingPage/LandingPage';

import { Provider } from 'react-redux';
import { store } from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <>
        <LandingPage />
      </>
    </Provider>
  );
}

export default App;
