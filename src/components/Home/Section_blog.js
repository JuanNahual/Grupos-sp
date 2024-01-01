import React from 'react';

const BlogSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Entrada del blog 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Imagen del blog 1"
              className="mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Título del Blog 1</h3>
            <p className="text-gray-600">
              Breve descripción o resumen del contenido del blog 1.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">
              Leer más
            </a>
          </div>

          {/* Entrada del blog 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Imagen del blog 2"
              className="mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Título del Blog 2</h3>
            <p className="text-gray-600">
              Breve descripción o resumen del contenido del blog 2.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">
              Leer más
            </a>
          </div>

          {/* Entrada del blog 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Imagen del blog 3"
              className="mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">Título del Blog 3</h3>
            <p className="text-gray-600">
              Breve descripción o resumen del contenido del blog 3.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">
              Leer más
            </a>
          </div>

          {/* Agrega más entradas de blog según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
