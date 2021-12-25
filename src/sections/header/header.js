import './header.css';
import logo from  '../../images/logo.jpg'
const header = () => {
  return (
    <div className='header'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <ul className='listWrapper'>
          <li>
            <a href='#education'>
              Education
            </a>
          </li>
          <li>
            <a href='#experiance'>
              Experiance
            </a>
          </li>
          <li>
            <a href='#publications'>
              Publications
            </a>
          </li>
          <li>
            <a href='#skills'>
              Skills
            </a>
          </li>
          <li>
            <a href='#contact'>
              Contact
            </a>
          </li>
        </ul>
    </div>
  );
}

export default header;
