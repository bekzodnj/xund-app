import topBarLogo from '../../assets/images/topbar_logo@2x.png';
import './Navbar.css';

export function Navbar({}) {
  return (
    <div className='navbar'>
      <div className='img-container'>
        <img src={topBarLogo} alt='XUND logo' width={80} />
      </div>
      <button className=''>Menu</button>
    </div>
  );
}
