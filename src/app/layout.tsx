import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Catálogo de Videojuegos',
  description: 'Proyecto de catálogo de videojuegos con Next.js y Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 min-h-screen antialiased">
        <nav className="bg-slate-900 text-white p-4 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold tracking-wide">
              🎮 GameCatalog
            </a>
            <span className="text-xs bg-blue-600 px-2.5 py-1 rounded-full font-medium">
              Next.js + Supabase
            </span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}