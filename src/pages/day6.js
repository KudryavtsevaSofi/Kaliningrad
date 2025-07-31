import '../assets/styles/days.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';
import Casino from '../assets/images/casino.jpg';
import Sobranie from '../assets/images/sobranie.jpg';
import Shambala from '../assets/images/shambala.jpg';

const Day6Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="day6-wrapper">
            <Header />
            <div>
                <Card className="bg-dark text-white top-card">
                    <Card.Img className="top-card-img" src={Casino} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='card-title'>5 день | музеи</Card.Title>
                        <Card.Text className='card-text'>
                        Ну а сегодня все просто - снова едем в Зеленоградск и заглядываем в игорную зону «Янтарная» — 
                        одну из четырех официально установленных игорных зон в России. Она появилась 1 июля 2009 года. <br/><br/>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Sobranie} alt="Card image"/>
                    <Card.Body>
                    <Card.Title>Казино Sobranie</Card.Title>
                    <Card.Text>
                        Казино Sobranie - флагман игорной зоны "Янтарная" в Калининградской области и одно из самых больших казино на европейском континенте.
                        В казино ежедневно и круглосуточно открыты общий зал казино площадью 3600 кв. м., vip-залы, концертная сцена.
                        Два ресторана под брендом «Offshore»: один предлагает европейскую и авторскую кухни, второй ориентирован на сегмент фаст-фуда и 
                        крафтовых алкогольных напитков. Работают 350 игровых аппаратов и 14 игровых столов.
                        <br/><br/>
                        <b>Адрес:</b> Зеленоградск, Зеленоградский р-н, пос. Куликово, ул. Пионерская, 50 (игорная зона "Янтарная")
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Shambala} alt="Card image"/>
                    <Card.Body>
                    <Card.Title>Казино Шамбала</Card.Title>
                    <Card.Text>
                        Комплекс Шамбала - развлекательный комплекс, расположенный на берегу Балтийского моря в игорной зоне «Янтарная», включает в себя 
                        казино, отель, рестораны, бары, концертную площадку. В игорной зоне проходят регулярные 
                        турниры покеру и кэш-игры, выступают звезды, проводятся специальные ивенты: турниры на игровых автоматах, Тараканьи Бега, 
                        Легенды Шамбалы.
                        <br/><br/>
                        <b>Адрес:</b> Калининградская область, игорная зона "Янтарная", поселок Куликово, улица Янтарная, здание 2
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default Day6Page;