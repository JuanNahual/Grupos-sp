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

          <div className="sm:col-span-2 md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* ... Contenido del Footer ... */}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600 md:my-8" />

        <p className="font-sans p-4 text-center text-gray-300">
          © 2023 Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
