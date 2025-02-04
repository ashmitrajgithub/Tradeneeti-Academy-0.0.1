import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Questions from './components/FAQ/Questions';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CurrentStatus from './components/CurrentStatus';
import Location from './components/location/Location';
import LoadingScreen from './components/LoadingScreen';
import WhyUs from './components/whyUs/WhyUs';
// import TextAnimation from './components/TextAnimation'
import Home from './components/Home';

function App() {
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleLocationPopup = () => {
    setIsLocationPopupOpen(!isLocationPopupOpen);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="app">
          <Header toggleLocationPopup={toggleLocationPopup} />
          {/* <TextAnimation /> */}
          <Home/>
          <WhyUs />
          <CurrentStatus />
          <Questions />
          <ContactUs />
          <Footer />
          {isLocationPopupOpen && <Location closePopup={toggleLocationPopup} />}
        </div>
      )}
    </>
  );
}

export default App;
