import { connect } from "react-redux";
import logo from 'assets/image/logo.png';

function Footer() {
  return (
    <footer className="bg-gray-800 font-sans">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            {/* Aquí puedes agregar tu imagen en lugar del texto */}
            <img
              src={logo}
              alt="Tu Imagen"
              className="w-full h-auto mb-4"
            />
          </div>

          

              {/* Información de la Empresa */}
              <div>
                <p className="font-semibold text-gray-300 mb-2">
                  Información de la Empresa
                </p>
                <div className="flex items-start flex-col space-y-2">
                  <p className="text-gray-400">
                    Crespo, Entre Ríos
                  </p>
                  <p className="text-gray-400">
                    Rivadavia 2923
                  </p>
                  <p className="text-gray-400">
                    grupospretz@gmail.com
                  </p>
                </div>
              </div>

              {/* Contacto */}
              <div>
                <p className="font-semibold text-gray-300 mb-2">
                  Contacto
                </p>
                <div className="flex items-start flex-col space-y-2">
                  <p className="text-gray-400">
                    Teléfono: 123-456-789
                  </p>
                  <p className="text-gray-400">
                    Email: contacto@tudominio.com
                  </p>
                </div>
              </div>

              {/* Formulario de Contacto */}
              <div>
                <p className="font-semibold text-gray-300 mb-2">
                  Consultas
                </p>
                <form>
                  {/* Agrega los campos del formulario según tus necesidades */}
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-2 mb-2 border border-gray-500 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-2 border border-gray-500 rounded"
                  />
                  <textarea
                    placeholder="Mensaje"
                    rows="3"
                    className="w-full p-2 mb-2 border border-gray-500 rounded"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        

        <hr className="my-6 border-gray-600 md:my-8" />

        <p className="font-sans p-4 text-center text-gray-300">
          © 2023 Inc. All rights reserved.
        </p>
      
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
