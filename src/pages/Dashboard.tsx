import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Shield, Users, FileText, Settings, Plus, Trash2, Edit2 } from 'lucide-react';
import { UserManagement } from '../components/UserManagement';
import { ContentModeration } from '../components/ContentModeration';
import { SystemSettings } from '../components/SystemSettings';
import { SecurityOverview } from '../components/SecurityOverview';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      id: 'overview',
      name: 'Security Overview',
      description: 'View security metrics and reports',
      icon: Shield,
      role: 'user',
      component: SecurityOverview,
    },
    {
      id: 'users',
      name: 'User Management',
      description: 'Manage user accounts and permissions',
      icon: Users,
      role: 'admin',
      component: UserManagement,
    },
    {
      id: 'content',
      name: 'Content Moderation',
      description: 'Review and moderate user content',
      icon: FileText,
      role: 'moderator',
      component: ContentModeration,
    },
    {
      id: 'settings',
      name: 'System Settings',
      description: 'Configure system preferences',
      icon: Settings,
      role: 'admin',
      component: SystemSettings,
    },
  ];

  const userFeatures = features.filter((feature) =>
    user?.role === 'admin' || 
    (user?.role === 'moderator' && feature.role !== 'admin') ||
    (user?.role === 'user' && feature.role === 'user')
  );

  const ActiveComponent = features.find(f => f.id === activeTab)?.component || SecurityOverview;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
                <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
              </div>
              <nav className="space-y-2">
                {userFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === feature.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <feature.icon className="h-5 w-5" />
                    <span>{feature.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};