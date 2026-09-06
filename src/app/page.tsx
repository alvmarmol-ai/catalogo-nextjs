import Link from 'next/link';
import { supabase, Juego } from '@/lib/supabase';

export const revalidate = 0;

export default async function HomePage() {
  const { data: juegos, error } = await supabase.from('juegos').select('*');

  if (error) {
    return <div className="p-8 text-red-500">Error al cargar datos.</div>;
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">🎮 Mi Catálogo</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {juegos?.map((juego: Juego) => (
          <div key={juego.id} className="border rounded-lg p-4 bg-white shadow">
            <h2 className="text-xl font-bold">{juego.titulo}</h2>
            <p className="text-sm text-gray-600 mb-4">{juego.descripcion.substring(0, 80)}...</p>
            <div className="flex gap-2">
              <Link href={`/juegos/${juego.id}`} className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Ver
              </Link>
              <Link href={`/categorias/${juego.categoria}`} className="bg-gray-200 px-3 py-1 rounded text-sm capitalize">
                {juego.categoria}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}