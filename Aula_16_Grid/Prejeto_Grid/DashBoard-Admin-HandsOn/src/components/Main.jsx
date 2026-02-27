const Main = () => {
  return (
    <main className="main-content">
      <h3>
        <i className="fas fa-folder-open"></i> Your Projects
      </h3>
      
      {/* Cards de Projetos */}
      <div className="card">
        <h2>
          <i className="fas fa-rocket"></i> Super Cool Project
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
        <div className="actions">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-alt"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>
      
      <div className="card">
        <h2>
          <i className="fas fa-chart-line"></i> Analytics Dashboard
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="actions">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-alt"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <div className="card">
        <h2>
          <i className="fas fa-mobile-alt"></i> Mobile App
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="actions">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-alt"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <div className="card">
        <h2>
          <i className="fas fa-shopping-cart"></i> E-commerce Platform
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="actions">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-alt"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <div className="card">
        <h2>
          <i className="fas fa-gamepad"></i> Game Development
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="actions">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-alt"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <div className="card">
        <h2>
          <i className="fas fa-palette"></i> Design System
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="actions">
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash-alt"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      {/* Card Announcements */}
      <div className="card announcements-card">
        <h2>
          <i className="fas fa-bullhorn"></i> Announcements
        </h2>
        <div className="section-card1">
          <h4>
            <i className="fas fa-tools"></i> Site Maintenance
          </h4>
          <p>The site will be down for maintenance this weekend...</p>
        </div>
        <div className="section-card2">
          <h4>
            <i className="fas fa-shield-alt"></i> Updated Privacy Policy
          </h4>
          <p>We've updated our privacy policy. Please review...</p>
        </div>
        <div className="section-card3">
          <h4>
            <i className="fas fa-calendar-alt"></i> Community Day
          </h4>
          <p>Join us for our annual community day event next month...</p>
        </div>
      </div>

      {/* Card Trending */}
      <div className="card trending-card">
        <h2>
          <i className="fas fa-fire"></i> Trending
        </h2>
        <div className="trending-item">
          <i className="fas fa-user-circle"></i>
          <div className="trending-info">
            <p className="username">@teagan</p>
            <p className="project">World Peace Builder</p>
          </div>
        </div>
        <div className="trending-item">
          <i className="fas fa-user-circle"></i>
          <div className="trending-info">
            <p className="username">@morgan</p>
            <p className="project">Super Cool Project</p>
          </div>
        </div>
        <div className="trending-item">
          <i className="fas fa-user-circle"></i>
          <div className="trending-info">
            <p className="username">@kendall</p>
            <p className="project">Life Changing App</p>
          </div>
        </div>
        <div className="trending-item">
          <i className="fas fa-user-circle"></i>
          <div className="trending-info">
            <p className="username">@alex</p>
            <p className="project">No Traffic Maker</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;