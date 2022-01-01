import './landing.css';
import HeroImageSVG from  '../../images/heroImage.svg';
const Landing = props => {

  const {landingProps = {}} = props;
  return (
    <div className='landingWrapper' style={{'background-image': landingProps.style.bgImage}}>
      <div className='intro'>
        <div className='introText' style={{'font-size': landingProps.style.subtitleFontSize, 'color': landingProps.style.introTextColor}}>
          <div className='textBig' style={{'font-size': landingProps.style.titleFontSize}}>{landingProps.welcomeText1}</div><br/>
          {landingProps.welcomeText2}
        </div>
        <a href="#" className='button' style={{'color': landingProps.style.buttonTextColor}}>{landingProps.buttonText}</a>
      </div>
      <div className='photo'>
        <img src={ landingProps.heroImage || HeroImageSVG} />
      </div>
    </div>
  );

}

export default Landing;
