import React from 'react';
import { Shield, Users, AlertTriangle, Activity } from 'lucide-react';

export const SecurityOverview: React.FC = () => {
  const stats = [
    {
      name: 'Active Users',
      value: '2,345',
      icon: Users,
      change: '+12%',
      changeType: 'increase',
    },
    {
      name: 'Security Alerts',
      value: '5',
      icon: AlertTriangle,
      change: '-2',
      changeType: 'decrease',
    },
    {
      name: 'System Health',
      value: '98%',
      icon: Activity,
      change: '+3%',
      changeType: 'increase',
    },
    {
      name: 'Security Score',
      value: 'A+',
      icon: Shield,
      change: 'Stable',
      changeType: 'neutral',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Overview</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  stat.changeType === 'increase'
                    ? 'text-green-600'
                    : stat.changeType === 'decrease'
                    ? 'text-red-600'
                    : 'text-gray-500'
                }`}
              >
                {stat.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[
              {
                event: 'New user registration',
                time: '5 minutes ago',
                type: 'info',
              },
              {
                event: 'Failed login attempt',
                time: '10 minutes ago',
                type: 'warning',
              },
              {
                event: 'System backup completed',
                time: '1 hour ago',
                type: 'success',
              },
            ].map((activity, idx) => (
              <li key={idx}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {activity.event}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};