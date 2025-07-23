import './App.css';
// import HomePage from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './utils/AppRouter';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <MainLayout> */}
          <AppRouter />
        {/* </MainLayout> */}
      </Router>
    </div>
  );
}

export default App;
