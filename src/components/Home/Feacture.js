import React from 'react';

const FeatureSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Características</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Característica 1</h3>
            <p className="text-gray-600">
              Descripción de la característica 1. Puedes agregar más detalles aquí.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Característica 2</h3>
            <p className="text-gray-600">
              Descripción de la característica 2. Puedes agregar más detalles aquí.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Característica 3</h3>
            <p className="text-gray-600">
              Descripción de la característica 3. Puedes agregar más detalles aquí.
            </p>
          </div>

          {/* Agrega más features según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
