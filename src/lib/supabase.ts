'use client'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Debug: Mostrar información sobre las variables de entorno
if (typeof window !== 'undefined') {
  console.log('🔍 Debug - Variables de entorno:')
  console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅ Configurada' : '❌ No configurada')
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Configurada' : '❌ No configurada')
}

let supabase: ReturnType<typeof createClient<Database>> | {
  auth: {
    signInWithPassword: () => Promise<{ data: null; error: { message: string } }>
    signUp: () => Promise<{ data: null; error: { message: string } }>
    signOut: () => Promise<{ error: { message: string } }>
    getUser: () => Promise<{ data: { user: null }; error: { message: string } }>
    resetPasswordForEmail: () => Promise<{ data: null; error: { message: string } }>
    onAuthStateChange: () => { data: { subscription: { unsubscribe: () => void } } }
  }
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables de entorno de Supabase no encontradas')
  console.error('📝 Por favor, crea un archivo .env.local en la raíz del proyecto con:')
  console.error('   NEXT_PUBLIC_SUPABASE_URL=tu_url_del_proyecto_supabase')
  console.error('   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_supabase')
  console.error('🔗 Obtén estas credenciales en: https://supabase.com/dashboard/project/[tu-proyecto]/settings/api')
  console.error('💡 Asegúrate de reiniciar el servidor después de crear el archivo .env.local')
  
  // Crear un cliente mock que siempre fallará pero con un mensaje más claro
  const errorMessage = 'Faltan las variables de entorno de Supabase. Por favor, crea un archivo .env.local con NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY'
  
  supabase = {
    auth: {
      signInWithPassword: async () => ({ data: null, error: { message: errorMessage } }),
      signUp: async () => ({ data: null, error: { message: errorMessage } }),
      signOut: async () => ({ error: { message: errorMessage } }),
      getUser: async () => ({ data: { user: null }, error: { message: errorMessage } }),
      resetPasswordForEmail: async () => ({ data: null, error: { message: errorMessage } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    }
  }
} else {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
}

export { supabase }
