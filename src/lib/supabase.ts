import { createClient } from '@supabase/supabase-js';

// Usamos el operador de coalescencia nula (??) para dar una URL válida por defecto durante la fase de build
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Juego {
  id: number;
  created_at?: string;
  titulo: string;
  slug: string;
  categoria: string;
  descripcion: string;
  imagen_url: string;
}