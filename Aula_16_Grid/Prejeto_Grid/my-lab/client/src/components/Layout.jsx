import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

import Menu from "./Menu";

function Layout() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

    return (
        <div className={isSidebarCollapsed ? "layout" : "layout.close"}>
            <div className = "layout-header">
                <Header toggleSidebar = {toggleSidebar} />
            </div>

            <div className = "layout_manu">
                {isSidebarCollapsed && <Menu toggleSidebar = {toggleSideBar} />}
            </div>

            <div>
                <Outlet />
            </div>

        </div>
    );
}

export default Layout;