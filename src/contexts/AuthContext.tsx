import React, { createContext, useContext, useState } from 'react';
import { User, AuthContextType } from '../types/auth';
import { generateToken } from '../utils/auth';

const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'mod@example.com',
    name: 'Moderator User',
    role: 'moderator',
  },
  {
    id: '3',
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
  },
];

interface ExtendedAuthContextType extends AuthContextType {
  users: User[];
  updateUser: (user: User) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  createUser: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<ExtendedAuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [users, setUsers] = useState<User[]>(mockUsers);

  const login = async (email: string, password: string) => {
    const foundUser = users.find(u => u.email === email);
    if (!foundUser) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken(foundUser);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(foundUser));
    setUser(foundUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const register = async (email: string, password: string, name: string, role: User['role'] = 'user') => {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: String(users.length + 1),
      email,
      name,
      role,
    };
    
    setUsers([...users, newUser]);
    const token = generateToken(newUser);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const updateUser = async (updatedUser: User) => {
    setUsers(users.map(u => u.id === updatedUser. id ? updatedUser : u));
  };

  const deleteUser = async (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const createUser = async (userData: Partial<User>) => {
    if (!userData.email || !userData.name) {
      throw new Error('Required fields missing');
    }

    const newUser: User = {
      id: String(users.length + 1),
      email: userData.email,
      name: userData.name,
      role: userData.role || 'user',
    };

    setUsers([...users, newUser]);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      register,
      users,
      updateUser,
      deleteUser,
      createUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};