import { useRef } from 'react';
import topBarLogo from '../../assets/images/topbar_logo@3x.png';
import './Navbar.css';

export function Navbar() {
  const sideNavRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className='navbar'>
        <div className='img-container'>
          <img src={topBarLogo} alt='XUND logo' width={80} />
        </div>
        <button
          id='menu_icon'
          className='text-deepblue text-2xl font-bold'
          onClick={() => {
            if (sideNavRef.current) {
              sideNavRef.current.style.width = '250px';
            }
          }}
        >
          <span> &#9776;</span>
        </button>
      </div>
      <div id='side_nav' ref={sideNavRef}>
        <button
          id='close_icon'
          onClick={() => {
            if (sideNavRef.current) {
              sideNavRef.current.style.width = '0';
            }
          }}
        >
          <span> &#10006;</span>
        </button>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          <span>&#8635;</span> Restart
        </button>
      </div>
    </>
  );
}
