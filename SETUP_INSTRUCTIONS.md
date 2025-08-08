# 🚀 Instrucciones de Configuración - Variables de Entorno

## ❌ Error Actual
El proyecto está mostrando un error porque faltan las variables de entorno de Supabase.

## ✅ Solución

### Paso 1: Crear el archivo .env.local

En la **raíz del proyecto** (mismo nivel que `package.json`), crea un archivo llamado `.env.local` con el siguiente contenido:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_url_del_proyecto_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_supabase
SUPABASE_SERVICE_ROLE_KEY=tu_clave_de_servicio_supabase
```

### Paso 2: Obtener las credenciales de Supabase

1. **Ve a [supabase.com](https://supabase.com)**
2. **Inicia sesión** o crea una cuenta
3. **Crea un nuevo proyecto** o selecciona uno existente
4. **Ve a Settings > API** en el dashboard
5. **Copia las siguientes credenciales:**

   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

### Paso 3: Ejemplo de archivo .env.local

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjU0NzIwMCwiZXhwIjoxOTUyMTIzMjAwfQ.example
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM2NTQ3MjAwLCJleHAiOjE5NTIxMjMyMDB9.example
```

### Paso 4: Reiniciar el servidor

Después de crear el archivo `.env.local`:

1. **Detén el servidor** (Ctrl+C en la terminal)
2. **Reinicia el servidor:**
   ```bash
   npm run dev
   ```

### Paso 5: Verificar la configuración

1. **Abre [http://localhost:3000](http://localhost:3000)**
2. **Ve a la página de login** en `/login`
3. **Deberías poder ver el formulario de login** sin errores

## 🔧 Configuración Adicional de Supabase

### Habilitar autenticación por email

1. En tu dashboard de Supabase, ve a **Authentication > Providers**
2. Asegúrate de que **Email** esté habilitado
3. Configura las opciones de confirmación de email si lo deseas

### Crear un usuario de prueba

1. Ve a **Authentication > Users**
2. Haz clic en **"Add user"**
3. Ingresa un email y contraseña
4. Este usuario podrá hacer login en tu aplicación

## 🐛 Solución de Problemas

### Error: "Faltan las variables de entorno"

- ✅ Verifica que el archivo `.env.local` existe en la raíz del proyecto
- ✅ Verifica que las variables estén correctamente escritas (sin espacios)
- ✅ Reinicia el servidor después de crear el archivo

### Error de autenticación

- ✅ Verifica que las credenciales de Supabase sean correctas
- ✅ Asegúrate de que la autenticación por email esté habilitada
- ✅ Revisa la consola del navegador para más detalles

### Error de conexión

- ✅ Verifica que la URL de Supabase sea correcta
- ✅ Asegúrate de que el proyecto esté activo en Supabase
- ✅ Verifica que no haya restricciones de red

## 📞 Soporte

Si sigues teniendo problemas:

1. **Revisa la consola del navegador** para errores específicos
2. **Verifica la documentación de Supabase:** [supabase.com/docs](https://supabase.com/docs)
3. **Asegúrate de que todas las dependencias estén instaladas:** `npm install`

---

¡Una vez configurado, tu aplicación de login debería funcionar perfectamente! 🎉
