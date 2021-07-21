import './App.css';
import Sidebar  from './components/Sidebar'
import Footer from './components/Footer'
import TopNav from './components/TopNav'
import ProfileSection from './components/ProfileSection'
import FeedMain from './components/feed/FeedMain'
import SignInPage from './components/SignInPage'

function App() {
  return (
    <>
      <Router>
        <Route exact path="/signin" render={routerProps => <SignInPage />} />
        <Route exact path="/" render={(routerProps => <Home />)}
        <Footer />
      </Router>
    </>
  );
}

export default App;
