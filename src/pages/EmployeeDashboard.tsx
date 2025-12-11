// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Clock, Calendar, FileText, TrendingUp, CheckCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const EmployeeDashboard = () => {
//   const navigate = useNavigate();

//   const quickActions = [
//     {
//       title: 'Submit Timesheet',
//       description: 'Log your hours for this week',
//       icon: Clock,
//       action: () => navigate('/timesheet'),
//       color: 'bg-blue-500',
//     },
//     {
//       title: 'Request Leave',
//       description: 'Apply for time off',
//       icon: Calendar,
//       action: () => navigate('/leave-request'),
//       color: 'bg-green-500',
//     },
//     {
//       title: 'View Reports',
//       description: 'Check your time reports',
//       icon: FileText,
//       action: () => navigate('/reports'),
//       color: 'bg-purple-500',
//     },
//   ];

//   const stats = [
//     { label: 'Hours This Week', value: '32.5', icon: Clock, color: 'text-blue-600' },
//     { label: 'Projects Active', value: '3', icon: TrendingUp, color: 'text-green-600' },
//     { label: 'Leave Balance', value: '15 days', icon: Calendar, color: 'text-purple-600' },
//     { label: 'Completed Tasks', value: '24', icon: CheckCircle, color: 'text-orange-600' },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
//         <p className="text-gray-600 mt-2">Welcome back! Here's your overview.</p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <Card key={index}>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">{stat.label}</p>
//                   <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
//                 </div>
//                 <stat.icon className={`w-8 h-8 ${stat.color}`} />
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Quick Actions */}
//       <div>
//         <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {quickActions.map((action, index) => (
//             <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={action.action}>
//               <CardHeader className="pb-3">
//                 <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
//                   <action.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <CardTitle className="text-lg">{action.title}</CardTitle>
//                 <CardDescription>{action.description}</CardDescription>
//               </CardHeader>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Activity</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <div>
//                 <p className="font-medium">Timesheet submitted for week Aug 10-16</p>
//                 <p className="text-sm text-gray-600">2 hours ago</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//               <Calendar className="w-5 h-5 text-blue-500" />
//               <div>
//                 <p className="font-medium">Leave request approved</p>
//                 <p className="text-sm text-gray-600">1 day ago</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//               <FileText className="w-5 h-5 text-purple-500" />
//               <div>
//                 <p className="font-medium">Project assignment updated</p>
//                 <p className="text-sm text-gray-600">3 days ago</p>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default EmployeeDashboard;