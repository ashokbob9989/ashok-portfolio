import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {About} from "./components/About";
import { Education } from './components/Education';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
      <Education/>
      <Skills />
      <Projects />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
