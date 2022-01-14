import Styles from './education.module.css';

const Education = props => {

  const {educationProps = {}} = props

  const content = educationProps.educationData.map((entry,index) => {
    return (
      <div className={Styles.entry} style={{'backgroundColor': educationProps.style.entryBgColor}} key={index}>
        <div className={Styles.cllgLogo}>
          <img src={entry.logoURI} alt={'college_logo'}/>
        </div>
        <div className={Styles.description}>
          <div className={Styles.title}>
            {entry.title}
          </div>
          <div className={Styles.degree}>
            {entry.degree}
          </div>
          <div className={Styles.period}>
            {entry.period}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={Styles.container} id='education' style={{'backgroundColor': educationProps.style.bgColor}}>
      <div className={Styles.secTitle} style={{...educationProps.style.sectionTitle}}>
        Education
      </div>
      {content}
    </div>
  );
}

export default Education;
