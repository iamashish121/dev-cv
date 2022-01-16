import './landing.css';
import HeroImageSVG from  '../../images/heroImage.svg';
const Landing = props => {

  const {landingProps = {}} = props;
  return (
    <div className='landingWrapper' style={{'backgroundImage': landingProps.style.bgImage, 'paddingTop': landingProps.style.headerHeight}}>
      <div className='intro'>
        <div className='introText' style={{'fontSize': landingProps.style.subtitleFontSize, 'color': landingProps.style.introTextColor}}>
          <div className='textBig' style={{'fontSize': landingProps.style.titleFontSize}}>{landingProps.welcomeText1}</div><br/>
          {landingProps.welcomeText2}
        </div>
        <a href="#" className='button' style={{'color': landingProps.style.buttonTextColor}}>{landingProps.buttonText}</a>
      </div>
      <div className='photo'>
        <img src={ landingProps.heroImage || HeroImageSVG} alt={'heroImage'} />
      </div>
    </div>
  );

}

export default Landing;
