import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MeSection from './components/MeSection'
import Footer from './components/Footer'
import TopNav from './components/TopNav'
import ProfileSection from './components/ProfileSection'
import FeedMain from './components/feed/FeedMain'
import SignIn from './components/signin/SignIn'
import Redirect from './components/signin/Redirect'

function App() {
  const localUser = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState({ localUser })
  const [signedIn, setSignedIn] = useState()
  const [signInError, setSignInError] = useState(false)
  
  const fetchUser = async (e, userSignInData) => {
    console.log("user sign in fetch")
    e.preventDefault()
    let APIKEY = `Bearer ${userSignInData.API}`
    try {
      const userFetch = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: { Authorization:APIKEY }
      })
      const data = await userFetch.json()
      
      if (authenticateUser(userSignInData, data) === true) {
        setUser(data)
        setSignedIn(true)
        localStorage.setItem("user", JSON.stringify(data))
      } else {
        setUser(null)
        setSignedIn(false)
      }
      
    } catch (e) {
      console.log("App.js Error!", e)
      setSignedIn(false)
      setSignInError(true)
    }
  }
  
  const authenticateUser = (form, fetch) => {
    if (form.email === fetch.email) {
      setSignedIn(true)
      setUser(fetch)
      return true
    } else {
      return false
    }
  }
  
  useEffect(() => {
    setUser(localUser)
    if (user !== null) {
      if (user.localUser !== null){
        setSignedIn(true)
      }
    }
  }, [])
  
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/signin" render={routerProps => (
            <>
              <SignIn 
                fetchUser={fetchUser} 
                isSignedIn={signedIn} 
                {...routerProps}
                signInError={signInError}
              />
              <Footer />
            </>
          )} />
          <Route exact path="/profile/:id" render={routerProps => (
            <>
              <TopNav user={user}/>
              <ProfileSection {...routerProps} user={user}/> 
              <Footer />
            </> )}/>
          <Route exact path="/" render={routerProps => (
            <>
              <TopNav user={user}/>
              <Redirect />
              <Footer />
            </> )}/>
          <Route exact path="/feed" render={routerProps => (
            <>
              <TopNav user={user}/>
              <FeedMain user={user}/>           
            </> )} />
          <Route exact path="/me" render={routerProps => (
            <>
              <TopNav user={user}/>
              <MeSection user={user}/>
            </> )}/>
        </div>
      </Router>
    </>
  )
}

export default App;