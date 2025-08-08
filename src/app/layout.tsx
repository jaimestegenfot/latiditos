import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/lib/auth-context";
import EnvError from "@/components/EnvError";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Latiditos",
  description: "Tu aplicación de mensajes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verificar si las variables de entorno están configuradas
  const hasEnvVars = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {hasEnvVars ? (
          <AuthProvider>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
              {children}
            </main>
          </AuthProvider>
        ) : (
          <EnvError />
        )}
      </body>
    </html>
  );
}
