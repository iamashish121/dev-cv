import { SiTwitter } from 'react-icons/si';
import Styles from './contact.module.css';

const Twitter = ({url}) => {

  return (
    <a href={url} className={`${Styles.iconCommon} ${Styles.twitter}`}>
      <SiTwitter />
    </a>
  );
}

export default Twitter;
