import '../assets/styles/homelins.css';
import { Card, CardGroup, Button } from 'react-bootstrap';
import Karl from '../assets/images/Karl.jpg';
import Marta from '../assets/images/Marta.jpg';
import Leo from '../assets/images/Leo.jpg';
import Varvara from '../assets/images/Varvara.jpg';
import Vitya from '../assets/images/Vitya.jpg';
import Ulya from '../assets/images/Ulya.jpg';
import Antoshka from '../assets/images/Antoshka.jpg';

const Homelins = () => {
    return (
        <div className='cards-wrapper'>
            <div className='homelins-title-block'>
                <p className="homelins-title" id='section2'>Хомлины</p>
            </div>
            <CardGroup className='cards'>
                <Card className='card-block'>
                    <Card.Img variant="top" src={Karl} id='Karl'/>
                    <Card.Body>
                    <Card.Title>Карл, дедушка‑хомлин</Card.Title>
                    <Card.Text>
                        Этот персонаж появился первым — летом 2018 года.
                        Cамого старшего члена семьи зовут Карлом. Он сидит на парапете моста и разглядывает окружающие пейзажи через круглые очки.
                        По характеру Карл — жизнерадостный и позитивный. Он любит выпить чашечку чая из местных трав, а главным его умением считается 
                        обработка дерева.
                        <br/><br/>
                        <b>Адрес:</b> Медовый мост 
                    </Card.Text>
                    </Card.Body>
                    <Button variant="secondary" href='https://yandex.ru/maps/-/CHHlVCk6' className='card-btn'>Показать на карте</Button>
                </Card>
                <Card className='card-block'>
                    <Card.Img variant="top" src={Marta} id='Marta'/>
                    <Card.Body>
                    <Card.Title>Марта, бабушка‑хомлин</Card.Title>
                    <Card.Text>
                        В руках она держит трёхлистный клевер, который 
                        намекает на хобби персонажа — сбор трав. Согласно легенде, Марта готовит из них снадобья для лечения от хворей. Рядом с ней стоит пузатый 
                        мешок. Что внутри — не знает никто. Возможно, разноцветный янтарь, а может быть, старушка собирает в него монетки, которые у её ног 
                        оставляют путешественники, чтобы вернуться в Калининград.
                        <br/><br/>
                        <b>Адрес:</b> Башня Дона 
                    </Card.Text>
                    </Card.Body>
                    <Button variant="secondary" href='https://yandex.ru/maps/-/CHHlzGKz' className='card-btn'>Показать на карте</Button>
                </Card>
                <Card className='card-block'>
                    <Card.Img variant="top" src={Leo} id='Leo'/>
                    <Card.Body>
                    <Card.Title>Лео, папа‑хомлин</Card.Title>
                    <Card.Text>
                        Скульптура самого одарённого и мечтательного члена сказочной семейки установлена во Всероссийский день янтаря в 2021 году. 
                        Место у областного музея изобразительных искусств на Ленинском проспекте выбрано для папы‑хомлина неслучайно: персонаж 
                        неравнодушен к творчеству и сам пишет стихи. Обычно он ходит в шляпе, но снимает её, когда хочет понаблюдать за движением 
                        облаков или посчитать звёзды на небе.
                        <br/><br/>
                        <b>Адрес:</b> Областной музей изобразительных искусств 
                    </Card.Text>
                    </Card.Body>
                    <Button variant="secondary" href='https://yandex.ru/maps/-/CHHlrW1r' className='card-btn'>Показать на карте</Button>
                </Card>
                <Card className='card-block'>
                    <Card.Img variant="top" src={Varvara} id='Varvara'/>
                    <Card.Body>
                    <Card.Title>Варвара, мама‑хомлин</Card.Title>
                    <Card.Text>
                        Ещё одну скульптуру можно найти в бойнице башни Врангеля — фортификационного сооружения XIX века, в котором теперь работает кафе. 
                        Добродушная Варя одаривает поцелуями всех, кто приходит на неё посмотреть.
                        Известно, что мягкий характер этого хомлина было сложнее всего передать. Пришлось даже сделать несколько вариантов фигурки с 
                        разными выражениями лица и положениями ушек.
                        <br/><br/>
                        <b>Адрес:</b> Башня Врангеля 
                    </Card.Text>
                    </Card.Body>
                    <Button variant="secondary" href='https://yandex.ru/maps/-/CHHlzNkp' className='card-btn'>Показать на карте</Button>
                </Card>
                <Card className='card-block'>
                    <Card.Img variant="top" src={Vitya} id='Vitya'/>
                    <Card.Body>
                    <Card.Title>Витя, малыш‑хомлин</Card.Title>
                    <Card.Text>
                        На набережной Петра Великого, между Музеем Мирового океана и советским судном «Витязь», пришвартованным у берега, 
                        поблёскивает на солнце фигурка мальчугана в фуражке. Хомлин Витя готовится отправиться в плавание по реке Преголе. 
                        По характеру мальчишка похож на отца — такой же мечтательный и меланхоличный.
                        <br/><br/>
                        <b>Адрес:</b> Музей Мирового океана 
                    </Card.Text>
                    </Card.Body>
                    <Button variant="secondary" href='https://yandex.ru/maps/-/CHHl7V~V' className='card-btn'>Показать на карте</Button>
                </Card>
                <Card className='card-block'>
                    <Card.Img variant="top" src={Ulya} id='Ulya'/>
                    <Card.Body>
                    <Card.Title>Уля, малышка‑хомлин</Card.Title>
                    <Card.Text>
                        Сестричку Вити поселили в любимое место детворы — Калининградский зоопарк на проспекте Мира. Фигурка находится на заборе 
                        у входа. Весёлая девчонка Уля любит шалить, и поэтому запечатлена с высунутым языком. А ещё она большая выдумщица: оседлала 
                        улитку и мчит навстречу приключениям.
                        <br/><br/>
                        <b>Адрес:</b> Калининградский зоопарк 
                    </Card.Text>
                    </Card.Body>
                    <Button variant="secondary" href='https://yandex.ru/maps/-/CHHpEF1w' className='card-btn'>Показать на карте</Button>
                </Card>
                <Card className='card-block'>
                    <Card.Img variant="top" src={Antoshka} id='Antoshka'/>
                    <Card.Body>
                    <Card.Title>Антошка, малыш‑хомлин</Card.Title>
                    <Card.Text>
                        Эту скульптуру найти сложнее всего: по размеру она меньше человеческой ладони. Несмотря на миниатюрность фигурки, 
                        образ Антошки детально проработан: разглядеть можно и пуговицу на комбинезончике, и радостное выражение лица, и 
                        стильную причёску. Положив руки под голову, кроха хитро улыбается, словно задумал шалость. 
                        <br/><br/>
                        <b>Адрес:</b> Музей «Альтес хаус»
                    </Card.Text>
                    </Card.Body>
                    <Button variant="secondary" href='https://yandex.ru/maps/-/CHHpU4iX' className='card-btn'>Показать на карте</Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Homelins