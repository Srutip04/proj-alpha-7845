import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Forbidden: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <Shield className="mx-auto h-16 w-16 text-red-500" />
        <h1 className="mt-6 text-4xl font-extrabold text-gray-900 tracking-tight">403</h1>
        <p className="mt-2 text-2xl font-semibold text-gray-600">Access Denied</p>
        <p className="mt-4 text-base text-gray-500">
          You don't have permission to access this page.
        </p>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
          {!user && (
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};