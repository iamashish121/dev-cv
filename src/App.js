import './App.css';
import Header from './sections/header/header';
import Landing from './sections/landing/landing';
import Education from './sections/education/education';
import Experiance from './sections/experiances/experiances';
import Publications from './sections/publications/publications';
import Contact from './sections/contact/contact';
import Skills from './sections/skills/skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Education />
      <Experiance />
      <Publications />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
