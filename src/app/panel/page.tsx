'use client';
import React, { useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function Panel() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Cargando...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-orange-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-gray-600 mt-1">Bienvenido, {user.email}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
                                Nueva Entrada
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                        <div className="flex items-center">
                            <div className="p-2 bg-orange-100 rounded-lg">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Usuarios</p>
                                <p className="text-2xl font-bold text-gray-900">1,234</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-green-600 text-sm font-medium">+12% desde el mes pasado</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Ventas</p>
                                <p className="text-2xl font-bold text-gray-900">$45,678</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-green-600 text-sm font-medium">+8% desde el mes pasado</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Pedidos</p>
                                <p className="text-2xl font-bold text-gray-900">567</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-green-600 text-sm font-medium">+15% desde el mes pasado</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                        <div className="flex items-center">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Crecimiento</p>
                                <p className="text-2xl font-bold text-gray-900">23.5%</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-green-600 text-sm font-medium">+3% desde el mes pasado</span>
                        </div>
                    </div>
                </div>

                {/* Charts and Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Chart Section */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Análisis de Ventas</h3>
                        <div className="h-64 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
                            <p className="text-gray-600">Gráfico de ventas aquí</p>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">Nuevo pedido recibido</p>
                                    <p className="text-xs text-gray-500">Hace 5 minutos</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">Usuario registrado</p>
                                    <p className="text-xs text-gray-500">Hace 15 minutos</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">Producto actualizado</p>
                                    <p className="text-xs text-gray-500">Hace 1 hora</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">Reporte generado</p>
                                    <p className="text-xs text-gray-500">Hace 2 horas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-8 h-8 text-orange-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span className="text-sm font-medium text-gray-900">Agregar Producto</span>
                        </button>
                        <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-900">Gestionar Usuarios</span>
                        </button>
                        <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-900">Ver Reportes</span>
                        </button>
                        <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-900">Configuración</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}