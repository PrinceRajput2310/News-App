import React from "react";
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/screens/Home";
import Sports from "./components/screens/Sports";
import Entertainment from "./components/screens/Entertainment";
import NavBar from "./components/NavBar";
import Politics from "./components/screens/Politics";

function App() {
  return (
       <React.Fragment>
              
              

          <BrowserRouter>

                      <NavBar />

                <Switch>

                  <Route exact path="/" component={Home}/>

                  <Route exact path="/politics" component={Politics}/>

                  <Route exact path="/sports" component={Sports}/>

                  <Route exact path="/entertainment" component={Entertainment}/>
                </Switch>
          </BrowserRouter>

       </React.Fragment>

  );
}

export default App;
