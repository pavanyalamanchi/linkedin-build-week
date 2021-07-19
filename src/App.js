import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <div className="App">
        <TopNav />
        <Sidebar />
      </div>
    </>
  );  
}

export default App;
