import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { Button } from './Button';
// icon
import Logo from '../assets/img/Logo.svg';
import Country from '../assets/img/icon/Frame 45.svg';
import ArrowDown from '../assets/img/icon/Caret_Down_SM.svg';

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
      <div className="container-lg container-md">
        <div className="headerArea">
          <div className="header-l">
                {/* logo */}
                  <img src={Logo} alt="" />
                {/* 導覽列 */}
                <nav>
                  <a href="#">Home</a>
                  <a href="#">Category</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
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
                  text='Join the community'
                  style='btnPrimary'
                ></Button>
              </div>
              {/* 語言下拉選單 */}
              <div className="languageSelection">
                <div className="countyIcon">
                  <img src={Country} alt="" />
                </div>
                <p>VND</p>
                <div className="arrowIcon">
                  <img src={ArrowDown} alt="" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </header>
  )
};