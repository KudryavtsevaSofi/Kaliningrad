import '../assets/styles/days.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Card, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Center from '../assets/images/center.jpg';
import Island1 from '../assets/images/island1.jpg';
import Island2 from '../assets/images/island2.jpg';
import Island3 from '../assets/images/island3.jpg';
import Sobor from '../assets/images/sobor.jpg';
import Kant from '../assets/images/kant.jpg';
import Village from '../assets/images/village.jpg';
import Attention from '../assets/images/attention.png';
import Alchem from '../assets/images/alchem.jpg';
import Pirat from '../assets/images/pirat.jpg';
import Dk from '../assets/images/dk.jpg';

const Day2Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="day2-wrapper">
            <Header />
            <div>
                <Card className="bg-dark text-white top-card">
                    <Card.Img src={Center} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='card-title'>2 день | центр города</Card.Title>
                        <Card.Text className='card-text'>
                        Остров Канта с готическим Кафедральным собором – один из символов Калининграда, наследие старого Кёнигсберга. Это остров-парк, 
                        над зеленью которого поднимается краснокирпичный собор с витражами. Здесь же хранится прах философа Иммануила Канта.<br/><br/>
                        Сегодня нам предстоит посетить: <br/>
                        1. <a href="#day2sec1" className='link-text'>Кафедральный собор</a> <br/>
                        2. <a href="#day2sec2" className='link-text'>Могила Иммануила Канта</a> <br/>
                        3. <a href="#day2sec3" className='link-text'>Рыбная деревня</a> <br/>
                        4. <a href="#day2sec4" className='link-text'>Куда сходить вечером?</a> <br/>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Accordion flush className='accordion1'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='accordion4-header'>Историческая справка</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                Оказавшись на острове Канта в Калининграде, сложно представить, что ещё 100 лет назад это был отдельный город, где был застроен 
                                каждый метр, а сейчас среди зелени возвышается только собор. Поселение на небольшом клочке суши на реке Преголе появилось уже после 
                                возведения крепости Кёнигсберг в 1255 году. В 1286 году тевтонские рыцари построили здесь каменный мост, который соединил территорию, 
                                где стоял замок, с небольшим островом. Местные пруссы называли его Книпав, а к концу XIV столетия за ним закрепилась немецкая форма 
                                слова — Кнайпхоф.
                            </div>
                            <Card className='accordion-card'>
                                <Card.Img className='card1-img' variant="top" src={Island1} />
                                <Card.Body>
                                <Card.Text>
                                    1581 год. Три города Кёнигсберга: Альтштадт, Кнайпхоф и Хаберберг
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <div>
                                В начале XX столетия на небольшом участке суши, на 28 улицах, умещались более 300 домов, в которых жили порядка 
                                20 тысяч человек. Также здесь возвели кафедральный собор, ратушу и университет, а через весь остров проходило 20 
                                трамвайных маршрутов.
                            </div>
                            <Card className='accordion-card'>
                                <Card.Img className='card1-img' variant="top" src={Island2} />
                                <Card.Body>
                                <Card.Text>
                                    1925–1935 годы. Улица Кнайпхофская
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <div>
                                В августе 1944 года британская авиация практически стёрла с лица земли весь город. От Кнайпхофа остались только руины 
                                кафедрального собора, восстанавливать которые стали только в 90‑е годы. Сейчас большая часть острова Канта — это просторный 
                                парк, а приходят сюда полюбоваться величественным зданием собора и увидеть могилу Иммануила Канта, который родился и прожил 
                                в прусском Кёнигсберге всю свою жизнь.
                            </div>
                            <Card className='accordion-card'>
                                <Card.Img className='card1-img' variant="top" src={Island3} />
                                <Card.Body>
                                <Card.Text>
                                    1950–1965 годы. Руины Кафедрального собора
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Card className='card1'>
                    <Card.Body>
                    <Card.Text>
                        На остров Канта ведет единственный из пяти сохранившихся мостов — Медовый: он находится со стороны Рыбной деревни. 
                        Его построили в 1542 году, а в конце XIX века капитально перестроили. Его название связано с легендой о том, что владелец 
                        медовой лавки заплатил за постройку моста бочкой мёда.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='homlin-link'>
                    <Card.Body className='homlin-text'>
                        <img className='attention-img' src={Attention} />
                        Также здесь вы можете познакомиться с {" "}
                        <Link to="/#Karl" className='blue-link-text'>
                            Карлом
                        </Link>
                        , дедушкой-хомлином
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day2sec1'>
                    <p className='block-title-small'>Кафедральный собор</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Sobor} />
                    <Card.Body>
                    <Card.Text>
                        Величественное готическое сооружение — негласный символ Калининграда. Датой основания собора принято считать 1333 год, 
                        когда магистр Тевтонского ордена одобрил возведение храма. К 1380 году основное строительство закончилось — готовый храм 
                        представлял собой трёхнефное строение с готическими сводами и двумя башнями на одном из фасадов. 
                        Первоначально собор был католическим, а с 1523 года — протестантским. Ещё через два года религиозное строение стало главным 
                        храмом герцогства Пруссии. За несколько веков существования здание не раз перестраивали. В августе 1944 года стены собора 
                        устояли под ударами бомб, но внутреннее убранство было полностью уничтожено. После войны руины здания постепенно разрушались, 
                        и сохранность этого памятника Средневековья оказалась под угрозой. Реконструкцию начали только в 1992 году. Сейчас восстановленное 
                        из руин грандиозное здание — место, где можно послушать самый большой органный комплекс в стране (его специально сделали похожим 
                        на утерянный при бомбёжках) и посетить музей великого немецкого философа.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day2sec2'>
                    <p className='block-title'>Могила Канта</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Kant} />
                    <Card.Body>
                    <Card.Text>
                        Бывший Кнайпхоф известен как место, где находится прах знаменитого немецкого мыслителя. Иммануил Кант родился в Кёнигсберге, 
                        преподавал в местном университете, а в 1804 году был захоронен у северной стены главного городского храма. В 1880 году к собору 
                        пристроили часовню и перезахоронили останки тела. К 1924 году сооружение обветшало, и вместо него построили колоннаду в 
                        северо‑восточном углу храма. Во время бомбёжек она чудом уцелела. Музей занимает несколько этажей соборной башни и посвящён 
                        истории острова и всего города, а также жизни известного философа. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day2sec3'>
                    <p className='block-title'>Рыбная деревня</p>
                </div>
                <Card className='card1'>
                    <Card.Img className='card1-img' variant="top" src={Village} />
                    <Card.Body>
                    <Card.Text>
                        Историко-этнографический район расположен вдоль реки Преголи, напротив главного архитектурного памятника города — Кафедрального 
                        собора на острове Канта. Стилизованную деревню построили в 2010 году, взяв за основу немецкую фахверковую архитектуру: узнаваемые 
                        высокие узкие дома с деревянными перекладинами на фасаде и крутыми крышами. Похожие здания находились на этой набережной в довоенное 
                        время. Несмотря на название, на берегу острова Ломзе (сейчас — Октябрьский) рыбой не торговали. С XV века здесь располагались 
                        дровяные склады, о которых напоминает сохранившийся и реконструированный в наши дни Деревянный мост. А на берегу Преголи, на месте 
                        нынешней деревни, был рынок «Охсенмаркт», или «бычий», где торговали скотом. Рынок просуществовал до XVIII века. Шумный и не слишком 
                        опрятный торговый район доставлял неудобства интеллигентным соседям: окна университетского квартала на острове Кнайпхоф выходили 
                        прямо на рынок. Поэтому от скотного двора решили избавиться, а на его месте осталась широкая улица Линденштрассе, которая сегодня 
                        соответствует расположению Рыбной деревни и улицы Октябрьской.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <div className='d1-block' id='day2sec4'>
                    <p className='block-title-smallest'>Куда сходить вечером?</p>
                    <Card className='card1'>
                        <Card.Img className='card1-img' variant="top" src={Alchem} />
                        <Card.Body>
                        <Card.Text>
                            <a href='https://alhimbar.ru/' className='blue-link-text'> Чердак Алхимика </a> <br/>
                            Адрес: Эпроновская ул., 6<br/>
                            Приятная атмосфера, интересная подача блюд и коктейли в пробирках.<br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='card1'>
                        <Card.Img className='card1-img' variant="top" src={Pirat} />
                        <Card.Body>
                        <Card.Text>
                            <a href='http://www.pirat39.ru/' className='blue-link-text'> Пират Хауз </a> <br/>
                            Адрес: Эпроновская ул., 13<br/>
                            Заведение в пиратской стилистике<br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='card1'>
                        <Card.Img className='card1-img' variant="top" src={Dk} />
                        <Card.Body>
                        <Card.Text>
                            <a href='http://www.pirat39.ru/' className='blue-link-text'> ДК закрыто, входите </a> <br/>
                            Адрес: ул. Коперника, 4<br/>
                            Ламповый забавный кальян-бар<br/>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Day2Page;