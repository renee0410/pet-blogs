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
  // 是否顯示菜單彈窗
  const [isShowMenu, setIsShowMenu] = useState(false);

  // 滾動監聽
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  // 顯示菜單彈窗
  function showMenu() {
    setIsShowMenu(true);
  }

  function closeMenu() {
    setIsShowMenu(false);
    console.log(1323)
  }

  return (
    <>
      <header className={ isScrolling ? 'scrollBgc' : '' }>
        <div className="container">
          <div className="headerArea">
            <div className="menuIcon" onClick={showMenu}>
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
                <a to="/category" className="linkStyle">Category</a>
                <a to="/about" className="linkStyle">About</a>
                <a to="/contact" className="linkStyle">Contact</a>
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
      {
        isShowMenu && (
          <div className="menuPopup">
            <div className="background">
              <div className="menuArea">
                <NavLink to="/">Home</NavLink>
                <a href="#">Category</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
              <div className="closeIcon" onClick={closeMenu}>X</div>
            </div>
          </div>
        )
      }
    </>
  )
};