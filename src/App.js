import Navbar from './Components/navbar/Navbar'
import Homepage from './Components/homepage/homepage'
import './general.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Admin Dashboard/adminDashboard'
import Milestones from './Components/Milestones/milestones'
import Team from './Components/team/Team'
import About from './Components/about/AboutUs'
import Login from './Components/login/Login'
import Projects from './Components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/milestones">
            <Milestones />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/about-us">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
