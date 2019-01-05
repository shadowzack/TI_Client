import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./App.css";
import NotFound from "./components/not-found/NotFound";
import languages from "./components/languages/Languages";
import language from "./components/language/Language";
import '../node_modules/react-vis/dist/style.css';
import ChartLanguages from "./components/languages/ChartLanguages";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div>
            <Route exact path="/" component={languages} />
            <Route exact path="/languages/:id" component={language} />
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
