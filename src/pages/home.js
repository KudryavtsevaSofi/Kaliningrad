import Header from '../components/header';
import Entry from '../components/entry';

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <Header/>
        <main className="main-content">
          <Entry/>
        </main>
    </div>
  )
}

export default HomePage;