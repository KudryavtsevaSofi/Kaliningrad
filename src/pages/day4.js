import '../assets/styles/days.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Card, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Zelenogradsk from '../assets/images/zelenogradsk.jpg';
import Kosa from '../assets/images/kosa.jpg';
import Architecture from '../assets/images/architecture.jpg';
import Seafront from '../assets/images/seafront.jpg';
import Promenad from '../assets/images/promenad.jpg';

const Day4Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="day4-wrapper">
            <Header />
            <div>
                <Card className="bg-dark text-white top-card">
                    <Card.Img className="top-card-img" src={Zelenogradsk} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='card-title'>4 день | отправляемся в зеленоградск</Card.Title>
                        <Card.Text className='card-text'>
                        Зеленоградск — пляжный курорт на побережье Балтийского моря, в 35 км от Калининграда. До 1946 года город принадлежал Пруссии и назывался Кранц.<br/><br/>
                        Сегодня нам предстоит посетить: <br/>
                        1. <a href="#day4sec1" className='link-text'>Куршская коса</a> <br/>
                        2. <a href="#day4sec2" className='link-text'>Европейская архитектура</a> <br/>
                        3. <a href="#day4sec3" className='link-text'>Набережная Балтийского моря</a> <br/>
                        4. <a href="#day4sec4" className='link-text'>Куда сходить вечером?</a> <br/>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Accordion flush className='accordion1'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion4-header'>Историческая справка</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                Ещё в начале 19 столетия немцы поняли, что морской воздух и вода полезны для здоровья. Тогда Кранц стали развивать как курорт: 
                                строили здесь гостиницы и водолечебницы, открывали кафе и рестораны. В 1844 году город получил звание королевского курорта. 
                                А после вхождения в состав СССР в 1946 году он стал излюбленным местом отдыха уже советских граждан. 
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='accordion4-header'>Как добраться?</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <b>Автобус:</b> Из Калининграда сюда ходят автобусы №№ 114, 114а, 140, 141. Вот расписание. Они отправляются с автовокзала, 
                                расположенного рядом с Южным ж/д вокзалом, с интервалом полчаса-час. Также можно сесть на остановках в центре Калининграда. 
                                Дорога занимает от 55 минут до 1 часа 15 минут. Автостанция Зеленоградска находится рядом с ж/д вокзалом, билеты продаются 
                                в кассе. <br/>

                                <b>Электричка:</b> Быстрее и удобнее добираться в Зеленоградск на электричке. Электропоезда до станции Зеленоградск-Новый ходят 
                                раз в час-полтора. В среднем поездка длится 40-45 минут, хотя на скорых поездах можно доехать и за 28 минут. Сесть можно и на 
                                Южном, и на Северном ж/д вокзалах Калининграда. Билеты покупайте в кассах, терминалах самообслуживания, в приложении Туту 
                                Электрички. 
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='d1-block' id='day4sec1'>
                    <p className='block-title'>Куршская коса</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Kosa} />
                    <Card.Body>
                    <Card.Text>
                        Национальный парк «Куршская коса» расположен в приграничной с Литвой части Калининградской области на узкой полоске суши между 
                        соленым Балтийским морем и пресноводным Куршским заливом. Северные рубежи парка проходят по российско-литовской границе.
                        Природная уникальность территории национального парка состоит в том, что это самая крупная песчаная пересыпь в мире. Дюнные 
                        ландшафты косы отличаются исключительной красотой и эстетическим воздействием на человека и представляют собой уникальный объект 
                        для развития экологического туризма. <br/>
                        Для посещения уникального парка необходимо приобрести билеты на КПП или на {" "}
                        <a className='blue-link-text' href='https://kkosa.ru/pay'>официальном сайте</a>.
                        Рекомендуем насладиться невероятными видами, передвигаясь пешком или на велосипеде.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day4sec2'>
                    <p className='block-title'>Архитектура</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Architecture} />
                    <Card.Body>
                    <Card.Text>
                        Пешеходный Курортный проспект выглядит словно улочка европейского города. Проспект украшают отреставрированные немецкие дома, 
                        среди которых встречаются настоящие памятники архитектуры. Обратите внимание на «Курхаус Кранц» (перед ним стоит памятник Ленину) 
                        — гостиница была построена в 1843 году и действует до сих пор. Ещё один интересный объект на Курортном — бывший почтамт Кранца, 
                        кирпичное здание в неоготическом стиле. А ещё на проспекте есть необычный светофор — для кошек. Правда, мурлыки им не пользуются 
                        и ходят где хотят.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day4sec3'>
                    <p className='block-title'>Набережная</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Seafront} />
                    <Card.Body>
                    <Card.Text>
                        Центр притяжения Зеленоградска — длинная и благоустроенная набережная. Здесь можно гулять и любоваться видами моря, отдыхать 
                        на скамейках, заниматься спортом на уличных тренажерах и кататься по велодорожке на байке, самокате или роликах. Вдоль набережной 
                        много кафе, ресторанов, киосков с уличной едой и горячими напитками. Только здесь можно попробовать разные виды глинтвейна — например, 
                        с ежевикой или таёжными шишками. Вдоль променада встречаются симпатичные скульптуры, например, балтийский тюлень.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day3sec4'>
                    <p className='block-title-smallest'>Куда сходить вечером?</p>
                    <Card className='card1'>
                        <Card.Img className='card1-img' variant="top" src={Promenad} />
                        <Card.Body>
                        <Card.Text>
                            <a href='https://promenad39.ru/' className='blue-link-text'> Променад </a> <br/>
                            Адрес: ул. Володарского, 24В<br/>
                            Окунитесь в атмосферу гостеприимства, наслаждайтесь видом на море и поймайте волну гастрономического удовольствия
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Day4Page;