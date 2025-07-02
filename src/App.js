import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

function App() {

  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(()=>{

    const handleWelcomeMessage=async()=>{
      setShowWelcomeMessage(false);
    }

    
    setTimeout(()=>{
      (async()=>handleWelcomeMessage())();
    }, 5000);
  }, []);

  return (
    <div className='app'>
      {!showWelcomeMessage ? (
        <div className='other-components'>
          <Navbar />
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Newsletter />
          <Footer />
        </div>
      ) : (
        <WelcomeMessage />
      )}
    </div>
  );
}

export default App;
