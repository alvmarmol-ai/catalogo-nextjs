import Link from 'next/link';
import { supabase, Juego } from '@/lib/supabase';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoriaPage({ params }: PageProps) {
  const { slug } = await params;
  const { data: juegos } = await supabase.from('juegos').select('*').eq('categoria', slug);

  return (
    <main className="max-w-5xl mx-auto p-6">
      <Link href="/" className="text-blue-600 mb-4 inline-block">← Volver</Link>
      <h1 className="text-3xl font-bold mb-6 capitalize">Categoría: {slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {juegos?.map((juego: Juego) => (
          <div key={juego.id} className="border p-4 rounded bg-white">
            <h2 className="text-xl font-bold">{juego.titulo}</h2>
            <p className="text-gray-600 my-2">{juego.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}