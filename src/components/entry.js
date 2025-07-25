import '../assets/styles/entry.css';
import Background from '../assets/images/background.png';
import Ticket from '../assets/images/ticket.png';
import Plane from '../assets/images/plane.png';

const Entry = () => {
    return (
        <div className="hero-section">
            <div className="background-container">
                <img className='back1' src={Background} alt="Фон"/>
            </div>
            <div className="content-overlay">
                <p className='main-text-left'>А почему бы нам <br/> не поехать в ...</p>
                <img className='ticket' src={Ticket} alt="Фон"/>
                <p className='main-text-right'>Путеводитель <br/> по Калининграду </p>
            </div>
            <div className='animation'>
                <svg
                className='animation1'
                version="1.1"
                viewBox="0 0 430 100"
                baseProfile="full"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <foreignObject x1="380" y1="0" width="50" height="50" className='plane-block'>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%' }}>
                            <img 
                            src={Plane} 
                            className='plane-image1'
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            alt="Самолёт"
                            />
                        </div>
                    </foreignObject>
                </svg>
                
                <svg
                className='animation2'
                version="1.1"
                viewBox="0 0 430 100"
                baseProfile="full"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <foreignObject x1="380" y1="0" width="50" height="50" className='plane-block'>
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%' }}>
                            <img 
                            src={Plane} 
                            className='plane-image2'
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            alt="Самолёт"
                            />
                        </div>
                    </foreignObject>
                </svg>
            </div>
            <div className='circle-block'>
                <svg
                    className='button'
                    version="1.1"
                    viewBox="0 0 100 100"
                    baseProfile="full"
                    width="100"
                    height="200"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" fill="none" />
                    <foreignObject x="0" y="33" width="100" height="100" className='button-text-block'>
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <p>Что входит <br/> в состав?</p>
                        </div>
                    </foreignObject>
                </svg>
                <div className='included'>
                    <p className='included1'>Музеи и <br/>памятники</p>
                    <p className='included2'>Немецкая <br/> архитектура <br/> и форты</p>
                    <p className='included3'>Побережье <br/> Балтийского моря</p>
                    <p className='included4'>Тематические <br/> бары и локальная кухня</p>
                    <p className='included5'>Парки, сады и <br/> зоны отдыха</p>
                </div>
            </div>
        </div>
    );
};

export default Entry
