export type Role = 'admin' | 'moderator' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string, role?: Role) => Promise<void>;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export interface SystemSettings {
  siteName: string;
  maintenanceMode: boolean;
  userRegistration: boolean;
  sessionTimeout: number;
  maxLoginAttempts: number;
  passwordPolicy: {
    minLength: number;
    requireNumbers: boolean;
    requireSymbols: boolean;
    requireUppercase: boolean;
  };
}