import { createClient } from "@supabase/supabase-js";

// Configuração do Supabase
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY ?? "";
export const supabase = createClient(supabaseUrl, supabaseKey);
