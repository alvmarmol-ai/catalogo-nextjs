import Link from 'next/link';
import { supabase, Juego } from '@/lib/supabase';

export const revalidate = 0; // Para obtener datos siempre actualizados desde Supabase

export default async function HomePage() {
  // Leemos la lista de videojuegos desde la tabla de Supabase
  const { data: juegos, error } = await supabase.from('juegos').select('*');

  if (error) {
    return (
      <main className="max-w-5xl mx-auto p-6 text-center">
        <p className="text-red-500 font-bold text-lg">Error al conectar con Supabase</p>
        <p className="text-gray-600 text-sm mt-2">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
          🎮 Catálogo de Videojuegos
        </h1>
        <p className="text-gray-600">
          Explora los mejores títulos consultados directamente desde Supabase.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {juegos?.map((juego: Juego) => (
          <div key={juego.id} className="border rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-between">
            {juego.imagen_url && (
              <img 
                src={juego.imagen_url} 
                alt={juego.titulo} 
                className="w-full h-48 object-cover" 
              />
            )}
            <div className="p-4 flex-1">
              <h2 className="text-xl font-bold mb-2 text-gray-900">{juego.titulo}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {juego.descripcion ? `${juego.descripcion.substring(0, 80)}...` : 'Sin descripción.'}
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 border-t flex justify-between items-center">
              <Link 
                href={`/juegos/${juego.id}`} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1.5 rounded text-sm transition"
              >
                Ver Detalle
              </Link>
              <Link 
                href={`/categorias/${juego.categoria}`} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-3 py-1.5 rounded text-sm capitalize transition"
              >
                {juego.categoria}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}