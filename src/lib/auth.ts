import { supabase } from './supabase'

export async function signInWithEmail(email: string, password: string) {
  try {
    if (!email || !password) {
      return { data: null, error: { message: 'Email y contraseña son requeridos' } }
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch {
    return { 
      data: null, 
      error: { message: 'Error inesperado durante el inicio de sesión' } 
    }
  }
}

export async function signUpWithEmail(email: string, password: string) {
  try {
    if (!email || !password) {
      return { data: null, error: { message: 'Email y contraseña son requeridos' } }
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (error) {
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch {
    return { 
      data: null, 
      error: { message: 'Error inesperado durante el registro' } 
    }
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    return { error }
  } catch {
    return { error: { message: 'Error inesperado durante el cierre de sesión' } }
  }
}

export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  } catch {
    return { user: null, error: { message: 'Error inesperado al obtener el usuario' } }
  }
}

export async function resetPassword(email: string) {
  try {
    if (!email) {
      return { data: null, error: { message: 'Email es requerido' } }
    }

    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    return { data, error }
  } catch {
    return { 
      data: null, 
      error: { message: 'Error inesperado al restablecer la contraseña' } 
    }
  }
}
