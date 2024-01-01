import { connect } from "react-redux";
import logo from 'assets/image/logo.png';

function Footer() {
  return (
    <footer className="bg-gray-800 font-sans">
      <div className="container px-6 py-12 mx-auto max-w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-1">
            {/* Aquí puedes agregar tu imagen en lugar del texto */}
            <img
              src={logo}
              alt="Tu Imagen"
              className="w-full h-auto mb-4"
            />
          </div>

          <div className="sm:col-span-3">
            <div className="grid grid-cols-4 gap-6">
              <div>
                <p className="font-semibold text-gray-300">
                  Visitanos
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Crespo, Entre rios
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Email
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Rivadavia 2923
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    grupospretz@gmal.com
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-300">
                  Contactate
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    JPS 123123123123
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Suminitro de papeleria 123123123123
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Anda saber que mas 31241231231
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-300">
                  Servicios
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Servicio 1
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Servicio 2
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Servicio 3
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-300">
                  Empresas
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Empresa 1
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Empresas 2
                  </p>
                  <p className="text-gray-400 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Empresas 3
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-600 md:my-8" />

        
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 text-gray-300">
          © 2023 Miguelanshelo Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
