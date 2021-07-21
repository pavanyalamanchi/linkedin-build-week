import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import TopNav from './components/TopNav';
import NewPost from './components/NewPost';
import CenteredModal from './components/PostModal';
import OptionalNav from './components/OptionalNav';
import NavTop from './components/NavTop';

function App() {
  return (
    <>
      <div className="App">
        <TopNav />
        <OptionalNav />
        <NavTop />
        
        <NewPost />
        {/* <MainSection />
        <Footer /> */}
      </div>
    </>
  );  
}

export default App;