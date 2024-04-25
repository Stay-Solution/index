import React from 'react';
import HamburguerIcon from '@assets/hamburger-icon.svg';
// import SearchIcon from '../../assets/search-icon.svg';
import GlobeIcon from '@assets/globe-icon.svg';

import './Header.css';

const Header: React.FC<IHeaderProps> = () => {

  const redirectToHome = () =>{ console.log("go to home")}
  return (
    <>
      <div className="header-container">
        <img src={HamburguerIcon} alt="/" className="hamburguer" onClick={redirectToHome} />
        <div className="search-language">
          {/* <img src={SearchIcon} alt="/" className="search" /> */}
          <div className="language">
            <img src={GlobeIcon} alt="/" className="language" />
            <span>PT-BR</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

interface IHeaderProps {
  // openSidebar: () => void;
}
