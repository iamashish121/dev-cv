import Styles from './contact.module.css';
import Linkedin from './linkedin';
import Twitter from './twitter';
import Gmail from './gmail';
import MyPhoto from  '../../images/myPhoto.jpg';

const Contact = () => {

  // const descriptionText = "Have a cool idea ? Want suggestions on your current project ? Or just wanna chat on latest technologies. Feel free to reach out.";
  return (
    <div className={Styles.container} id='contact'>
      <div className={Styles.contentWrapper}>
        <div className={Styles.secTitle}>
          React out to me!
        </div>
        <div className={Styles.description}>
          Have a cool idea ? <br/>
          Want suggestions on your current project ? <br/>
          Or just wanna chat on latest technologies. Feel free to reach out.
        </div>
        <div className={Styles.social}>
          <Gmail url='mailto:ashishltus@gmail.com' />
          <Linkedin url='https://www.linkedin.com/in/iamashish121/'/>
          <Twitter url='https://twitter.com/iamashish121'/>
        </div>
      </div>
      <div>
        <img src={MyPhoto} className={Styles.photo}/>
      </div>
    </div>
  );
}

export default Contact;
