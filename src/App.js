import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostsContainer from "./components/PostsContainer";
/* import MainSection from './components/MainSection'
import Footer from './components/Footer'
import TopNav from './components/TopNav'; */

function App() {
  return (
    <>
      <div className="App">
        {/* <TopNav />
        <MainSection />
        <Footer /> */}
        <PostsContainer />
      </div>
    </>
  );
}

export default App;
