// import { Toaster } from '@/components/ui/sonner';
// import { TooltipProvider } from '@/components/ui/tooltip';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './components/Layout';
// import AdminDashboard from './pages/AdminDashboard';
// import TimesheetPortal from './pages/TimesheetPortal';
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import ManagerDashboard from './pages/ManagerDashboard';
// import OrganizationSetup from './pages/OrganizationSetup';
// import { useState } from 'react';

// const queryClient = new QueryClient();

// const App = () => {
//   // Mock user role - in real app this would come from authentication
//   const [userRole] = useState<'admin' | 'manager' | 'employee'>('admin');

//   const getDashboardRoute = () => {
//     switch (userRole) {
//       case 'admin':
//         return '/admin-dashboard';
//       case 'manager':
//         return '/manager-dashboard';
//       case 'employee':
//         return '/employee-dashboard';
//       default:
//         return '/admin-dashboard';
//     }
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Navigate to={getDashboardRoute()} replace />} />
//             <Route path="/" element={<Layout />}>
//               <Route path="admin-dashboard" element={<AdminDashboard />} />
//               <Route path="manager-dashboard" element={<ManagerDashboard />} />
//               <Route path="employee-dashboard" element={<EmployeeDashboard />} />
//               <Route path="timesheet" element={<TimesheetPortal />} />
//               <Route path="organization" element={<OrganizationSetup />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;



// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from '@/components/ui/sonner';
// import { TooltipProvider } from '@/components/ui/tooltip';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Layout from './components/Layout';
// import AdminDashboard from './pages/AdminDashboard';
// import ManagerDashboard from './pages/ManagerDashboard';
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import OrganizationSetup from './pages/OrganizationSetup';
// import TimesheetPortal from './pages/TimesheetPortal';
// import Login from './pages/login';
// import ProtectedRoute from './components/ProtectedRoute';

// const queryClient = new QueryClient();

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <BrowserRouter>
//           <Routes>
//             {/* Default route → login */}
//             <Route path="/" element={<Navigate to="/login" replace />} />
//             <Route path="/login" element={<Login />} />

//             {/* Protected + Layout routes */}
//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <Layout />
//                 </ProtectedRoute>
//               }
//             >
//               <Route path="admin-dashboard" element={<AdminDashboard />} />
//               <Route path="manager-dashboard" element={<ManagerDashboard />} />
//               <Route path="employee-dashboard" element={<EmployeeDashboard />} />
//               <Route path="organization" element={<OrganizationSetup />} />
//               <Route path="timesheet" element={<TimesheetPortal />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;



// src/App.tsx
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from '@/components/ui/sonner';
// import { TooltipProvider } from '@/components/ui/tooltip';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Layout from './components/Layout';
// import AdminDashboard from './pages/AdminDashboard';
// import ManagerDashboard from './pages/ManagerDashboard';
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import OrganizationSetup from './pages/OrganizationSetup';
// import TimesheetPortal from './pages/TimesheetPortal';
// import Login from './pages/login'; // ✅ Make sure it matches file name
// // import ProtectedRoute from './routes/ProtectedRoute'; // ✅ Updated path if needed
// import ProtectedRoute from './components/ProtectedRoute';
// const queryClient = new QueryClient();

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <BrowserRouter>
//           <Routes>
//             {/* Default route → redirect to /login */}
//             <Route path="/" element={<Navigate to="/login" replace />} />

//             {/* Public route: Login */}
//             <Route path="/login" element={<Login />} />

//             {/* Protected + Layout routes */}
//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <Layout />
//                 </ProtectedRoute>
//               }
//             >
//               {/* ✅ Admin, Manager, Employee Dashboards */}
//               <Route path="admin-dashboard" element={<AdminDashboard />} />
//               <Route path="manager-dashboard" element={<ManagerDashboard />} />
//               <Route path="employee-dashboard" element={<EmployeeDashboard />} />

//               {/* ✅ Apps inside portal */}
//               <Route path="organization" element={<OrganizationSetup />} />
//               <Route path="timesheet" element={<TimesheetPortal />} />
//             </Route>

//             {/* Redirect any unknown path */}
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;

// #########



// src/App.tsx
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from '@/components/ui/sonner';
// import { TooltipProvider } from '@/components/ui/tooltip';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Layout from './components/Layout';
// import AdminDashboard from './pages/AdminDashboard';
// import ManagerDashboard from './pages/ManagerDashboard';
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import OrganizationSetup from './pages/OrganizationSetup';
// import TimesheetPortal from './pages/TimesheetPortal';
// import Login from './pages/login';
// import ProtectedRoute from './components/ProtectedRoute';
// import { useState } from 'react';

// const queryClient = new QueryClient();

// const App = () => {
//   // Mock user role (replace with real auth context)
//   const [userRole] = useState<'Admin' | 'Manager' | 'Employee'>('Manager');

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Navigate to="/login" replace />} />
//             <Route path="/login" element={<Login />} />

//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <Layout />
//                 </ProtectedRoute>
//               }
//             >
//               {/* Dashboards */}
//               <Route path="admin-dashboard" element={<AdminDashboard />} />
//               <Route path="manager-dashboard" element={<ManagerDashboard />} />
//               <Route path="employee-dashboard" element={<EmployeeDashboard />} />
//               <Route path="timesheet" element={<TimesheetPortal />} />

//               {/* Organization Setup - visible only to Admins */}
//               {userRole === 'Manager' && (
//                 <Route path="organization" element={<OrganizationSetup />} />
//               )}
//             </Route>

//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;


// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import AdminDashboard from './pages/AdminDashboard';
// import ManagerDashboard from './pages/ManagerDashboard';
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import OrganizationSetup from './pages/OrganizationSetup';
// import TimesheetPortal from './pages/TimesheetPortal';
import Login from './pages/login';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

            {/* Protected routes with Layout */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              {/* Dashboards - All roles can access admin-dashboard, 
                  it will show different cards based on role */}
              <Route path="admin-dashboard" element={<AdminDashboard />} />
              {/* <Route path="employee-dashboard" element={<EmployeeDashboard />} /> */}
              
              {/* Applications - accessible by all roles */}
              {/* <Route path="timesheet" element={<TimesheetPortal />} /> */}
              
              {/* Organization Setup - The route exists but access is controlled 
                  within the dashboard card visibility */}
              {/* <Route path="organization" element={<OrganizationSetup />} /> */}
            </Route>

            {/* Catch all - redirect to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;