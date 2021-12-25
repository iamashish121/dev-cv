import { FaLinkedinIn } from 'react-icons/fa';
import Styles from './contact.module.css';

const Linkedin = ({url}) => {

  return (
        <a href={url} className={`${Styles.iconCommon} ${Styles.linkedin}`}>
          <FaLinkedinIn/>
        </a>
  );
}

export default Linkedin;
