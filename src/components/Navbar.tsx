import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User as UserIcon, Shield, Settings, AlertTriangle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="font-bold text-xl">RBAC System</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                <div className="flex items-center space-x-2">
                  <UserIcon className="h-5 w-5" />
                  <span>{user.name}</span>
                  <span className="bg-indigo-700 px-2 py-1 rounded-full text-xs">
                    {user.role}
                  </span>
                </div>

                <Link
                  to="/test-errors"
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center"
                  title="Test Error Pages"
                >
                  <AlertTriangle className="h-5 w-5" />
                </Link>

                {user.role === 'admin' && (
                  <Link
                    to="/admin-dashboard"
                    className="hover:bg-indigo-700 px-3 py-2 rounded-md"
                  >
                    <Settings className="h-5 w-5" />
                  </Link>
                )}

                <button
                  onClick={logout}
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};