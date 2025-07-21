import '../assets/styles/schedule.css';
import Day1 from '../assets/images/day1.jpg';
import Day2 from '../assets/images/day2.jpg';

const Schedule = ( ) => {
    return (
        <div className="schedule-wrapper">
            <div className="title-block">
                <p className="schedule-title">Расписание</p>
            </div>
            <div className="days-block">
                <div className="container-fluid">
                    <div className="day1">
                        <div className='text-block-left'>
                            <p className='day-title'>1 день</p>
                            <p className='day-text'>Отдыхаем после перелета и наслаждаемся городскими ландшафтами</p>
                        </div>
                        <img className='day-img-right' src={Day1}></img>
                        <p className='start'>начать</p>
                    </div>
                    <div className="day2">
                        <div className='text-block-right'>
                            <p className='day-title'>2 день</p>
                            <p className='day-text'>Идем в центр</p>
                        </div>
                        <img className='day-img-left' src={Day2}></img>
                        <p className='start1'>начать</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;