import Header from '../components/header';
import Entry from '../components/entry';
import Schedule from '../components/schedule';

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <Header/>
        <main className="main-content">
          <Entry/>
          <Schedule/>
        </main>
    </div>
  )
}

export default HomePage;