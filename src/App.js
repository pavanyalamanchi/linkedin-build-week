import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './components/MainSection'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <div className="App">
        <TopNav />
        <MainSection />
        <Sidebar />
      </div>
    </>
  );  
}

export default App;