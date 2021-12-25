import Styles from './experiances.module.css';
import IITklogo from  '../../images/iitk-logo.png';
import Myntralogo from  '../../images/Myntra_logo_2.png';

const Experiance = () => {

  const data = [
    {
      company: "Myntra",
      role: "Software Engineer",
      period:"2020 - Present"

    }
  ];
  const content = data.map((entry,index) => {
    return (
      <div className={Styles.entry}>
        <div className={Styles.logo}>
          <img src={Myntralogo}/>
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
    <div className={Styles.container} id='experiance'>
      <div className={Styles.secTitle}>
        Experiance
      </div>
      <div className={Styles.wrapper}>
        {content}
      </div>
    </div>
  );
}

export default Experiance;
