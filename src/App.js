import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import './styles/App.css';
import './styles/Responsive.css';


function App() {
  return (
    <div className="App">
        <NavBar />
        <About />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
