import { connect } from 'react-redux';
import logo from 'assets/image/logo.png';
import cargando from 'assets/image/cargando.gif';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  // Estado para manejar la visibilidad del menú en pantallas pequeñas
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 w-full py-4 top-0 fixed">
      <div className="container mx-auto flex items-center justify-between">
        {/* Icono a la izquierda */}
        <div className="flex items-center">
          <img src={logo} width={120} height={100} alt="Logo" className="" />
        </div>

        {/* Contenedor para enlaces y botón */}
        <div className="flex items-center space-x-4">
          {/* Enlaces en el centro (ocultos en pantallas pequeñas) */}
          <div className="hidden md:flex ml-4 mt-2 flex-shrink-0">
            <Link
              to="/Home"
              className="text-lg inline-flex font-medium leading-6 text-white hover:underline hover:underline-offset-4 mx-4"
            >
              Inicio
            </Link>
            <Link
              to="/Contacto"
              className="text-lg inline-flex font-medium leading-6 text-white hover:underline hover:underline-offset-4 mx-4"
            >
              Contacto
            </Link>
            <Link
              to="/Empresas"
              className="text-lg inline-flex font-medium leading-6 text-white hover:underline hover:underline-offset-4 mx-4"
            >
              Empresas
            </Link>
          </div>

          {/* Botón a la derecha (visible en pantallas pequeñas) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-2 px-2 py-1 border rounded text-white hover:bg-gray-700 focus:outline-none"
          >
            {menuOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>

      {/* Menú desplegable (visible en pantallas pequeñas) */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex-shrink-0">
          <Link
            to="/Home"
            className="block text-lg font-medium leading-6 text-white hover:underline hover:underline-offset-4 my-2 mx-4"
          >
            Inicio
          </Link>
          <Link
            to="/Contacto"
            className="block text-lg font-medium leading-6 text-white hover:underline hover:underline-offset-4 my-2 mx-4"
          >
            Contacto
          </Link>
          <Link
            to="/Empresas"
            className="block text-lg font-medium leading-6 text-white hover:underline hover:underline-offset-4 my-2 mx-4"
          >
            Empresas
          </Link>
        </div>
      )}
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
