import './header.css';
import logo from  '../../images/logo.jpg'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
const header = props => {
  const {headerProps : { logoURI = '', menuItems = [], style = {} }} = props

  const toggleMenu = () => {
    if (window.matchMedia("(max-width: 750px)").matches) {
      const ele = document.getElementById('verticalLinks');
      if (ele.style.opacity === '0' || ele.style.opacity === '') {
        ele.style.opacity = '1';
      } else {
        ele.style.opacity = '0';
      }
    }
  }
  const getListContent = () => {
      return menuItems.map( (item, index) => (
        <li className="menu-items" key={index}>
          <a href={item.path} style={{color: style.textColor}}>
            {item.value}
          </a>
        </li>
      ) )
  }

  return (
    <div>
      <div className='header' style={{backgroundColor: style.bgColor, height: style.height}}>
          <div className='logo'>
            <img src={logoURI || logo} style={{height: style.logoImageHeight}} alt={'logo'}/>
          </div>
          <ul className='listWrapper' onClick={toggleMenu}>
            {getListContent()}
            <HiOutlineMenuAlt3 className='menu-icon'/>
          </ul>
      </div>
      <div id='verticalLinks' className='verticalLinks' style={{'paddingTop': style.height}}>
        {menuItems.map( (item, index) => (
            <a href={item.path} style={{color: style.textColor}} onClick={() => document.getElementById('verticalLinks').style.opacity='0'} key={index}>
              {item.value}
            </a>
        ) )}
      </div>
    </div>
  );
}

export default header;
