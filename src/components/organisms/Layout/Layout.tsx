import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
