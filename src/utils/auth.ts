import { User, Role } from '../types/auth';

export const generateToken = (user: User): string => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  return btoa(JSON.stringify(payload));
};

export const hasPermission = (userRole: Role, requiredRole: Role): boolean => {
  const roles: Role[] = ['user', 'moderator', 'admin'];
  const userRoleIndex = roles.indexOf(userRole);
  const requiredRoleIndex = roles.indexOf(requiredRole);
  return userRoleIndex >= requiredRoleIndex;
};