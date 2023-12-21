import { Link } from "react-router-dom";
import ModalCreateUser from "../ModalCreateUser/ModalCreateUser";
import logoPng from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="head flex items-center gap-6">
          <img className="logo" alt="logo" src={logoPng} />
          <p className="font-roboto text-neutral-50 hidden sm:flex">
            Modulo de Consulta y Registro de Usuarios al Sistema
          </p>
        </div>
        <nav className="nav flex gap-5 items-center">
          <Link to="./" className="text-white font-roboto text-sm underline">
            Home
          </Link>
          <ModalCreateUser title="Crear usuario" />
        </nav>
      </div>
    </div>
  );
};

export default Header;
