import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MeSection from './components/MeSection'
import Footer from './components/Footer'
import TopNav from './components/TopNav'
import ProfileSection from './components/ProfileSection'
import FeedMain from './components/feed/FeedMain'
import SignInPage from './components/SignInPage'

function App() {
  
  const userSignIn = () => {
    
  }
  
  
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