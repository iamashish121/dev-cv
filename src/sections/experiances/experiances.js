import Styles from './experiances.module.css';

const Experiance = props => {

  const {experianceProps = {}} = props

  const remarksContent = (remarksData) => {
    return remarksData.map((point, index) => {
        return (
          <li key={index}>
            {point}
          </li>
        );
      })
  }

  const content = experianceProps.experianceData.map((entry,index) => {
    if (window.matchMedia("(max-width: 750px)").matches) {
      return (
        <div className={Styles.entry} style={{'backgroundColor': experianceProps.style.entryBgColor}} key={index}>
          <div className={Styles.headline}>
            <img src={entry.logoURI} alt={'company_logo'}/>
            <div className={Styles.role} >
              {entry.role}
              <div className={Styles.period} >
                {entry.period}
              </div>
            </div>
          </div>
          <div className={Styles.description}>
            <ul className={Styles.remarks}>
              {remarksContent(entry.remarks)}
            </ul>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className={Styles.entry} style={{'backgroundColor': experianceProps.style.entryBgColor}} key={index}>
          <div className={Styles.logo}>
            <img src={entry.logoURI} alt={'company_logo'}/>
          </div>
          <div className={Styles.description}>
            <div className={Styles.role} >
              {entry.role}
            </div>
            <div className={Styles.period} >
              {entry.period}
            </div>
            <ul className={Styles.remarks}>
              {remarksContent(entry.remarks)}
            </ul>
          </div>
        </div>
      );
    }
  });

  return (
    <div className={Styles.container} id='experiance' style={{'backgroundColor': experianceProps.style.bgColor}}>
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
