// App.js
import React from 'react';
import './style.css'; // Import your CSS file
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project'; // Corrected import path for Projects

import Skills from './Components/Skills'; // Corrected import path for Skills
import Contact from './Components/Contact'; // Corrected import path for Contact
import Footer from './Components/Footer'; // Corrected import path for Footer

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
