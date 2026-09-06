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
      <Link href="/" className="text-blue-600 mb-4 inline-block">← Volver</Link>
      <h1 className="text-3xl font-bold">{detalleJuego.titulo}</h1>
      <p className="mt-2 text-gray-700">{detalleJuego.descripcion}</p>
    </main>
  );
}