import Link from 'next/link';

interface UnderConstructionProps {
  title?: string;
  description?: string;
  showNavigation?: boolean;
}

export default function UnderConstruction({ 
  title = "🚧 En Proceso de Construcción",
  description = "¡Ups! Esta página aún está en desarrollo. Nuestros desarrolladores están trabajando arduamente para traerte algo increíble.",
  showNavigation = true 
}: UnderConstructionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          {/* Icono de construcción */}
          <div className="mx-auto h-24 w-24 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 3v4a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h4a1 1 0 011 1z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V7a1 1 0 011-1h4a1 1 0 011 1z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            {description}
          </p>

          {/* Barra de progreso animada */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div className="bg-orange-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>

          {/* Información adicional */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              ¿Qué puedes hacer mientras tanto?
            </h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Explorar otras secciones de la aplicación
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Revisar las funcionalidades disponibles
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Volver al inicio
              </li>
            </ul>
          </div>

          {/* Botones de navegación */}
          {showNavigation && (
            <div className="space-y-4">
              <Link 
                href="/"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
              >
                🏠 Volver al Inicio
              </Link>
              
              <Link 
                href="/mensajes"
                className="w-full flex justify-center py-3 px-4 border border-orange-300 rounded-md shadow-sm text-sm font-medium text-orange-700 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
              >
                💬 Ir a Mensajes
              </Link>
            </div>
          )}

          {/* Mensaje de contacto */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              ¿Tienes alguna pregunta? <span className="text-orange-600 font-medium">Contáctanos</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
