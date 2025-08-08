# Configuración de Supabase

## Pasos para configurar Supabase en tu proyecto

### 1. Crear un proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Inicia sesión o crea una cuenta
3. Crea un nuevo proyecto
4. Anota la URL del proyecto y las claves

### 2. Configurar variables de entorno

Edita el archivo `.env.local` y reemplaza los valores con tus credenciales de Supabase:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_url_del_proyecto_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_supabase
SUPABASE_SERVICE_ROLE_KEY=tu_clave_de_servicio_supabase
```

### 3. Obtener las credenciales

1. En tu dashboard de Supabase, ve a **Settings** > **API**
2. Copia la **Project URL** y pégala en `NEXT_PUBLIC_SUPABASE_URL`
3. Copia la **anon public** key y pégala en `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Copia la **service_role** key y pégala en `SUPABASE_SERVICE_ROLE_KEY`

### 4. Configurar la base de datos

1. Ve a **Table Editor** en tu dashboard de Supabase
2. Crea las tablas necesarias para tu aplicación
3. Configura las políticas de seguridad (RLS)

### 5. Ejemplo de tabla de usuarios

```sql
-- Crear tabla de usuarios (opcional, Supabase Auth ya maneja esto)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Política para que los usuarios solo vean sus propios datos
CREATE POLICY "Users can view own data" ON public.users
  FOR SELECT USING (auth.uid() = id);
```

### 6. Funciones disponibles

El proyecto incluye las siguientes funciones de autenticación:

- `signInWithEmail(email, password)` - Iniciar sesión
- `signUpWithEmail(email, password)` - Registrarse
- `signOut()` - Cerrar sesión
- `getCurrentUser()` - Obtener usuario actual
- `resetPassword(email)` - Restablecer contraseña

### 7. Uso en componentes

```typescript
import { signInWithEmail } from '@/lib/auth';

// En tu componente
const handleLogin = async () => {
  const { data, error } = await signInWithEmail(email, password);
  if (error) {
    console.error('Error:', error.message);
  } else {
    // Login exitoso
    console.log('Usuario:', data.user);
  }
};
```

### 8. Notas importantes

- Las variables de entorno que empiezan con `NEXT_PUBLIC_` son accesibles en el cliente
- La `SUPABASE_SERVICE_ROLE_KEY` solo debe usarse en el servidor
- Siempre maneja los errores de autenticación
- Configura las políticas de seguridad (RLS) en Supabase
- Usa TypeScript para mejor experiencia de desarrollo

### 9. Recursos adicionales

- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de autenticación](https://supabase.com/docs/guides/auth)
- [Guía de RLS](https://supabase.com/docs/guides/auth/row-level-security)
