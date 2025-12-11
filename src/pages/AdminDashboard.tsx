// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { logoutUser } from '@/utils/auth';

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logoutUser(); // remove tokens from localStorage
//     navigate('/login');
//   };

//   const dashboardCards = [
//     {
//       title: 'Organization Setup',
//       description: 'Configure your organization\'s settings, manage users, and customize workflows.',
//       buttonText: 'Go to Settings',
//       buttonAction: () => navigate('/organization'),
//       status: null,
//       bgColor: 'from-orange-100 to-orange-200',
//     },
//     {
//       title: 'Timesheet App',
//       description: 'Manage employee work hours, track project time, and generate reports.',
//       buttonText: 'Go to Timesheets',
//       buttonAction: () => navigate('/timesheet'),
//       status: null,
//       bgColor: 'from-orange-100 to-orange-200',
//     },
//     {
//       title: 'Expense App',
//       description: 'Streamline expense reporting, track budgets, and reimburse employees efficiently.',
//       buttonText: 'Go to Expenses',
//       buttonAction: () => navigate('/expenses'),
//       status: { type: 'success', text: 'All expenses approved' },
//       bgColor: 'from-orange-100 to-orange-200',
//     },
//     {
//       title: 'Help Desk',
//       description: 'Provide support, manage tickets, and resolve issues quickly with our integrated help desk.',
//       buttonText: 'Go to Help Desk',
//       buttonAction: () => navigate('/help-desk'),
//       status: { type: 'warning', text: '3 new tickets' },
//       bgColor: 'from-orange-100 to-orange-200',
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         <p className="text-gray-600 mt-2">Here's an overview of your applications.</p>
//       </div>

//       {/* Dashboard Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {dashboardCards.map((card, index) => (
//           <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
//             {/* Card Image with Decorative Elements */}
//             <div className={`h-40 bg-gradient-to-br ${card.bgColor} relative overflow-hidden`}>
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-orange-300/50"></div>
              
//               {/* Decorative elements to match the design */}
//               {index === 0 && (
//                 <>
//                   {/* Organization Setup - Office/Plant Scene */}
//                   <div className="absolute top-4 left-4 w-16 h-20 bg-white/30 rounded-lg border border-white/20"></div>
//                   <div className="absolute top-6 left-6 w-12 h-16 bg-white/20 rounded"></div>
//                   <div className="absolute bottom-4 left-8 w-6 h-12 bg-green-600/60 rounded-t-full"></div>
//                   <div className="absolute bottom-4 left-12 w-4 h-8 bg-green-500/60 rounded-t-full"></div>
//                   <div className="absolute bottom-4 left-16 w-3 h-6 bg-green-400/60 rounded-t-full"></div>
//                   <div className="absolute top-8 right-8 w-8 h-8 bg-white/25 rounded"></div>
//                   <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/30 rounded-full"></div>
//                 </>
//               )}
              
//               {index === 1 && (
//                 <>
//                   {/* Timesheet App - Time/Clock Scene */}
//                   <div className="absolute top-6 left-6 w-14 h-14 bg-white/30 rounded-full"></div>
//                   <div className="absolute top-8 left-8 w-10 h-10 bg-white/20 rounded-full"></div>
//                   <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/25 rounded-lg"></div>
//                   <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 rounded"></div>
//                   <div className="absolute bottom-4 left-8 w-5 h-10 bg-green-600/50 rounded-t-full"></div>
//                   <div className="absolute bottom-4 left-12 w-4 h-8 bg-green-500/50 rounded-t-full"></div>
//                 </>
//               )}
              
//               {index === 2 && (
//                 <>
//                   {/* Expense App - Certificate/Document Scene */}
//                   <div className="absolute top-8 left-8 w-20 h-16 bg-white/30 rounded-lg border-2 border-white/40"></div>
//                   <div className="absolute top-10 left-10 w-16 h-12 bg-white/20 rounded"></div>
//                   <div className="absolute top-12 left-12 w-12 h-8 bg-green-500/40 rounded"></div>
//                   <div className="absolute bottom-6 right-6 w-10 h-10 bg-orange-300/60 rounded-full"></div>
//                   <div className="absolute top-6 right-12 w-8 h-8 bg-orange-200/60 rounded-full"></div>
//                 </>
//               )}
              
//               {index === 3 && (
//                 <>
//                   {/* Help Desk - Workspace Scene */}
//                   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-amber-800/60 rounded-full"></div>
//                   <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-amber-900/40 rounded-t-lg"></div>
//                   <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-700/40 rounded"></div>
//                   <div className="absolute bottom-4 left-4 w-8 h-16 bg-green-600/50 rounded-t-full"></div>
//                   <div className="absolute bottom-4 left-10 w-6 h-12 bg-green-500/50 rounded-t-full"></div>
//                   <div className="absolute bottom-4 right-4 w-10 h-20 bg-green-600/40 rounded-t-full"></div>
//                   <div className="absolute bottom-4 right-12 w-6 h-14 bg-green-500/40 rounded-t-full"></div>
//                 </>
//               )}
//             </div>

//             <CardHeader className="pb-3">
//               <CardTitle className="text-lg font-semibold text-gray-900">
//                 {card.title}
//               </CardTitle>
//               <CardDescription className="text-sm text-gray-600 leading-relaxed">
//                 {card.description}
//               </CardDescription>
//             </CardHeader>

//             <CardContent className="pt-0">
//               <div className="flex items-center justify-between">
//                 {/* Status indicator */}
//                 {card.status && (
//                   <div className="flex items-center space-x-2">
//                     {card.status.type === 'success' ? (
//                       <CheckCircle className="w-4 h-4 text-green-500" />
//                     ) : (
//                       <AlertCircle className="w-4 h-4 text-orange-500" />
//                     )}
//                     <span className={`text-sm ${
//                       card.status.type === 'success' ? 'text-green-600' : 'text-orange-600'
//                     }`}>
//                       {card.status.text}
//                     </span>
//                   </div>
//                 )}

//                 {/* Action Button */}
//                 <Button 
//                   onClick={card.buttonAction}
//                   className="bg-blue-600 hover:bg-blue-700 text-white ml-auto"
//                 >
//                   {card.buttonText}
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { ArrowRight, CheckCircle, AlertCircle, LogOut } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { logoutUser } from '@/utils/auth';

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logoutUser(); // remove tokens from localStorage
//     navigate('/login');
//   };

//   const dashboardCards = [
//     {
//       title: 'Organization Setup',
//       description: "Configure your organization's settings, manage users, and customize workflows.",
//       buttonText: 'Go to Settings',
//       buttonAction: () => navigate('/organization'),
//       status: null,
//       bgColor: 'from-orange-100 to-orange-200',
//     },
//     {
//       title: 'Timesheet App',
//       description: 'Manage employee work hours, track project time, and generate reports.',
//       buttonText: 'Go to Timesheets',
//       buttonAction: () => navigate('/timesheet'),
//       status: null,
//       bgColor: 'from-orange-100 to-orange-200',
//     },
//     {
//       title: 'Expense App',
//       description: 'Streamline expense reporting, track budgets, and reimburse employees efficiently.',
//       buttonText: 'Go to Expenses',
//       buttonAction: () => navigate('/expenses'),
//       status: { type: 'success', text: 'All expenses approved' },
//       bgColor: 'from-orange-100 to-orange-200',
//     },
//     {
//       title: 'Help Desk',
//       description: 'Provide support, manage tickets, and resolve issues quickly with our integrated help desk.',
//       buttonText: 'Go to Help Desk',
//       buttonAction: () => navigate('/help-desk'),
//       status: { type: 'warning', text: '3 new tickets' },
//       bgColor: 'from-orange-100 to-orange-200',
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//           <p className="text-gray-600 mt-2">Here's an overview of your applications.</p>
//         </div>

//         {/* Logout Button */}
//         <Button
//           onClick={handleLogout}
//           variant="destructive"
//           className="flex items-center gap-2"
//         >
//           <LogOut className="w-4 h-4" />
//           Logout
//         </Button>
//       </div>

//       {/* Dashboard Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {dashboardCards.map((card, index) => (
//           <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
//             <div className={`h-40 bg-gradient-to-br ${card.bgColor} relative overflow-hidden`}>
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-orange-300/50"></div>

//               {/* Decorative elements per card index */}
//               {index === 0 && (
//                 <>
//                   <div className="absolute top-4 left-4 w-16 h-20 bg-white/30 rounded-lg border border-white/20"></div>
//                   <div className="absolute bottom-4 left-8 w-6 h-12 bg-green-600/60 rounded-t-full"></div>
//                 </>
//               )}
//               {index === 1 && (
//                 <>
//                   <div className="absolute top-6 left-6 w-14 h-14 bg-white/30 rounded-full"></div>
//                   <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/25 rounded-lg"></div>
//                 </>
//               )}
//             </div>

//             <CardHeader className="pb-3">
//               <CardTitle className="text-lg font-semibold text-gray-900">{card.title}</CardTitle>
//               <CardDescription className="text-sm text-gray-600 leading-relaxed">
//                 {card.description}
//               </CardDescription>
//             </CardHeader>

//             <CardContent className="pt-0">
//               <div className="flex items-center justify-between">
//                 {card.status && (
//                   <div className="flex items-center space-x-2">
//                     {card.status.type === 'success' ? (
//                       <CheckCircle className="w-4 h-4 text-green-500" />
//                     ) : (
//                       <AlertCircle className="w-4 h-4 text-orange-500" />
//                     )}
//                     <span
//                       className={`text-sm ${
//                         card.status.type === 'success'
//                           ? 'text-green-600'
//                           : 'text-orange-600'
//                       }`}
//                     >
//                       {card.status.text}
//                     </span>
//                   </div>
//                 )}
//                 <Button
//                   onClick={card.buttonAction}
//                   className="bg-blue-600 hover:bg-blue-700 text-white ml-auto"
//                 >
//                   {card.buttonText}
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// src/pages/AdminDashboard.tsx
// src/pages/AdminDashboard.tsx
// src/pages/AdminDashboard.tsx
// src/pages/AdminDashboard.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logoutUser, getUser } from "@/utils/auth";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const user = getUser();
    setUserRole(user?.roles || "");
    setUserName(user?.first_name || user?.email || "");
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  // ✅ Define all cards here
  const allCards = [
    {
      id: "organization",
      title: "Organization Setup",
      description:
        "Configure your organization's settings, manage users, and customize workflows.",
      buttonText: "Go to Settings",
      // action: () => navigate("/organization"),
      action: () => (window.location.href = "http://localhost:5174/"),
      status: null,
      visibleTo: ["Admin"], // Only Admin sees this card
    },
    {
      id: "timesheet",
      title: "Timesheet App",
      description:
        "Manage employee work hours, track project time, and generate reports.",
      buttonText: "Go to Timesheets",
      action: () => navigate("/timesheet"),
      status: null,
      visibleTo: ["Admin", "Manager", "Employee"],
    },
    {
      id: "expenses",
      title: "Expense Tracker",
      description:
        "Track budgets and manage reimbursements efficiently.",
      buttonText: "Go to Expenses",
      action: () => navigate("/expenses"),
      status: { type: "success", text: "All expenses approved" },
      visibleTo: ["Admin", "Manager", "Employee"],
    },
    {
      id: "helpdesk",
      title: "Help Desk",
      description:
        "Manage support tickets and help users resolve issues quickly.",
      buttonText: "Go to Help Desk",
      action: () => navigate("/help-desk"),
      status: { type: "warning", text: "3 new tickets" },
      visibleTo: ["Admin", "Manager", "Employee"],
    },
  ];

  // ✅ Filter cards based on role
  const visibleCards = allCards.filter((card) =>
    card.visibleTo.includes(userRole)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard{" "}
            {userRole && (
              <span className="text-lg text-gray-500 ml-2">({userRole})</span>
            )}
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome back, {userName || "User"}!
          </p>
        </div>
        <Button
          onClick={handleLogout}
          variant="destructive"
          className="flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleCards.map((card) => (
          <Card key={card.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex justify-between items-center">
              {card.status && (
                <div className="flex items-center gap-2">
                  {card.status.type === "success" ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                  )}
                  <span
                    className={`text-sm ${
                      card.status.type === "success"
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}
                  >
                    {card.status.text}
                  </span>
                </div>
              )}

              <Button
                onClick={card.action}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {card.buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

