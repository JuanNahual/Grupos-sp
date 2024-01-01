
import {connect} from  "react-redux"
import logo from 'assets/image/logo.png'
import cargando from 'assets/image/cargando.gif'
import { Link } from 'react-router-dom';


function Navbar(){
		return(
			<nav className="bg-gray-800 p-4 w-full py-4 top-0 fixed">
      <div className="container mx-auto flex items-center justify-between">
        {/* Icono a la izquierda */}
        <div className="flex items-center">
         
          <img src={logo}
          width={120}
          height={100}
          className=""/>
        </div>

        {/* Contenedor para enlaces y botón */}
        <div className="flex items-center space-x-4">
          {/* Enlaces en el centro */}
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link to="/Home" className="text-lg inline-flex font-medium leading-6 text-white hover:underline hover:underline-offset-4 mx-4">Inicio</Link>
            <Link to="/Contacto" className="text-lg inline-flex font-medium leading-6 text-white hover:underline hover:underline-offset-4 mx-4">Contacto</Link>
            <Link to="/Empresas" className="text-lg inline-flex font-medium leading-6 text-white hover:underline hover:underline-offset-4 mx-4">Empresas</Link>
            
          </div>

          {/* Botón a la derecha */}
          <button className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-6 py-2.5 text-lg font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2">
            Contactanos
            <img src={cargando} className="w-7 h-2 mt-1 ml-2"/>
          </button>
        </div>
      </div>
    </nav>
  ); 
}
const mapStateToProps = state =>({

})
export default connect(mapStateToProps, {

}) (Navbar)