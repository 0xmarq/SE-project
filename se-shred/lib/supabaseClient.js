import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
// lib/supabaseClient.js

const SUPABASE_URL = 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsdWViaGd0emtjd3NreGRvcWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyODg1MDAsImV4cCI6MjA3Nzg2NDUwMH0.RnUzhwfhucdTbyX3gMRU0AP208G39-FYDu_e-GXF_4I'


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, 
  },
})
