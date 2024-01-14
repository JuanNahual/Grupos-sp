import React from 'react';
import logo from 'assets/image/jps.png';
import logo2 from 'assets/image/logo_embale.jpg';


      

const ThreeSections = () => {
 return (
    <div>
      {/* Sección 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-8 rounded">
        {/* Imagen a la izquierda en dispositivos grandes */}
        <div className="md:w-1/3 md:mb-0">
          <img src={logo} alt="JPS EQUIPAMIENTOS" className="w-full h-auto rounded" />
        </div>
        {/* Descripción a la derecha en dispositivos grandes */}
        <div className="md:w-2/3 md:pl-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <p> Descripción de la primera sección. Puedes agregar más contenido aquí. </p>
          {/* Logos */}
          <div className="flex justify-center gap-4 hover:cursor-pointer mt-4">
            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
          </div>
        </div>
      </div>
    

      {/* Sección 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-gray-300 p-8 rounded">
        {/* Imagen a la derecha en dispositivos grandes */}
        <div className="md:w-1/3 md:mb-0">
          <img
            src={logo2}
            alt="Sección 2"
            className="w-full h-auto rounded"
          />
        </div>
        {/* Descripción a la izquierda en dispositivos grandes */}
        <div className="md:w-2/3 md:pr-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <p>
            Descripción de la segunda sección. Puedes agregar más contenido aquí.
          </p>
          {/* Logos */}
          <div className="flex justify-center gap-4 hover:cursor-pointer mt-4">
            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
          </div>
        </div>
      </div>

      {/* Sección 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-400 p-8 rounded">
        {/* Imagen a la izquierda en dispositivos grandes */}
        <div className="md:w-1/3 md:mb-0">
          <img
            src={logo}
            alt="Sección 3"
            className="w-full h-auto rounded"
          />
        </div>
        {/* Descripción a la derecha en dispositivos grandes */}
        <div className="md:w-2/3 md:pl-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Sección 3</h2>
          <p>
            Descripción de la tercera sección. Puedes agregar más contenido aquí.
          </p>
          {/* Logos */}
          <div className="flex justify-center gap-4 hover:cursor-pointer mt-4">
            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSections;


