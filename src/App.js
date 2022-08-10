// import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Main/Home';
import Navbar from './components/UI/Navbar';
import About from './components/Main/About';
import Work from './components/Main/Work';
import { useState, useEffect } from 'react';
import Logo from './assets/Logo.gif';

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 1000);
  });

  return (
    <div className="App">
      <section>
        <img src={Logo} alt="logo" className={showLogo ? 'show' : 'hide'} />
      </section>
      <Navbar />
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;
