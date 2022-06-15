import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';


// - break out header and footer into their own components (leave nav menu in App)

function App() {
  return (
    <div className="App">
      <Header />

      <ul>
        <li>< a href='/#/home'>Home</a></li>
        <li>< a href='/#/animals'>Animals</a></li>
        <li>< a href='/#/plants'>Plants</a></li>

      </ul>

      <HashRouter>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/animals">
          <Animals />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
