import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import TopNav from './components/TopNav';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
        <div className="App">
          <TopNav />
          <MainSection />
         <Footer />
        </div>
    </>
  );
}

export default App;
