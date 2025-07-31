import '../assets/styles/days.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Card, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Tower from '../assets/images/tower.jpg';
import History from '../assets/images/history.jpg';
import History1 from '../assets/images/history1.jpg';
import Fort5 from '../assets/images/fort5.jpg';
import Zoo from '../assets/images/zoo.jpg';
import Attention from '../assets/images/attention.png';
import Vrangel from '../assets/images/vrangel.jpeg';
import Prud1 from '../assets/images/prud1.jpg';
import Dona from '../assets/images/dona.jpg';
import Brecel from '../assets/images/brecel.jpg';
import Vtarelke from '../assets/images/vtarelke.jpg';

const Day3Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="day3-wrapper">
            <Header />
            <div>
                <Card className="bg-dark text-white top-card">
                    <Card.Img className="top-card-img" src={Tower} alt="" />
                    <Card.ImgOverlay>
                        <Card.Title className='card-title'>3 день | история города-крепости</Card.Title>
                        <Card.Text className='card-text'>
                        Кёнигсберг был создан рыцарями тевтонского ордена как город-крепость, таким он и оставался на протяжении многих столетий. 
                        В наши дни история и объекты оборонительной линии города стали достоянием нескольких музейных экспозиций. Теперь Кёнигсберг 
                        — это город-музей.<br/>
                        Сегодня нам предстоит посетить: <br/>
                        1. <a href="#day3sec1" className='link-text'>Историко-художественный музей Форт №5</a> <br/>
                        2. <a href="#day3sec2" className='link-text'>Калининградский зоопарк</a> <br/>
                        3. <a href="#day3sec3" className='link-text'>Башни и смотровые площадки</a> <br/>
                        4. <a href="#day3sec4" className='link-text'>Куда сходить вечером?</a> <br/>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Accordion flush className='accordion1'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion4-header'>Историческая справка</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                Самый западный город России до 1945 года был столицей немецкой провинции Восточная Пруссия и назывался Кёнигсбергом. 
                                А основан он был в 1255‑м, когда на холме, возвышающемся над рекой Преголей, тевтонские рыцари заложили замок.
                                Первые оборонительные стены возвели вокруг строения и образовавшихся тут поселений (сейчас это районы исторического центра: 
                                Альтштадт, Кнайпхоф и Лёбенихт) ещё в XIV веке. 
                            </div>
                            <Card className='accordion-card'>
                                <Card.Img className='card1-img' variant="top" src={History} alt=""/>
                                <Card.Body>
                                <Card.Text>
                                    Около 1760 года. Расписанный офорт. Фридрих Бернар Бернхард, Георг Бальтазар Пробст, Аусбург
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <div>
                                Новую полосу укреплений построили в первой половине XVII века, но со временем 
                                многочисленные валы и ротонды устарели и перестали защищать город. В 1843 году стартовало возведение очередного 
                                фортификационного пояса Кёнигсберга (работы продолжались почти 20 лет), которое повторяло очертания предыдущего: 11 бастионов, 
                                три равелина (треугольные сооружения перед крепостным рвом, прикрывающие стену и препятствующие лобовой атаке), две башни, 
                                городские ворота. Сегодня эти краснокирпичные строения — яркие памятники архитектуры неоготики.
                            </div>
                            <Card className='accordion-card'>
                                <Card.Img className='card1-img' variant="top" src={History1} alt=""/>
                                <Card.Body>
                                <Card.Text>
                                    1843 год. Старейший снимок Калининграда
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <div>
                                В 1872 году началось строительство 43‑километровой оборонительной линии уже на самых подступах к Кёнигсбергу: за два 
                                десятилетия возникло целое кольцо из 12 основных и трёх промежуточных фортов. Все они были 
                                окружены рвами и, что интересно, у каждого из них есть собственное имя (в честь немецких монархов и военных деятелей). 
                                Эти оборонительные сооружения не тронула Первая мировая война (активные сражения не дошли до Кёнигсберга), а вот во 
                                время Второй мировой некоторые из них пострадали от артобстрелов. <br/><br/>
                                Судьбы именных фортов Калининграда сложились по‑разному. Какие‑то из них находятся в заброшенном состоянии, некоторые 
                                перешли в частную собственность. Для посещения сегодня доступны только четыре объекта.
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='d1-block' id='day3sec1'>
                    <p className='block-title'>Форт №5</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Fort5} alt=""/>
                    <Card.Body>
                    <Card.Text>
                        <b>Адрес:</b> Калининград, СНТ Дачное, улица М.А. Булатова Форт № 5 <br/><br/>
                        Строительство форта № 5 "Король Фридрих Вильгельм III" было завершено в 1886 году. 3-5 апреля 1945 года форт № 5 подвергался 
                        огневым ударам артиллерии особой мощности. В ходе штурма советскими саперами был взорван левофланговый каземат, двумя направленными 
                        взрывами обрушены стенки рва, произведен подрыв напольного капонира форта. Сквозь образовавшийся пролом штурмовые отряды проникли 
                        внутрь форта № 5. После упорного продолжительного боя гарнизон форта № 5 капитулировал утром 8 апреля 1945 года.За блокаду и взятие 
                        форта № 5 пятнадцать советских солдат и офицеров были удостоены звания Героя Советского Союза. С 1979 года форт № 5 имеет статус музея 
                        истории Великой Отечественной войны.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day3sec2'>
                    <p className='block-title'>Зоопарк</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Zoo} alt=""/>
                    <Card.Body>
                    <Card.Text>
                        Калининградский зоопарк — один из трёх зоопарков в современной России, имеющих статус «исторический зоопарк». 
                        Калининградский зоопарк одновременно является и дендропарком, и достопримечательности зоопарка — это не только животные, 
                        но ещё и редкие растения, например, реликтовое дерево гинкго, ровесник динозавров.<br/><br/>
                        <b>Адрес:</b> просп. Мира, 26 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='homlin-link'>
                    <Card.Body className='homlin-text'>
                        <img className='attention-img' src={Attention} alt=""/>
                        Также здесь вы можете познакомиться с {" "}
                        <Link to="/#Ulya" className='blue-link-text'>
                            Улей
                        </Link>
                        , малышкой-хомлином
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day3sec3'>
                    <p className='block-title-smallest'>Башни и смотровые площадки</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Vrangel} alt=""/>
                    <Card.Body>
                    <Card.Title>Башня Врангель</Card.Title>
                    <Card.Text>
                        Башня "Врангель" была построена в Кенигсберге на юго-западном берегу Верхнего пруда в 1853-1859 годах по проекту архитекторов 
                        директора фортификационного строительства инженера-капитана Ирфюгельбрехта и инженера-лейтенанта фон Хайля, названа в честь 
                        генерал-фельдмаршала графа Фридриха Генриха Эрнста фон Врангеля (1784-1877).Во время Первой Мировой войны в башне размещался 
                        лазарет, до 1945 года в ней располагался молодежно-туристический клуб. В годы Второй Мировой войны в башне функционировали 
                        госпиталь и крупный опорный пункт.В ходе артиллерийских обстрелов в апреле 1945 года стены и своды башни получили прямые 
                        попадания и были повреждены, но ни разу не были пробиты. Гарнизон башни "Врангель" капитулировал уже после того, как генерал 
                        Отто фон Ляш подписал акт о капитуляции Кёнигсберга.
                        <br/><br/>
                        <b>Адрес:</b> ул. Профессора Баранова, 2А
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='homlin-link-V'>
                    <Card.Body className='homlin-text'>
                        <img className='attention-img' src={Attention} alt=""/>
                        Также здесь вы можете познакомиться с {" "}
                        <Link to="/#Varvara" className='blue-link-text'>
                            Варварой
                        </Link>
                        , мамой-хомлином
                    </Card.Body>
                </Card>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Prud1} alt=""/>
                    <Card.Body>
                    <Card.Title>Смотровые площадка</Card.Title>
                    <Card.Text>
                        Две башни расположены возле Верхнего пруда, видом на который можно насладится глядя с нескольких смотровых площадок.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Dona} alt=""/>
                    <Card.Body>
                    <Card.Title>Башня Дона и Музей янтаря</Card.Title>
                    <Card.Text>
                        Башня "Дона" была построена в Кенигсберге на юго-восточном берегу Верхнего пруда в 1853 году по проекту архитекторов 
                        инженера-капитана директора фортификационного строительства Ирфюгельбрехта и инженера-лейтенанта фон Хайля, названа в честь 
                        генерала Карла Фридриха Эмиля цу Дона-Шлобитена.По своим характеристикам практически идентична (зеркальна) башне "Врангель". 
                        Во время штурма Кенигсберга в апреле 1945 года гарнизон башни "Дона" сдался одним из последних, 10 апреля 1945 года на башне 
                        было водружено Красное знамя.До 1969 года в башне "Дона" размещался складской комплекс военторга № 540, с 1979 года в помещениях 
                        башни функционирует Музей янтаря.
                        <br/><br/>
                        <b>Адрес:</b> площадь Маршала Василевского, 1
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='homlin-link'>
                    <Card.Body className='homlin-text'>
                        <img className='attention-img' src={Attention} alt=""/>
                        Также здесь вы можете познакомиться с {" "}
                        <Link to="/#Marta" className='blue-link-text'>
                            Мартой
                        </Link>
                        , бабушкой-хомлином
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day3sec4'>
                    <p className='block-title-smallest'>Куда сходить вечером?</p>
                    <Card className='card1'>
                        <Card.Img className='card1-img' variant="top" src={Brecel} alt=""/>
                        <Card.Body>
                        <Card.Text>
                            <a href='https://rk-rk.ru/restorany/pivnoj-restoran-bretsel/' className='blue-link-text'> Брецель </a> <br/>
                            Адрес: ул. Александра Невского, 10<br/>
                            «Брецель» располагает собственной пивоварней, производящей семь сортов свежего пива<br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='card1'>
                        <Card.Img className='card1-img' variant="top" src={Vtarelke} alt=""/>
                        <Card.Body>
                        <Card.Text>
                            <a href='https://istoriyavtarelke.ru/' className='blue-link-text'> История в тарелке </a> <br/>
                            Адрес: ул. Литовский Вал, 21Д<br/>
                            Дегустационные сеты от шеф-повара, путешествие сквозь века по истории Калининградской области с ее самой вкусной стороны в старинном блокгаузе XIX века<br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Day3Page;