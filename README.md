# Role-Based Access Control System

A modern, secure Role-Based Access Control system built with React, TypeScript, and Node.js. This application demonstrates authentication, authorization, and permission management with different user roles.

## 🚀 Features

- **Authentication**
  - User registration with role selection
  - Secure login with JWT
  - Automatic token management
  - Session handling

- **Authorization**
  - Role-based access control (Admin, Moderator, User)
  - Protected routes based on user roles
  - Permission-based UI rendering

- **User Management**
  - User CRUD operations (Admin only)
  - Role assignment and modification
  - User profile management

- **Security**
  - Custom error pages (404, 403)
  - Error boundary implementation
  - API error handling
  - Protected API endpoints

- **Content Moderation**
  - Content approval system
  - Report management
  - Moderation queue

## 🛠️ Technologies

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Lucide React (Icons)
  - React Router DOM
  - Axios

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication
  - bcryptjs (Password hashing)

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rbac-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb+srv://b120064:bZFG5i1CiyhLbhRB@cluster0.wsxy5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Start the application**
   ```bash
   # Start backend server
   npm run server

   # Start frontend development server
   npm run dev
   ```

## 🧪 Testing Scenarios

### 1. Authentication Testing

- **Register a new user**
  1. Click "Register" in the navbar
  2. Fill in the registration form
  3. Select a role (User/Moderator/Admin)
  4. Submit and verify redirect to dashboard

- **Login testing**
  1. Click "Login" in the navbar
  2. Use these test credentials:
     - Admin: admin@example.com
     - Moderator: mod@example.com
     - User: user@example.com
     - Password: password123 (for all accounts)

### 2. Role-Based Access Testing

- **Admin Features**
  1. Login as admin
  2. Access User Management
  3. Try creating/editing/deleting users
  4. Access System Settings

- **Moderator Features**
  1. Login as moderator
  2. Access Content Moderation
  3. Try approving/rejecting content

- **User Features**
  1. Login as regular user
  2. Verify limited access to features
  3. Check security overview access

### 3. Error Handling Testing

Access the Test Error page through the navbar (warning triangle icon):

1. **404 Not Found Test**
   - Click "Test 404 Not Found"
   - Verify custom 404 page display

2. **403 Forbidden Test**
   - Click "Test 403 Forbidden"
   - Verify custom forbidden page display

3. **Invalid Route Test**
   - Click "Test Invalid Route"
   - Verify 404 page routing

4. **Protected Route Test**
   - Login as non-admin
   - Click "Test Protected Route"
   - Verify forbidden page display

## 👥 User Roles

1. **Admin**
   - Full system access
   - User management
   - System settings
   - Content moderation

2. **Moderator**
   - Content moderation
   - Basic user features
   - Security overview

3. **User**
   - Basic features
   - Security overview
   - Profile management

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API endpoints
- Role-based route protection
- Error handling and logging
- Input validation
- XSS protection
- CORS configuration

## 🎯 API Endpoints

### Authentication
- POST `/api/users/login` - User login
- POST `/api/users/register` - User registration
- GET `/api/users/profile` - Get user profile

### User Management
- GET `/api/users` - Get all users (Admin only)
- PUT `/api/users/:id` - Update user (Admin only)
- DELETE `/api/users/:id` - Delete user (Admin only)

## 📝 Error Handling

The application includes comprehensive error handling:

- Custom 404 page for non-existent routes
- Custom 403 page for unauthorized access
- API error interceptors
- Form validation errors
- Network error handling
- Session expiration handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.