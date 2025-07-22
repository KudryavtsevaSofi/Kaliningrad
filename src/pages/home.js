import Header from '../components/header';
import Entry from '../components/entry';
import Schedule from '../components/schedule';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <Header/>
        <main className="main-content">
          <Entry/>
          <Schedule/>
          <Footer/>
        </main>
    </div>
  )
}

export default HomePage;