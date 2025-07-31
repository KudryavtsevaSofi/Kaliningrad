import '../assets/styles/schedule.css';
import Day1 from '../assets/images/day1.jpg';
import Day2 from '../assets/images/day2.jpg';
import Day3 from '../assets/images/day3.jpeg';
import Day4 from '../assets/images/day4.jpeg';
import Day5 from '../assets/images/day5.jpg';
import Day6 from '../assets/images/day6.jpg';
import { Link } from 'react-router-dom';

const Schedule = ( ) => {
    return (
        <div className="schedule-wrapper">
            <div className="title-block">
                <p className="schedule-title" id='section1'>Расписание</p>
            </div>
            <div className="days-block">
                <div className="container-fluid">
                    <div className="day1">
                        <div className='text-block-left'>
                            <p className='day-title'>1 день</p>
                            <p className='day-text'>Отдыхаем после перелета и наслаждаемся городскими ландшафтами</p>
                        </div>
                        <img className='day-img-right' src={Day1} alt="Card image"></img>
                        <Link to="/day1" className='start-right'>начать</Link>
                    </div>
                    <div className="day2">
                        <div className='text-block-right'>
                            <p className='day-title'>2 день</p>
                            <p className='day-text'>Идем в центр</p>
                        </div>
                        <img className='day-img-left' src={Day2} alt="Card image"></img>
                        <Link to="/day2" className='start-left'>начать</Link>
                    </div>
                    <div className="day3">
                        <div className='text-block-left'>
                            <p className='day-title'>3 день</p>
                            <p className='day-text'>Погружаемся в историю города-крепости </p>
                        </div>
                        <img className='day-img-right' src={Day3} alt="Card image"></img>
                        <Link to="/day3" className='start-right'>начать</Link>
                    </div>
                    <div className="day4">
                        <div className='text-block-right'>
                            <p className='day-title'>4 день</p>
                            <p className='day-text'>Путешествие внутри путешествия: едем в Зеленоградск</p>
                        </div>
                        <img className='day-img-left' src={Day4} alt="Card image"></img>
                        <Link to="/day4" className='start-left'>начать</Link>
                    </div>
                    <div className="day5">
                        <div className='text-block-left'>
                            <p className='day-title'>5 день</p>
                            <p className='day-text'>Узнаем культурное наследие - самое время заглянуть в музеи</p>
                        </div>
                        <img className='day-img-right' src={Day5} alt="Card image"></img>
                        <Link to="/day5" className='start-right'>начать</Link>
                    </div>
                    <div className="day6">
                        <div className='text-block-right'>
                            <p className='day-title'>6 день</p>
                            <p className='day-text'>Один раз живем - идем в отрыв!</p>
                        </div>
                        <img className='day-img-left' src={Day6} alt="Card image"></img>
                        <Link to="/day6" className='start-left'>начать</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;