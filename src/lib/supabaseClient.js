import { createClient } from '@supabase/supabase-js';
import { variables } from '../variables';

const supabaseUrl = variables.SUPABASE_URL;
const supabaseAnonKey = variables.SUPABASE_ANON;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
