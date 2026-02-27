// components/Menu.jsx (versão com overlay)
import { RiCloseLargeFill } from "react-icons/ri"; 
import { Link } from "react-router-dom"; 
 
function Menu({ toggleSidebar }) { 
  return ( 
    <>
      <div className="menu-overlay" onClick={toggleSidebar}></div>
      <div className="menu"> 
        <span className="menu-btn" onClick={toggleSidebar}> 
          <RiCloseLargeFill /> 
        </span> 
        <nav> 
          <ul>
            <li> 
              <Link to="/dashboard" onClick={toggleSidebar}>⭐ Dashboard</Link> 
            </li> 
            <li> 
              <Link to="/users" onClick={toggleSidebar}>👥 Users</Link> 
            </li> 
            <li> 
              <Link to="/messages" onClick={toggleSidebar}>📧 Messages</Link> 
            </li> 
            <li> 
              <Link to="/history" onClick={toggleSidebar}>📚 History</Link> 
            </li> 
            <li> 
              <Link to="/tasks" onClick={toggleSidebar}>✅ Tasks</Link> 
            </li> 
            <li> 
              <Link to="/settings" onClick={toggleSidebar}>⚙️ Settings</Link> 
            </li> 
          </ul>
        </nav> 
      </div> 
    </>
  ); 
} 
 
export default Menu;