import './landing.css';
import HeroImageSVG from  '../../images/heroImage.svg';
const Landing = () => {

  return (
    <div className='landingWrapper' >
      <div className='intro'>
        <div className='introText'>
          <div className='textBig'>Hi All, I am Ashish ✌️ </div><br/>
          A frontend engineer having experiance in React, React Native, node.js and webpack.
        </div>
        <a href="#" className='button'>Resume ?</a>
      </div>
      <div className='photo'>
        <img src={HeroImageSVG} />
      </div>
    </div>
  );

}

export default Landing;
