import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import '../assets/styles/home.css';
import Header from '../components/header';
import Entry from '../components/entry';
import Schedule from '../components/schedule';
import Homelins from '../components/homelins';
import Footer from '../components/footer';
import Desktop from '../assets/images/desktop-background.jpg';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 800px)');
      const handleMediaChange = (e) => setIsMobile(e.matches);
      
      setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleMediaChange);
      
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1)); // Убираем "#"
        if (element) {
          // Прокручиваем с небольшим отступом, если есть фиксированный header
          const offset = 100; // Настройте под ваш дизайн
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Задержка для lazy-загрузки
    const timer = setTimeout(scrollToHash, 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="page-wrapper">
      {isMobile ? (
        <div className='mobile-display'>
          <Header/>
          <main className="main-content">
            <Entry/>
            <Schedule/>
            <Homelins/>
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