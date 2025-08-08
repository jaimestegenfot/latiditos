'use client';

import Link from 'next/link';

export default function EnvError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Configuración Requerida
          </h2>
          <p className="text-gray-600">
            Faltan las variables de entorno de Supabase
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-200">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ¿Qué necesitas hacer?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      Crea un archivo <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env.local</code> en la raíz del proyecto
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      Agrega las siguientes variables:
                    </p>
                    <pre className="mt-2 bg-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
{`NEXT_PUBLIC_SUPABASE_URL=tu_url_del_proyecto_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_supabase`}
                    </pre>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      Reinicia el servidor de desarrollo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                ¿Dónde obtener las credenciales?
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  1. Ve a <Link href="https://supabase.com" target="_blank" className="text-blue-600 hover:underline">supabase.com</Link>
                </p>
                <p className="text-sm text-gray-600">
                  2. Crea un nuevo proyecto o selecciona uno existente
                </p>
                <p className="text-sm text-gray-600">
                  3. Ve a <strong>Settings API</strong> en el dashboard
                </p>
                <p className="text-sm text-gray-600">
                  4. Copia la <strong>Project URL</strong> y la <strong>anon public key</strong>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Nota:</strong> El archivo <code className="bg-blue-100 px-1 rounded">.env.local</code> está en <code className="bg-blue-100 px-1 rounded">.gitignore</code> por seguridad, por eso aparece con el símbolo de prohibido. Esto es normal y esperado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
