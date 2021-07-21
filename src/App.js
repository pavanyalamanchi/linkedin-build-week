import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MeSection from "./components/MeSection";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import ProfileSection from "./components/ProfileSection";
import FeedMain from "./components/feed/FeedMain";
import SignInPage from "./components/SignInPage";
import Home from "./components/Home";

function App() {
  const userSignIn = () => {};

  return (
    <>
      <Router>
        <TopNav />
        <Route exact path="/signin" render={(routerProps) => <SignInPage />} />
        <Route exact path="/" render={(routerProps) => <Home />} />
        <Route exact path="/" render={(routerProps) => <FeedMain />} />
        <Route exact path="/home" component={<FeedMain />} />
        <Route exact path="/feed" render={(routerProps) => <FeedMain />} />
        <Route exact path="/me/:id" render={(routerProps) => <MeSection />} />
        <Route
          exact
          path="/profile/:id"
          render={(routerProps) => <ProfileSection />}
        />
        <Footer />
      </Router>
    </>
  );
}

export default App;
