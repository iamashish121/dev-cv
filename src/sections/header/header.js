import './header.css';
import logo from  '../../images/logo.jpg'
const header = props => {
  const {headerProps : { logoURI = '', menuItems = [], style = {} }} = props

  return (
    <div className='header' style={{'background-color': style.bgColor, height: style.height}}>
        <div className='logo'>
          <img src={logoURI || logo} style={{height: style.logoImageHeight}}/>
        </div>
        <ul className='listWrapper'>
          {menuItems.map( item => (
            <li>
              <a href={item.path} style={{color: style.textColor}}>
                {item.value}
              </a>
            </li>
          ) )}
        </ul>
    </div>
  );
}

export default header;
