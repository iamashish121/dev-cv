import SkillBar from 'react-skillbars';
import Styles from './skills.module.css';

const Skills = () => {

  const skills = [
    {
      "type": "React",
      "level": 85
    },
    {
      "type": "Javascript",
      "level": 75
    },
    {
      "type": "HTML",
      "level": 80
    },
    {
      "type": "Node.js",
      "level": 40
    },

  ];

  const colors = {
    "bar": "#339966",
    "title": {
      "text": "#fff",
      "background": "#0d261a"
    }
  }

  return (
    <div className={Styles.container} id='skills'>
      <div className={Styles.secTitle}>
        Skills
      </div>
      <SkillBar skills={skills} colors={colors}/>
    </div>
  );
}

export default Skills;
