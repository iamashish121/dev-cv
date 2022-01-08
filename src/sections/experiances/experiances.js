import Styles from './experiances.module.css';
import IITklogo from  '../../images/iitk-logo.png';
import Myntralogo from  '../../images/Myntra_logo_2.png';

const Experiance = props => {

  const {experianceProps = {}} = props
  
  const content = experianceProps.experianceData.map((entry,index) => {
    return (
      <div className={Styles.entry} style={{'background-color': experianceProps.style.entryBgColor}}>
        <div className={Styles.logo}>
          <img src={entry.logoURI}/>
        </div>
        <div className={Styles.description}>
          <div className={Styles.role} >
            {entry.role}
          </div>
          <div className={Styles.period} >
            {entry.period}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={Styles.container} id='experiance' style={{'background-color': experianceProps.style.bgColor}}>
      <div className={Styles.secTitle} style={{...experianceProps.style.sectionTitle}}>
        Experiance
      </div>
      <div className={Styles.wrapper}>
        {content}
      </div>
    </div>
  );
}

export default Experiance;
