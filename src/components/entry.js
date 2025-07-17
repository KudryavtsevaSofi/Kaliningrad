import '../assets/styles/entry.css';
import Background from '../assets/images/background.png';
import Ticket from '../assets/images/ticket.png';

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
        </div>
    );
};

export default Entry
