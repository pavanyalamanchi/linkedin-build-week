import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* import MainSection from './components/MainSection'
import Footer from './components/Footer' */
import TopNav from "./components/TopNav";
import NewPost from "./components/NewPost";
/* import CenteredModal from './components/PostModal'; */

function App() {
  return (
    <>
      <div className="App">
        <TopNav />

        <NewPost />
        {/* <MainSection />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
