import { Outlet } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { Button } from './Button';
// icon
import Logo from '../assets/img/Logo.svg';
import Country from '../assets/img/icon/Frame 45.svg';
import ArrowDown from '../assets/img/icon/Caret_Down_SM.svg';

export function Header() {
  return (
    <header>
      <div className="container">
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