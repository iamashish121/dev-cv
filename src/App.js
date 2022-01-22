import './App.css';
import Header from './sections/header/header';
import Landing from './sections/landing/landing';
import Education from './sections/education/education';
import Experiance from './sections/experiances/experiances';
import Publications from './sections/publications/publications';
import Contact from './sections/contact/contact';
import Skills from './sections/skills/skills';
import configDataJSON from './configData.json';

const renderComponents = () => {
  return configDataJSON.components.map( (comp, i) => {
    switch (comp.type) {
      case 'header': return <Header headerProps={comp.data} key={i}/>
      case 'landing': return <Landing landingProps={comp.data} key={i}/>
      case 'education': return <Education educationProps={comp.data} key={i}/>
      case 'experience': return <Experiance experianceProps={comp.data} key={i}/>
      case 'skills': return <Skills skillsProps={comp.data} key={i}/>
      case 'publications': return <Publications publicationsProps={comp.data} key={i}/>
      case 'contact': return <Contact contactProps={comp.data} key={i}/>
      default: return null
    }
  } )
}

function App() {
  return (
    <div className="App" >
      {renderComponents()}
    </div>
  );
}

export default App;
