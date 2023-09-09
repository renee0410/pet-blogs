import Logo from '../assets/img/Logo.svg';

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="navigation">
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
      </div>
    </div>
  )
};