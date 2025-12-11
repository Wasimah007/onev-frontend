// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Clock,
//   Calendar,
//   FileText,
//   TrendingUp,
//   CheckCircle,
//   Eye,
//   X,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// const ManagerDashboard = () => {
//   const navigate = useNavigate();

//   // Quick actions (same as employee)
//   const quickActions = [
//     {
//       title: "Submit Timesheet",
//       description: "Log your hours for this week",
//       icon: Clock,
//       action: () => navigate("/timesheet"),
//       color: "bg-blue-500",
//     },
//     {
//       title: "Request Leave",
//       description: "Apply for time off",
//       icon: Calendar,
//       action: () => navigate("/leave-request"),
//       color: "bg-green-500",
//     },
//     {
//       title: "View Reports",
//       description: "Check your time reports",
//       icon: FileText,
//       action: () => navigate("/reports"),
//       color: "bg-purple-500",
//     },
//   ];

//   // Dashboard stats (same as employee)
//   const stats = [
//     { label: "Hours This Week", value: "32.5", icon: Clock, color: "text-blue-600" },
//     { label: "Projects Active", value: "3", icon: TrendingUp, color: "text-green-600" },
//     { label: "Leave Balance", value: "15 days", icon: Calendar, color: "text-purple-600" },
//     { label: "Completed Tasks", value: "24", icon: CheckCircle, color: "text-orange-600" },
//   ];

//   // Team approvals data
//   const teamApprovals = [
//     {
//       id: 1,
//       employeeName: "John Doe",
//       period: "Aug 17 - Aug 23, 2025",
//       submittedOn: "Aug 24, 2025",
//       totalHours: 40.0,
//       status: "Pending",
//     },
//     {
//       id: 2,
//       employeeName: "Jane Smith",
//       period: "Aug 17 - Aug 23, 2025",
//       submittedOn: "Aug 24, 2025",
//       totalHours: 38.5,
//       status: "Approved",
//     },
//     {
//       id: 3,
//       employeeName: "Peter Jones",
//       period: "Aug 10 - Aug 16, 2025",
//       submittedOn: "Aug 17, 2025",
//       totalHours: 42.0,
//       status: "Rejected",
//     },
//     {
//       id: 4,
//       employeeName: "Sam Wilson",
//       period: "Aug 10 - Aug 16, 2025",
//       submittedOn: "Aug 17, 2025",
//       totalHours: 35.0,
//       status: "Pending",
//     },
//   ];

//   const statusColors: Record<string, string> = {
//     Pending: "bg-yellow-100 text-yellow-800",
//     Approved: "bg-green-100 text-green-800",
//     Rejected: "bg-red-100 text-red-800",
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Manager Dashboard</h1>
//         <p className="text-gray-600 mt-2">
//           Welcome back! Manage your team and track performance.
//         </p>
//       </div>

//       {/* Tabs for Dashboard & Approvals */}
//       <Tabs defaultValue="dashboard" className="space-y-6">
//         <TabsList>
//           <TabsTrigger value="dashboard">My Dashboard</TabsTrigger>
//           <TabsTrigger value="approvals">My Team’s Approvals</TabsTrigger>
//         </TabsList>

//         {/* Dashboard Tab (same as EmployeeDashboard content) */}
//         <TabsContent value="dashboard">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <Card key={index}>
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">
//                         {stat.label}
//                       </p>
//                       <p className="text-2xl font-bold text-gray-900">
//                         {stat.value}
//                       </p>
//                     </div>
//                     <stat.icon className={`w-8 h-8 ${stat.color}`} />
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Quick Actions */}
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">
//               Quick Actions
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {quickActions.map((action, index) => (
//                 <Card
//                   key={index}
//                   className="hover:shadow-lg transition-shadow cursor-pointer"
//                   onClick={action.action}
//                 >
//                   <CardHeader className="pb-3">
//                     <div
//                       className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}
//                     >
//                       <action.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <CardTitle className="text-lg">{action.title}</CardTitle>
//                     <CardDescription>{action.description}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Recent Activity */}
//           <Card className="mt-6">
//             <CardHeader>
//               <CardTitle>Recent Activity</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <div>
//                     <p className="font-medium">
//                       Timesheet submitted for week Aug 10-16
//                     </p>
//                     <p className="text-sm text-gray-600">2 hours ago</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <Calendar className="w-5 h-5 text-blue-500" />
//                   <div>
//                     <p className="font-medium">Leave request approved</p>
//                     <p className="text-sm text-gray-600">1 day ago</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <FileText className="w-5 h-5 text-purple-500" />
//                   <div>
//                     <p className="font-medium">Project assignment updated</p>
//                     <p className="text-sm text-gray-600">3 days ago</p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Approvals Tab */}
//         <TabsContent value="approvals">
//           <Card className="shadow-md">
//             <CardContent className="p-0">
//               <table className="w-full text-left border-collapse">
//                 <thead className="bg-gray-50 text-gray-700">
//                   <tr>
//                     <th className="py-3 px-4 font-medium">EMPLOYEE NAME</th>
//                     <th className="py-3 px-4 font-medium">PERIOD</th>
//                     <th className="py-3 px-4 font-medium">SUBMITTED ON</th>
//                     <th className="py-3 px-4 font-medium">TOTAL HOURS</th>
//                     <th className="py-3 px-4 font-medium">STATUS</th>
//                     <th className="py-3 px-4 font-medium">ACTIONS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {teamApprovals.map((sheet) => (
//                     <tr
//                       key={sheet.id}
//                       className="border-t hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="py-3 px-4 font-semibold">
//                         {sheet.employeeName}
//                       </td>
//                       <td className="py-3 px-4">{sheet.period}</td>
//                       <td className="py-3 px-4">{sheet.submittedOn}</td>
//                       <td className="py-3 px-4">
//                         {sheet.totalHours.toFixed(2)}
//                       </td>
//                       <td className="py-3 px-4">
//                         <Badge className={statusColors[sheet.status]}>
//                           {sheet.status}
//                         </Badge>
//                       </td>
//                       <td className="py-3 px-4 flex gap-3 items-center">
//                         {sheet.status === "Pending" && (
//                           <>
//                             <Button size="icon" variant="ghost">
//                               <CheckCircle className="text-green-600" />
//                             </Button>
//                             <Button size="icon" variant="ghost">
//                               <X className="text-red-600" />
//                             </Button>
//                           </>
//                         )}
//                         <Button size="icon" variant="ghost">
//                           <Eye className="text-gray-600" />
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default ManagerDashboard;
