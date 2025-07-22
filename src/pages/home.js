import { useEffect, useState } from 'react';
import '../assets/styles/home.css';
import Header from '../components/header';
import Entry from '../components/entry';
import Schedule from '../components/schedule';
import Footer from '../components/footer';
import Desktop from '../assets/images/desktop-background.jpg';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 800px)');
      const handleMediaChange = (e) => setIsMobile(e.matches);
      
      setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleMediaChange);
      
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <div className="page-wrapper">
      {isMobile ? (
        <div className='mobile-display'>
          <Header/>
          <main className="main-content">
            <Entry/>
            <Schedule/>
            <Footer/>
          </main>
        </div>
      ) : (
        <div className='desktop-display'>
          <div className="background-desktop-container">
            <img src={Desktop} className='desktop-background' alt="Фон" />
          </div>
          <div className="desktop-content-overlay">
            <p className='desktop-text'>Пожалуйста, откройте сайт <br/>через мобильное устройство</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage;