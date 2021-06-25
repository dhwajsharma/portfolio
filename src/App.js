import './App.css';
import {
  HashRouter,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import GoHome from './components/GoHome/GoHome';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <GoHome />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
