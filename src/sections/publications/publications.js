import Styles from './publications.module.css';

const Publications = () => {

  const data = [{
    title: "MAP: A Visual Analytics System for Job Monitoring and Analysis",
    conference: "IEEE International Conference on Cluster Computing",
    year: 2020,
    link: 'https://ieeexplore.ieee.org/document/9229613'
  }, {
    title: "An improved content based collaborative filtering algorithm for movie recommendations",
    conference: "Tenth International Conference on Contemporary Computing (IC3)",
    year: 2017,
    link: 'https://ieeexplore.ieee.org/document/8284357'
  }, {
    title: "A survey of methods of collaborative filtering techniques",
    conference: "International Conference on Inventive Systems and Control (ICISC)",
    year: 2017,
    link: 'https://ieeexplore.ieee.org/document/8068603'
  }];

  const content = data.map((paper, index) => {
    return (
      <div className={Styles.paper} >
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
    <div className={Styles.container} id='publications'>
      <div className={Styles.secTitle}>
        Publications
      </div>
      <div className={Styles.wrapper} >
        {content}
      </div>
    </div>
  );
}

export default Publications;
