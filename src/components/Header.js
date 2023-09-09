import Logo from '../assets/img/Logo.svg';
import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
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
            </div>
          </div>
      </div>
    </header>
  )
};