import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://egttdnvsgjsrjybdmyod.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MjA5NDM4OCwiZXhwIjoxOTU3NjcwMzg4fQ.hTiAcgt4lgZagrpkTNKkrIaubW9J8z_TajTCQpBbgQE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
