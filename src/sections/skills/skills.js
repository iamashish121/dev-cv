import SkillBar from 'react-skillbars';
import Styles from './skills.module.css';

const Skills = props => {
  const {skillsProps = {}} = props

  return (
    <div className={Styles.container} id='skills' style={{'backgroundColor': skillsProps.style.bgColor}}>
      <div className={Styles.secTitle} style={{...skillsProps.style.sectionTitle}}>
        Skills
      </div>
      <SkillBar skills={skillsProps.skillsData} colors={skillsProps.barsColorsData}/>
    </div>
  );
}

export default Skills;
