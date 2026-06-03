// supabase.js
// Inicialización del cliente Supabase usando CDN
// Asegurate de incluir este script DESPUÉS del script de la CDN de Supabase en tu HTML:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// <script src="supabase.js"></script>

const SUPABASE_URL = 'https://vzkgkbxartdaiyypmgxm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_UekPMq_fj3D6ry_y6UksUg_KbVlj8lf';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
