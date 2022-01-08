import Styles from './education.module.css';

const Education = props => {

  const {educationProps = {}} = props

  const content = educationProps.educationData.map((entry,index) => {
    return (
      <div className={Styles.entry} style={{'background-color': educationProps.style.entryBgColor}}>
        <div className={Styles.cllgLogo}>
          <img src={entry.logoURI}/>
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
    <div className={Styles.container} id='education' style={{'background-color': educationProps.style.bgColor}}>
      <div className={Styles.secTitle} style={{...educationProps.style.sectionTitle}}>
        Education
      </div>
      {content}
    </div>
  );
}

export default Education;
