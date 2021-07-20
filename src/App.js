import './App.css';
<<<<<<< Updated upstream
import Sidebar  from './components/Sidebar'
import Footer from './components/Footer'
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import TopNav from './components/TopNav';
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <div className="App">
<<<<<<< Updated upstream
        <Sidebar />
        <Footer />
=======
        <TopNav />
        <MainSection />
       <Footer />
>>>>>>> Stashed changes
      </div>
    </>
  );
}

export default App;
