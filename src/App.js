import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MeSection from './components/MeSection'
import Footer from './components/Footer'
import TopNav from './components/TopNav'
import ProfileSection from './components/ProfileSection'
import FeedMain from './components/feed/FeedMain'
import SignIn from './components/SignIn'

function App() {
  
  const userSignIn = (e) => {
    e.preventDefault()
    console.log("calling user sign in?")
  }
  
  
  return (
    <>
      <Router>
        <div className="App">
          <TopNav />
          <Route exact path="/signin" render={(routerProps) => (
            <SignIn fetchUser={userSignIn} {...routerProps} />
          )} />
          <Route exact path="/" render={(routerProps) => <FeedMain /> } />
          <Route exact path="/home" component={<FeedMain />} />
          <Route exact path="/feed" render={(routerProps) => <FeedMain /> } />          
          <Route exact path="/me/:id" render={(routerProps) => <MeSection /> } />
          <Route exact path="/profile/:id" render={routerProps => <ProfileSection /> } />
          <Footer />
        </div>
      </Router>
    </>
  );  
}

export default App;