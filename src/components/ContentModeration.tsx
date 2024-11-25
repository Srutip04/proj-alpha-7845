import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface Content {
  id: string;
  title: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected';
  reportCount: number;
  createdAt: string;
}

export const ContentModeration: React.FC = () => {
  const [contents] = useState<Content[]>([
    {
      id: '1',
      title: 'Community Post #1',
      type: 'post',
      status: 'pending',
      reportCount: 3,
      createdAt: '2024-03-15',
    },
    {
      id: '2',
      title: 'User Comment #123',
      type: 'comment',
      status: 'pending',
      reportCount: 5,
      createdAt: '2024-03-14',
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Moderation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contents.map((content) => (
          <div
            key={content.id}
            className="bg-white border rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {content.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Type: {content.type}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  {content.reportCount} reports
                </span>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Created: {content.createdAt}
                </p>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve
                </button>
                <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};