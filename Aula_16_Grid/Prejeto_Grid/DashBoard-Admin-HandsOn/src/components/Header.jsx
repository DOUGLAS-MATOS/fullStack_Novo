const Header = () => {
  return (
    <header className="topbar">
      <div className="topbar-content">
        <i className="fas fa-search"></i> Search
        <input type="search" id="search" placeholder="Search..." />
        <div className="header-icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-envelope"></i>
        </div>
        <div className="user-info">
          <i className="fas fa-user-circle"></i>
          <p>Morgan Oakley</p>
        </div>
      </div>
      <div className="button">
        <button type="button">
          <i className="fas fa-plus"></i> New
        </button>
        <button type="button">
          <i className="fas fa-upload"></i> Upload
        </button>
        <button type="button">
          <i className="fas fa-share"></i> Share
        </button>
      </div>
    </header>
  );
};

export default Header;