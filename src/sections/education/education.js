import Styles from './education.module.css';
import IITklogo from  '../../images/iitk-logo.png';
import ARSDlogo from  '../../images/logo-arsd.png';

const Education = () => {

  const data = [
    {
      title: "Indian Institute of Technology, Kanpur",
      degree:"M.tech, Computer Science and Engineering",
      period:"2018 - 2020"
    },
    {
      title: "Atma Ram Sanatan Dharam College",
      degree:"B.tech, Computer Science and Engineering",
      period:"2013 - 2017"
    }
  ];
  const content = data.map((entry,index) => {
    return (
      <div className={Styles.entry}>
        <div className={Styles.cllgLogo}>
          <img src={index === 1 ? ARSDlogo : IITklogo}/>
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
    <div className={Styles.container} id='education'>
      <div className={Styles.secTitle}>
        Education
      </div>
      {content}
    </div>
  );
}

export default Education;
