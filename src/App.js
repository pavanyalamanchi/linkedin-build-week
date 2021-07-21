import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedMain from './components/FeedMain';
import Footer from './components/Footer'
import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <div className="App">
        <TopNav />
        <FeedMain />
       <Footer />
      </div>
    </>
  );
}

export default App;
