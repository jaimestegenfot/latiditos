# Latiditos - Aplicación de Mensajes

Una aplicación moderna de mensajes construida con Next.js, TypeScript, Tailwind CSS y Supabase.

## 🚀 Características

- ✅ Autenticación completa con Supabase
- ✅ Interfaz moderna y responsive
- ✅ Panel de administración protegido
- ✅ Manejo de errores robusto
- ✅ Contexto de autenticación global
- ✅ Validaciones de formularios
- ✅ Diseño atractivo con Tailwind CSS

## 📋 Prerrequisitos

- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd latiditos
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=tu_url_del_proyecto_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_supabase
   SUPABASE_SERVICE_ROLE_KEY=tu_clave_de_servicio_supabase
   ```

4. **Configura Supabase**
   
   - Ve a [supabase.com](https://supabase.com)
   - Crea un nuevo proyecto
   - Ve a **Settings** > **API**
   - Copia la **Project URL** y la **anon public** key
   - Pégala en tu archivo `.env.local`

5. **Ejecuta el proyecto**
   ```bash
   npm run dev
   ```

6. **Abre tu navegador**
   
   Ve a [http://localhost:3000](http://localhost:3000)

## 🔐 Configuración de Autenticación

### 1. Habilitar autenticación por email

En tu dashboard de Supabase:
1. Ve a **Authentication** > **Providers**
2. Asegúrate de que **Email** esté habilitado
3. Configura las opciones de confirmación de email si lo deseas

### 2. Configurar políticas de seguridad (RLS)

```sql
-- Habilitar RLS en la tabla de usuarios
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Política para que los usuarios solo vean sus propios datos
CREATE POLICY "Users can view own data" ON public.users
  FOR SELECT USING (auth.uid() = id);
```

## 📁 Estructura del Proyecto

```
latiditos/
├── src/
│   ├── app/                    # Páginas de Next.js 13+
│   │   ├── login/             # Página de login
│   │   ├── panel/             # Panel de administración
│   │   ├── mensajes/          # Página de mensajes
│   │   └── layout.tsx         # Layout principal
│   ├── components/            # Componentes reutilizables
│   │   └── Navbar.tsx         # Barra de navegación
│   ├── lib/                   # Utilidades y configuraciones
│   │   ├── auth.ts            # Funciones de autenticación
│   │   ├── auth-context.tsx   # Contexto de autenticación
│   │   └── supabase.ts        # Cliente de Supabase
│   └── types/                 # Tipos de TypeScript
│       └── supabase.ts        # Tipos de Supabase
├── public/                    # Archivos estáticos
├── .env.local                 # Variables de entorno (crear)
└── README.md                  # Este archivo
```

## 🎯 Uso

### Login

1. Ve a `/login`
2. Ingresa tu email y contraseña
3. Haz clic en "Iniciar Sesión"
4. Serás redirigido al panel si las credenciales son correctas

### Panel de Administración

- Solo usuarios autenticados pueden acceder
- Muestra estadísticas y acciones rápidas
- Incluye navegación y funcionalidades de gestión

### Navegación

- **Inicio**: Página principal
- **Mensajes**: Sección de mensajes
- **Login**: Página de autenticación (solo si no estás logueado)
- **Panel**: Panel de administración (solo si estás logueado)
- **Cerrar Sesión**: Cerrar sesión (solo si estás logueado)

## 🔧 Desarrollo

### Scripts disponibles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Producción
npm start

# Linting
npm run lint
```

### Tecnologías utilizadas

- **Next.js 15**: Framework de React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de CSS
- **Supabase**: Backend como servicio
- **React Context**: Estado global

## 🐛 Solución de Problemas

### Error: "Faltan las variables de entorno de Supabase"

1. Asegúrate de que el archivo `.env.local` existe
2. Verifica que las variables estén correctamente configuradas
3. Reinicia el servidor de desarrollo

### Error de autenticación

1. Verifica que las credenciales de Supabase sean correctas
2. Asegúrate de que la autenticación por email esté habilitada
3. Revisa la consola del navegador para más detalles

### Problemas de tipos

1. Ejecuta `npm install` para asegurar que todas las dependencias estén instaladas
2. Verifica que los tipos de Supabase estén actualizados

## 📝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la [documentación de Supabase](https://supabase.com/docs)
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

---

¡Disfruta desarrollando con Latiditos! 🚀
