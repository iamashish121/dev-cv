import Styles from './contact.module.css';
import Linkedin from './linkedin';
import Twitter from './twitter';
import Gmail from './gmail';
import MyPhoto from  '../../images/myPhoto.jpg';

const Contact = props => {
  const {contactProps = {}} = props
  // const descriptionText = "Have a cool idea ? Want suggestions on your current project ? Or just wanna chat on latest technologies. Feel free to reach out.";
  return (
    <div className={Styles.container} id='contact' style={{'background-color': contactProps.style.bgColor}}>
      <div className={Styles.contentWrapper}>
        <div className={Styles.secTitle} style={{...contactProps.style.sectionTitle}}>
          React out to me!
        </div>
        <div className={Styles.description}>
          Have a cool idea ? <br/>
          Want suggestions on your current project ? <br/>
          Or just wanna chat on latest technologies. Feel free to reach out.
        </div>
        <div className={Styles.social}>
          {contactProps.gmail && <Gmail url={`mailto:${contactProps.gmail}`} />}
          {contactProps.linkedin && <Linkedin url={contactProps.linkedin}/>}
          {contactProps.twitter && <Twitter url={contactProps.twitter}/>}
        </div>
      </div>
      <div>
        <img src={contactProps.displayImage} className={Styles.photo}/>
      </div>
    </div>
  );
}

export default Contact;
