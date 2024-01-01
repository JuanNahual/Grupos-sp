import { Typewriter } from 'react-simple-typewriter'
function Header(){


  return(

      <header className="bg-blue-500 text-white text-center py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">
        Podemos <span> </span>
        <Typewriter
            words={['asesorarte', 'llevarte', 'conocerte']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></h1>
        <p className="text-lg mb-8">Descubre las soluciones que ofrecemos para mejorar tu experiencia.</p>
        <a href="/nosotros" className="bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">Más Información</a>
      </div>
    </header>
    )
}

export default Header