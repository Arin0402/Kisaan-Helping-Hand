import "./home_page/HomePage.js"
import './App.css';
import Header from './Header/Header';
import HomePage from './home_page/HomePage.js';
import DistrictPage from './DistrictSearch/DistrictPage.js';
import { Croppage } from "./croppage/Croppage.js"
import { Agriculturepage } from "./agriculturepage.js/Agriculturepage.js";
import { Animalhusbandary } from "./animalhusbandary/Animalhusbandary.js"
import { Specifiedcrop } from "./specifedcrop/Specifiedcrop.js";
import Govermentschemes from "./governmentschemes/Govermentschemes.js";
// import { Kissancreditcard } from "./kissancreditcard/Kissancreditcard.js";
import { Kissancreditcard } from "./kissancreditcard/fertilizercal_aar.js";
import { Blog } from "./blog/Blog.js";
import { Employment } from "./Employment/Employment.js";
import Login from "./login/Login.js"
import Register from "./Register/Register.js"
import NewTech from "./new_technology/NewTech.js";
// dependencies
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux"

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Router >
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/agriculture">
              <Agriculturepage />
            </Route>
            <Router path="/animalhusbandary">
              <Animalhusbandary />
            </Router>
            <Route path="/governmentschemes">
              <Govermentschemes />
            </Route>
            <Route path="/kissancreditcard">
              <Kissancreditcard />
            </Route>
            <Route path="/crop">
              <Croppage />
            </Route>
            <Route path="/specifedcrop">
              <Specifiedcrop />
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path ="/newtechnology">
              <NewTech />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/employment">
              <Employment />
            </Route>

          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
