import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Role } from '../types/auth';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export const UserManagement: React.FC = () => {
  const { users, updateUser, deleteUser, createUser } = useAuth();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<Partial<User> | null>(null);

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setNewUser(null);
  };

  const handleAdd = () => {
    setNewUser({ name: '', email: '', role: 'user' });
    setEditingUser(null);
  };

  const handleSave = async (user: User) => {
    await updateUser(user);
    setEditingUser(null);
  };

  const handleCreate = async (userData: Partial<User>) => {
    if (userData.email && userData.name) {
      await createUser(userData);
      setNewUser(null);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        <button
          onClick={handleAdd}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {newUser && (
              <tr>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={newUser.name || ''}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="border rounded px-2 py-1 w-full"
                    placeholder="Name"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="email"
                    value={newUser.email || ''}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="border rounded px-2 py-1 w-full"
                    placeholder="Email"
                  />
                </td>
                <td className="px-6 py-4">
                  <select
                    value={newUser.role || 'user'}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value as Role })}
                    className="border rounded px-2 py-1"
                  >
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCreate(newUser)}
                      className="text-green-600 hover:text-green-900"
                    >
                      <Save className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setNewUser(null)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            )}
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">
                  {editingUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, name: e.target.value })
                      }
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingUser?.id === user.id ? (
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, email: e.target.value })
                      }
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    <div className="text-sm text-gray-500">{user.email}</div>
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingUser?.id === user.id ? (
                    <select
                      value={editingUser.role}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          role: e.target.value as Role,
                        })
                      }
                      className="border rounded px-2 py-1"
                    >
                      <option value="user">User</option>
                      <option value="moderator">Moderator</option>
                      <option value="admin">Admin</option>
                    </select>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {user.role}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {editingUser?.id === user.id ? (
                      <>
                        <button
                          onClick={() => handleSave(editingUser)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Save className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => setEditingUser(null)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};