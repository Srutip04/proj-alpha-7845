import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import { AlertTriangle } from 'lucide-react';

export const TestErrors: React.FC = () => {
  const { user } = useAuth();

  const testScenarios = [
    {
      name: '404 Not Found',
      action: async () => {
        try {
          await api.get('/api/nonexistent-route');
        } catch (error) {
          // Error will be handled by axios interceptor
        }
      },
    },
    {
      name: '403 Forbidden',
      action: async () => {
        try {
          await api.get('/api/users/admin-only');
        } catch (error) {
          // Error will be handled by axios interceptor
        }
      },
    },
    {
      name: 'Invalid Route',
      action: () => {
        window.location.href = '/this-route-does-not-exist';
      },
    },
    {
      name: 'Protected Route (Admin Only)',
      action: () => {
        window.location.href = '/admin-dashboard';
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3" />
              <h2 className="text-lg font-medium text-gray-900">Error Handling Test Page</h2>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Current user role: <span className="font-medium">{user?.role || 'Not logged in'}</span>
            </p>
          </div>
          
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {testScenarios.map((scenario, index) => (
                <button
                  key={index}
                  onClick={scenario.action}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Test {scenario.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};