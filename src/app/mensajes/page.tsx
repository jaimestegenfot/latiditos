export default function MensajesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mensajes</h1>
        <p className="text-gray-600">
          Aquí podrás ver y gestionar todos tus mensajes.
        </p>
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-center">
            No hay mensajes aún. ¡Comienza a chatear!
          </p>
        </div>
      </div>
    </div>
  );
} 