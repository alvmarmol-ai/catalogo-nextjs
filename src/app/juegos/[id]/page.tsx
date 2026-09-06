import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase, Juego } from '@/lib/supabase';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function JuegoDetallePage({ params }: PageProps) {
  const { id } = await params;
  const { data: juego, error } = await supabase.from('juegos').select('*').eq('id', id).single();

  if (error || !juego) notFound();
  const detalleJuego = juego as Juego;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-600 mb-4 inline-block font-medium hover:underline">
        ← Volver al catálogo
      </Link>
      
      <div className="bg-white border rounded-lg overflow-hidden shadow-lg mt-4">
        {detalleJuego.imagen_url ? (
          <img 
            src={detalleJuego.imagen_url} 
            alt={detalleJuego.titulo} 
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            Sin Imagen
          </div>
        )}

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{detalleJuego.titulo}</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded capitalize">
              {detalleJuego.categoria}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">{detalleJuego.descripcion}</p>
        </div>
      </div>
    </main>
  );
}