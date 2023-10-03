import Search from '../assets/img/icon/u_search.svg';

export function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <input 
          type="text"
          className="searchBarStyle"
          placeholder="Search something here!"
        />
        <div className="icon">
          <img src={Search} alt="" />
        </div>
      </div>
    </>
  )
}