import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
