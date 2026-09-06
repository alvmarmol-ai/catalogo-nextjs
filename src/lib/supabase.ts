import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Asegúrate de incluir la palabra "export"
export interface Juego {
  id: number;
  created_at?: string;
  titulo: string;
  slug: string;
  categoria: string;
  descripcion: string;
  imagen_url: string;
}