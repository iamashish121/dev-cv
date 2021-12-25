import { AiOutlineGoogle } from 'react-icons/ai';
import Styles from './contact.module.css';

const Gmail = ({url}) => {

  return (
    <a href={url} className={`${Styles.iconCommon} ${Styles.google}`}>
      <AiOutlineGoogle />
    </a>
  );
}

export default Gmail;
