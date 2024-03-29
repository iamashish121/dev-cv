import Styles from './publications.module.css';

const Publications = props => {
  const {publicationsProps = {}} = props

  const content = publicationsProps.publicationsData.map((paper, index) => {
    return (
      <div className={Styles.paper} key={index}>
        <div className={Styles.title}>
          {paper.title}
        </div>
        <div className={Styles.conference}>
          {paper.conference + ' , ' + paper.year}
        </div>
        <a className={Styles.link} href={paper.link}> See Publication </a>

      </div>
    );
  });
  return (
    <div className={Styles.container} id='publications' style={{'backgroundColor': publicationsProps.style.bgColor}}>
      <div className={Styles.secTitle} style={{...publicationsProps.style.sectionTitle}}>
        Publications
      </div>
      <div className={Styles.wrapper} style={{'backgroundColor': publicationsProps.style.wrapperBgColor}}>
        {content}
      </div>
    </div>
  );
}

export default Publications;
