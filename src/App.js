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
      case 'header':
        return <Header headerProps={comp.data}/>
        break;
      case 'landing':
        return <Landing landingProps={comp.data}/>
        break;
      case 'education':
        return <Education educationProps={comp.data}/>
        break;
      case 'experiance':
        return <Experiance experianceProps={comp.data}/>
        break;
      case 'skills':
        return <Skills skillsProps={comp.data}/>
        break;
      case 'publications':
        return <Publications publicationsProps={comp.data}/>
        break;
      case 'contact':
        return <Contact contactProps={comp.data}/>
        break;
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
