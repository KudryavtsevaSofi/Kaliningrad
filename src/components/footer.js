import TG from '../assets/images/tg.png';
import GH from '../assets/images/gh.png';

const Footer = () => {
    return (
        <footer className="text-center bg-dark">
            <section className="p-3">
                <div className="d-flex justify-content-center">
                    <a href="https://t.me/kudryavtseva_si">
                        <img src={TG} style={{width: '30px', marginRight: '30px'}}></img>
                    </a>
                    <a href="https://github.com/KudryavtsevaSofi">
                        <img src={GH} style={{width: '30px', marginLeft: '30px'}}></img>
                    </a>
                </div>
            </section>
      </footer>
    );
};

export default Footer;