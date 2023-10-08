import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
// logo
import { Logo } from '../assets/img/logo/index';
// icon
import {
  Country,
  ArrowDown,
  Hamburger,
  Search,
} from '../assets/img/icon/index';

export function Header() {
  // 是否滾動
  const [isScrolling, setIsScrolling] = useState(false);

  // 滾動監聽
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header className={ isScrolling ? 'scrollBgc' : '' }>
      <div className="container">
        <div className="headerArea">
          <div className="menuIcon">
            <img src={Hamburger} alt="" loading="lazy"/>
          </div>
          <div className="header-l">
            {/* logo */}
            <div className="logo">
              <img src={Logo} alt="" loading="lazy"/>
            </div>
            {/* 導覽列 */}
            <nav className='navBar'>
              <NavLink to="/" className={({ isActive }) => isActive ? "linkStyle active" : "linkStyle"}>Home</NavLink>
              <NavLink to="/category" className="linkStyle">Category</NavLink>
              <NavLink to="/about" className="linkStyle">About</NavLink>
              <NavLink to="/contact" className="linkStyle">Contact</NavLink>
            </nav>
          </div>
          <div className="header-r">
            {/* 搜尋欄 */}
            <div className="searchArea">
              <SearchBar></SearchBar>
            </div>
            {/* btn */}
            <div className="btnArea">
              <Button
                text='Join'
                style='btnPrimary'
              ></Button>
            </div>
            {/* 語言下拉選單 */}
            <div className="languageSelection">
              <div className="countyIcon">
                <img src={Country} alt="" loading="lazy"/>
              </div>
              <p>VND</p>
              <div className="arrowIcon">
                <img src={ArrowDown} alt="" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className="searchIcon">
            <img src={Search} alt="" loading="lazy"/>
          </div>
        </div>
      </div>
    </header>
  )
};