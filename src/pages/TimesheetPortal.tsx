// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Switch } from '@/components/ui/switch';
// import { Textarea } from '@/components/ui/textarea';
// import { Clock, Calendar, ChevronLeft, ChevronRight, Save, Send, Plus, Trash2, User, Lock, CheckCircle, CloudCog } from 'lucide-react';
// import { toast } from 'sonner';

// interface TimesheetEntry {
//   id: string;
//   projectId: string;
//   projectName: string;
//   subProjectId: string;
//   subProjectName: string;
//   billable: boolean;
//   hours: {
//     monday: string;
//     tuesday: string;
//     wednesday: string;
//     thursday: string;
//     friday: string;
//     saturday: string;
//     sunday: string;
//   };
//   total: number;
//   comment: string;
// }

// interface Project {
//   id: string;
//   name: string;
//   subProjects: SubProject[];
// }

// interface SubProject {
//   id: string;
//   name: string;
// }

// interface LeaveRequest {
//   id: string;
//   leaveType: string;
//   startDate: string;
//   endDate: string;
//   reason: string;
//   status: 'pending' | 'approved' | 'rejected';
//   totalDays: number;
//   appliedDate: string;
// }

// interface TimesheetStatus {
//   status: 'draft' | 'submitted' | 'approved' | 'rejected';
//   submittedAt?: string;
//   approvedAt?: string;
//   rejectedAt?: string;
//   comments?: string;
// }

// const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTQzNjI2Mi1mYWVkLTQ5MjctYmY3Yy04NDlhNDQ2Nzg0OGEiLCJ1c2VybmFtZSI6IkVtcDA3IiwiZW1haWwiOiJFbXAwN0B5b3BtYWlsLmNvbSIsImlzX2FkbWluIjowLCJyb2xlcyI6bnVsbCwiZXhwIjoxNzU5NDg5NzE5LCJ0eXBlIjoiYWNjZXNzIn0.RhfubcF60__Rk_AA6lcnO2l81Y0Gq4dQ1XdlgPLnee8"

// const TimesheetPortal = () => {
//   const [selectedWeek, setSelectedWeek] = useState('Aug 17 - Aug 23, 2025');
//   const [activeTab, setActiveTab] = useState<'timesheet' | 'leave'>('timesheet');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [showLeaveForm, setShowLeaveForm] = useState(false);
  
//   // Timesheet status tracking
//   const [timesheetStatus, setTimesheetStatus] = useState<TimesheetStatus>({
//     status: 'draft'
//   });
  
//   // Leave form state
//   const [leaveForm, setLeaveForm] = useState({
//     leaveType: '',
//     startDate: '',
//     endDate: '',
//     reason: '',
//   });

//   // Mock leave requests data
//   const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
//     {
//       id: '1',
//       leaveType: 'Annual Leave',
//       startDate: '2025-09-01',
//       endDate: '2025-09-03',
//       reason: 'Family vacation',
//       status: 'approved',
//       totalDays: 3,
//       appliedDate: '2025-08-15',
//     },
//     {
//       id: '2',
//       leaveType: 'Sick Leave',
//       startDate: '2025-08-20',
//       endDate: '2025-08-20',
//       reason: 'Medical appointment',
//       status: 'pending',
//       totalDays: 1,
//       appliedDate: '2025-08-18',
//     },
//   ]);

//   const leaveTypes = [
//     'Annual Leave',
//     'Sick Leave',
//     'Personal Leave',
//     'Maternity Leave',
//     'Emergency Leave',
//   ];
  
//   // Mock projects data
//   const [projects] = useState<Project[]>([
//     { 
//       id: '1', 
//       name: 'Website Redesign', 
//       subProjects: [
//         { id: '1-1', name: 'Frontend Development' },
//         { id: '1-2', name: 'Backend Development' },
//         { id: '1-3', name: 'UI/UX Design' }
//       ]
//     },
//     { 
//       id: '2', 
//       name: 'Mobile App Development', 
//       subProjects: [
//         { id: '2-1', name: 'iOS Development' },
//         { id: '2-2', name: 'Android Development' },
//         { id: '2-3', name: 'Testing & QA' }
//       ]
//     },
//     { 
//       id: '3', 
//       name: 'Internal Tools', 
//       subProjects: [
//         { id: '3-1', name: 'Dashboard Development' },
//         { id: '3-2', name: 'API Development' },
//         { id: '3-3', name: 'Documentation' }
//       ]
//     },
//     { 
//       id: '4', 
//       name: 'Marketing Campaign', 
//       subProjects: [
//         { id: '4-1', name: 'Content Creation' },
//         { id: '4-2', name: 'SEO Optimization' },
//         { id: '4-3', name: 'Social Media' }
//       ]
//     },
//   ]);

//   const [timesheetEntries, setTimesheetEntries] = useState<TimesheetEntry[]>([
//     {
//       id: '1',
//       projectId: '',
//       projectName: '',
//       subProjectId: '',
//       subProjectName: '',
//       billable: true,
//       hours: {
//         monday: '0.00',
//         tuesday: '0.00',
//         wednesday: '0.00',
//         thursday: '0.00',
//         friday: '0.00',
//         saturday: '0.00',
//         sunday: '0.00',
//       },
//       total: 0,
//       comment: '',
//     },
//   ]);

//   const weekDays = [
//     { key: 'monday', label: 'Mon', date: '8/17' },
//     { key: 'tuesday', label: 'Tue', date: '8/18' },
//     { key: 'wednesday', label: 'Wed', date: '8/19' },
//     { key: 'thursday', label: 'Thu', date: '8/20' },
//     { key: 'friday', label: 'Fri', date: '8/21' },
//     { key: 'saturday', label: 'Sat', date: '8/22' },
//     { key: 'sunday', label: 'Sun', date: '8/23' },
//   ];

//   // Check if timesheet is editable
//   const isTimesheetEditable = timesheetStatus.status === 'draft';

//   // Get status display info
//   const getStatusInfo = (status: string) => {
//     switch (status) {
//       case 'draft':
//         return { color: 'text-gray-600 bg-gray-50', icon: null, label: 'Draft' };
//       case 'submitted':
//         return { color: 'text-blue-600 bg-blue-50', icon: <Send className="w-4 h-4" />, label: 'Submitted for Approval' };
//       case 'approved':
//         return { color: 'text-green-600 bg-green-50', icon: <CheckCircle className="w-4 h-4" />, label: 'Approved' };
//       case 'rejected':
//         return { color: 'text-red-600 bg-red-50', icon: <Lock className="w-4 h-4" />, label: 'Rejected' };
//       default:
//         return { color: 'text-gray-600 bg-gray-50', icon: null, label: 'Draft' };
//     }
//   };

//   // Calculate total days between two dates
//   const calculateLeaveDays = (startDate: string, endDate: string): number => {
//     if (!startDate || !endDate) return 0;
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const diffTime = Math.abs(end.getTime() - start.getTime());
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
//     return diffDays;
//   };

//   // Handle leave form submission
//   const submitLeaveRequest = async () => {
//     if (!leaveForm.leaveType || !leaveForm.startDate || !leaveForm.endDate || !leaveForm.reason) {
//       toast.error('Please fill in all required fields');
//       return;
//     }

//     if (new Date(leaveForm.startDate) > new Date(leaveForm.endDate)) {
//       toast.error('End date must be after start date');
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const totalDays = calculateLeaveDays(leaveForm.startDate, leaveForm.endDate);
      
//       const newLeaveRequest: LeaveRequest = {
//         id: Date.now().toString(),
//         leaveType: leaveForm.leaveType,
//         startDate: leaveForm.startDate,
//         endDate: leaveForm.endDate,
//         reason: leaveForm.reason,
//         status: 'pending',
//         totalDays,
//         appliedDate: new Date().toISOString().split('T')[0],
//       };

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       setLeaveRequests(prev => [newLeaveRequest, ...prev]);
//       setLeaveForm({ leaveType: '', startDate: '', endDate: '', reason: '' });
//       setShowLeaveForm(false);
      
//       toast.success(`Leave request submitted successfully! (${totalDays} days)`);
//     } catch (error) {
//       toast.error('Failed to submit leave request');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Calculate total hours for an entry
//   const calculateTotal = (hours: TimesheetEntry['hours']): number => {
//     return Object.values(hours).reduce((sum, hour) => {
//       const numHour = parseFloat(hour) || 0;
//       return sum + numHour;
//     }, 0);
//   };

//   // Calculate grand total
//   const calculateGrandTotal = (): number => {
//     return timesheetEntries.reduce((sum, entry) => sum + entry.total, 0);
//   };

//   // Update timesheet entry
//   const updateEntry = (entryId: string, field: keyof TimesheetEntry, value: string | boolean | TimesheetEntry['hours']) => {
//     if (!isTimesheetEditable) {
//       toast.error('Timesheet has been submitted and cannot be edited');
//       return;
//     }

//     setTimesheetEntries(prev => prev.map(entry => {
//       if (entry.id === entryId) {
//         const updatedEntry = { ...entry, [field]: value };
        
//         if (field === 'hours') {
//           updatedEntry.total = calculateTotal(value as TimesheetEntry['hours']);
//         }
        
//         if (field === 'projectId') {
//           const selectedProject = projects.find(p => p.id === value);
//           updatedEntry.projectName = selectedProject?.name || '';
//           updatedEntry.subProjectId = '';
//           updatedEntry.subProjectName = '';
//         }
        
//         if (field === 'subProjectId') {
//           const selectedProject = projects.find(p => p.id === entry.projectId);
//           const selectedSubProject = selectedProject?.subProjects.find(sp => sp.id === value);
//           updatedEntry.subProjectName = selectedSubProject?.name || '';
//         }
        
//         return updatedEntry;
//       }
//       return entry;
//     }));
//   };

//   // Update individual hour
//   const updateHour = (entryId: string, day: string, value: string) => {
//     if (!isTimesheetEditable) {
//       toast.error('Timesheet has been submitted and cannot be edited');
//       return;
//     }

//     const numValue = parseFloat(value);
//     if (value !== '' && (isNaN(numValue) || numValue < 0 || numValue > 24)) {
//       toast.error('Please enter a valid hour value (0-24)');
//       return;
//     }

//     setTimesheetEntries(prev => prev.map(entry => {
//       if (entry.id === entryId) {
//         const updatedHours = { ...entry.hours, [day]: value };
//         const updatedEntry = { 
//           ...entry, 
//           hours: updatedHours,
//           total: calculateTotal(updatedHours)
//         };
//         return updatedEntry;
//       }
//       return entry;
//     }));
//   };

//   // Add new row
//   const addNewRow = () => {
//     if (!isTimesheetEditable) {
//       toast.error('Timesheet has been submitted and cannot be edited');
//       return;
//     }

//     const newEntry: TimesheetEntry = {
//       id: Date.now().toString(),
//       projectId: '',
//       projectName: '',
//       subProjectId: '',
//       subProjectName: '',
//       billable: true,
//       hours: {
//         monday: '0.00',
//         tuesday: '0.00',
//         wednesday: '0.00',
//         thursday: '0.00',
//         friday: '0.00',
//         saturday: '0.00',
//         sunday: '0.00',
//       },
//       total: 0,
//       comment: '',
//     };
//     setTimesheetEntries([...timesheetEntries, newEntry]);
//   };

//   // Remove row
//   const removeRow = (entryId: string) => {
//     if (!isTimesheetEditable) {
//       toast.error('Timesheet has been submitted and cannot be edited');
//       return;
//     }

//     if (timesheetEntries.length > 1) {
//       setTimesheetEntries(prev => prev.filter(entry => entry.id !== entryId));
//     } else {
//       toast.error('At least one timesheet entry is required');
//     }
//   };

//   // Save draft
// const saveDraft = async () => {
//   if (!isTimesheetEditable) {
//     toast.error('Timesheet has been submitted and cannot be edited');
//     return;
//   }

//   setIsSaving(true);

//   try {
//     const validEntries = timesheetEntries.filter(
//       (entry) => entry.projectId && entry.total > 0
//     );

//     if (validEntries.length === 0) {
//       toast.error('Please add at least one entry with project and hours');
//       return;
//     }

//     const startDate = '2025-09-16'; // Replace with dynamic value if needed
//     const endDate = '2025-09-22';   // Replace with dynamic value if needed

//     // const token = 'YOUR_TOKEN_HERE'; // Replace with real token or fetch from state

//     for (const entry of validEntries) {
//       const commonPayload = {
//         monday: parseFloat(entry.hours.monday) || 0,
//         tuesday: parseFloat(entry.hours.tuesday) || 0,
//         wednesday: parseFloat(entry.hours.wednesday) || 0,
//         thursday: parseFloat(entry.hours.thursday) || 0,
//         friday: parseFloat(entry.hours.friday) || 0,
//         saturday: parseFloat(entry.hours.saturday) || 0,
//         sunday: parseFloat(entry.hours.sunday) || 0,
//         notes: entry.comment || '',
//         total_hours_worked: entry.total || 0,
//       };

//       let url = '';
//       let method = '';
//       let payload = {};
//       const token = access_token //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTQzNjI2Mi1mYWVkLTQ5MjctYmY3Yy04NDlhNDQ2Nzg0OGEiLCJ1c2VybmFtZSI6IkVtcDA3IiwiZW1haWwiOiJFbXAwN0B5b3BtYWlsLmNvbSIsImlzX2FkbWluIjowLCJyb2xlcyI6bnVsbCwiZXhwIjoxNzU5NDg5NzE5LCJ0eXBlIjoiYWNjZXNzIn0.RhfubcF60__Rk_AA6lcnO2l81Y0Gq4dQ1XdlgPLnee8';
      
//       const response_data = await fetch('http://localhost:8000/api/v1/timesheet/entries', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         if (!response_data.ok) {
//           throw new Error(`HTTP error! Status: ${response_data.status}`);
//         }

//         const data = await response_data.json();

//         console.log("Fetched data:", data);

//         // Example: if the response is an array of entries
//         // and each entry has a `timesheet_id` field:
//         const timesheetIds = data.entries.map((entry: any) => entry.timesheet_id);

//         console.log("All fetched timesheet_ids:", timesheetIds);

//         // If you want just the first timesheet_id:


    
//       const timesheet_id = timesheetIds[0]; // Use the fetched timesheet_id here

//       console.log("Fetched timesheet_id:", timesheet_id);
      

//       if (timesheet_id) {
//         // UPDATE existing timesheet
//         url = `http://localhost:8000/api/v1/timesheet/entries/${timesheet_id}`;
//         method = 'PUT';
//         payload = commonPayload;

//         console.log("here hits this request")
//       } else {
//         // CREATE new timesheet
//         url = 'http://localhost:8000/api/v1/timesheet/';
//         method = 'POST';
//         payload = {
//           ...commonPayload,
//           projects_assignments_id: "5e230bfc-f2f1-49f2-848e-9c4ad6df0e04", // Replace with actual project assignment ID
//           bill_code: 'DEV001', // Replace or fetch dynamically if needed
//           start_date: startDate,
//           end_date: endDate,
//         };
//       }

//       const response = await fetch(url, {
//         method: method,
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error(`Error during ${method} for ${entry.projectName}:`, errorData);
//         toast.error(`${method === 'POST' ? 'Create' : 'Update'} failed for ${entry.projectName}`);
//         continue;
//       }
//     }

//     toast.success('Timesheet saved successfully!');
//   } catch (error) {
//     console.error('Unexpected error saving timesheet:', error);
//     toast.error('Unexpected error occurred while saving timesheet');
//   }
//   finally {
//     setIsSaving(false);
//   }
// };

//   //   if (validEntries.length === 0) {
//   //     toast.error('Please add at least one entry with project and hours');
//   //     return;
//   //   }

//   //   const startDate = '2025-09-16'; // Replace with actual value from your state
//   //   const endDate = '2025-09-22';   // Replace with actual value from your state
//   //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTQzNjI2Mi1mYWVkLTQ5MjctYmY3Yy04NDlhNDQ2Nzg0OGEiLCJ1c2VybmFtZSI6IkVtcDA3IiwiZW1haWwiOiJFbXAwN0B5b3BtYWlsLmNvbSIsImlzX2FkbWluIjowLCJyb2xlcyI6IkVtcGxveWVlIiwiZXhwIjoxNzU4NjkwMjU3LCJ0eXBlIjoiYWNjZXNzIn0.A39fxoDm4ES7dT1Xfz_j_MCVnj7i3j17gg38QWAv0Rg';

//   //   for (const entry of validEntries) {
//   //     const payload = {
//   //       projects_assignments_id: "5e230bfc-f2f1-49f2-848e-9c4ad6df0e04",
//   //       bill_code: 'DEV001', // Replace or fetch dynamically if needed
//   //       start_date: startDate,
//   //       end_date: endDate,
//   //       monday: parseFloat(entry.hours.monday) || 0,
//   //       tuesday: parseFloat(entry.hours.tuesday) || 0,
//   //       wednesday: parseFloat(entry.hours.wednesday) || 0,
//   //       thursday: parseFloat(entry.hours.thursday) || 0,
//   //       friday: parseFloat(entry.hours.friday) || 0,
//   //       saturday: parseFloat(entry.hours.saturday) || 0,
//   //       sunday: parseFloat(entry.hours.sunday) || 0,
//   //       notes: entry.comment || '',
//   //     };

//   //     await fetch('http://127.0.0.1:8000/api/v1/timesheet/', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         'Authorization': `Bearer ${token}`
//   //         // Add Authorization header here if needed
//   //       },
//   //       body: JSON.stringify(payload),
        
//   //     });
//   //   }

//   //   toast.success('Timesheet saved as draft successfully!');
//   // } catch (error) {
//   //   console.error('Error saving draft:', error);
//   //   toast.error('Failed to save timesheet');
//   // } finally {
//   //   setIsSaving(false);
//   // }

// //create timesheet

// async function create_timesheet(){
//   try {
//     const validEntries = timesheetEntries.filter(
//       (entry) => entry.projectId && entry.total > 0
//     );

//     if (validEntries.length === 0) {
//       toast.error('Please add at least one entry with project and hours');
//       return;
//     }

//     const startDate = '2025-09-16'; // Replace with actual value from your state
//     const endDate = '2025-09-22';   // Replace with actual value from your state
//     const token = access_token //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTQzNjI2Mi1mYWVkLTQ5MjctYmY3Yy04NDlhNDQ2Nzg0OGEiLCJ1c2VybmFtZSI6IkVtcDA3IiwiZW1haWwiOiJFbXAwN0B5b3BtYWlsLmNvbSIsImlzX2FkbWluIjowLCJyb2xlcyI6bnVsbCwiZXhwIjoxNzU5NDg5NzE5LCJ0eXBlIjoiYWNjZXNzIn0.RhfubcF60__Rk_AA6lcnO2l81Y0Gq4dQ1XdlgPLnee8';

//     for (const entry of validEntries) {
//       const payload = {
//         projects_assignments_id: "5e230bfc-f2f1-49f2-848e-9c4ad6df0e04",
//         bill_code: 'DEV001', // Replace or fetch dynamically if needed
//         start_date: startDate,
//         end_date: endDate,
//         monday: parseFloat(entry.hours.monday) || 0,
//         tuesday: parseFloat(entry.hours.tuesday) || 0,
//         wednesday: parseFloat(entry.hours.wednesday) || 0,
//         thursday: parseFloat(entry.hours.thursday) || 0,
//         friday: parseFloat(entry.hours.friday) || 0,
//         saturday: parseFloat(entry.hours.saturday) || 0,
//         sunday: parseFloat(entry.hours.sunday) || 0,
//         notes: entry.comment || '',
//       };

//       const response = await fetch('http://127.0.0.1:8000/api/v1/timesheet/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Server error:', errorData);
//         toast.error(`Failed to submit entry for project ${entry.projectName}`);
//         continue; // Move to next entry
//       }
//     }

//     toast.success('Timesheet submitted successfully!');
//   } catch (error) {
//     console.error('Error submitting timesheet:', error);
//     toast.error('An unexpected error occurred while submitting timesheet');
//   }
// }


  

//   // Submit timesheet
// const submitTimesheet = async () => {
//   if (!isTimesheetEditable) {
//     toast.error('Timesheet has already been submitted');
//     return;
//   }
//   setIsSubmitting(true);
//   try {
//     const validEntries = timesheetEntries.filter(
//       (entry) => entry.projectId && entry.total > 0
//     );

//     if (validEntries.length === 0) {
//       toast.error('Please add at least one entry with project and hours');
//       return;
//     }

//     const totalHours = calculateGrandTotal();
//     if (totalHours === 0) {
//       toast.error('Please log at least some hours before submitting');
//       return;
//     }
    
    

//     const startDate = '2025-09-16'; // Replace with actual value from your state
//     const endDate = '2025-09-22';   // Replace with actual value from your state
//     const token = access_token //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMTQzNjI2Mi1mYWVkLTQ5MjctYmY3Yy04NDlhNDQ2Nzg0OGEiLCJ1c2VybmFtZSI6IkVtcDA3IiwiZW1haWwiOiJFbXAwN0B5b3BtYWlsLmNvbSIsImlzX2FkbWluIjowLCJyb2xlcyI6bnVsbCwiZXhwIjoxNzU5NDg5NzE5LCJ0eXBlIjoiYWNjZXNzIn0.RhfubcF60__Rk_AA6lcnO2l81Y0Gq4dQ1XdlgPLnee8';

//     for (const entry of validEntries) {
//       const payload = {
//         projects_assignments_id: "5e230bfc-f2f1-49f2-848e-9c4ad6df0e04",
//         bill_code: 'DEV001', // Replace or fetch dynamically if needed
//         start_date: startDate,
//         end_date: endDate,
//         monday: parseFloat(entry.hours.monday) || 0,
//         tuesday: parseFloat(entry.hours.tuesday) || 0,
//         wednesday: parseFloat(entry.hours.wednesday) || 0,
//         thursday: parseFloat(entry.hours.thursday) || 0,
//         friday: parseFloat(entry.hours.friday) || 0,
//         saturday: parseFloat(entry.hours.saturday) || 0,
//         sunday: parseFloat(entry.hours.sunday) || 0,
//         notes: entry.comment || '',
//         status: 'submitted',
//       };

//       const response = await fetch('http://127.0.0.1:8000/api/v1/timesheet/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Server error:', errorData);
//         toast.error(`Failed to submit entry for project ${entry.projectName}`);
//         continue; // Move to next entry
//       }
//     }

//     toast.success('Timesheet submitted successfully!');
    
//   } catch (error) {
//     console.error('Error submitting timesheet:', error);
//     toast.error('An unexpected error occurred while submitting timesheet');
//   }
//   finally {
//     setIsSubmitting(false);
//   }
// }

//   //   const invalidEntries = timesheetEntries.filter(entry => 
//   //     !entry.projectId || entry.total === 0
//   //   );
    
//   //   if (invalidEntries.length > 0) {
//   //     toast.error('Please complete all entries with project selection and hours');
//   //     return;
//   //   }

//   //   const totalHours = calculateGrandTotal();
//   //   if (totalHours === 0) {
//   //     toast.error('Please log at least some hours before submitting');
//   //     return;
//   //   }

//   //   await new Promise(resolve => setTimeout(resolve, 1500));
    
//   //   // Update timesheet status to submitted
//   //   setTimesheetStatus({
//   //     status: 'submitted',
//   //     submittedAt: new Date().toISOString(),
//   //   });
    
//   //   toast.success(`Timesheet submitted successfully! Total hours: ${totalHours.toFixed(2)}. Your timesheet is now locked for editing.`);
    
//   // } catch (error) {
//   //   toast.error('Failed to submit timesheet');
//   // } finally {
//   //   setIsSubmitting(false);
//   // }
//   // 

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'approved': return 'text-green-600 bg-green-50';
//       case 'rejected': return 'text-red-600 bg-red-50';
//       case 'pending': return 'text-orange-600 bg-orange-50';
//       default: return 'text-gray-600 bg-gray-50';
//     }
//   };

//   const statusInfo = getStatusInfo(timesheetStatus.status);

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <Clock className="w-6 h-6 text-teal-600" />
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">Timesheet Portal</h1>
//             <p className="text-gray-600">Track time and manage leave requests</p>
//           </div>
//         </div>
//         <Button 
//           className="bg-teal-600 hover:bg-teal-700 text-white"
//           onClick={() => {
//             setActiveTab('leave');
//             setShowLeaveForm(true);
//           }}
//         >
//           <Calendar className="w-4 h-4 mr-2" />
//           Request Leave
//         </Button>
//       </div>

//       {/* Navigation Tabs - Only My Timesheet and My Leave for employees */}
//       <div className="flex space-x-6 border-b border-gray-200">
//         <button 
//           onClick={() => setActiveTab('timesheet')}
//           className={`flex items-center space-x-2 pb-3 border-b-2 ${
//             activeTab === 'timesheet' 
//               ? 'border-teal-600 text-teal-600' 
//               : 'border-transparent text-gray-600 hover:text-gray-900'
//           }`}
//         >
//           <Clock className="w-4 h-4" />
//           <span className="font-medium">My Timesheet</span>
//         </button>
//         <button 
//           onClick={() => setActiveTab('leave')}
//           className={`flex items-center space-x-2 pb-3 border-b-2 ${
//             activeTab === 'leave' 
//               ? 'border-teal-600 text-teal-600' 
//               : 'border-transparent text-gray-600 hover:text-gray-900'
//           }`}
//         >
//           <Calendar className="w-4 h-4" />
//           <span className="font-medium">My Leave</span>
//         </button>
//       </div>

//       {/* Timesheet Tab Content */}
//       {activeTab === 'timesheet' && (
//         <Card>
//           <CardHeader className="pb-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <Calendar className="w-5 h-5 text-gray-600" />
//                 <CardTitle className="text-lg font-semibold">
//                   Week of {selectedWeek}
//                 </CardTitle>
//                 {/* Status Badge */}
//                 <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
//                   {statusInfo.icon}
//                   <span>{statusInfo.label}</span>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-600">
//                   <Clock className="w-4 h-4" />
//                   <span>{calculateGrandTotal().toFixed(2)}h total</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Button variant="outline" size="sm" disabled={!isTimesheetEditable}>
//                     <ChevronLeft className="w-4 h-4" />
//                   </Button>
//                   <Button variant="outline" size="sm" disabled={!isTimesheetEditable}>
//                     <ChevronRight className="w-4 h-4" />
//                   </Button>
//                 </div>
//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   onClick={saveDraft}
//                   disabled={isSaving || !isTimesheetEditable}
//                 >
//                   <Save className="w-4 h-4 mr-2" />
//                   {isSaving ? 'Saving...' : 'Save Draft'}
//                 </Button>
//                 <Button 
//                   className="bg-blue-600 hover:bg-blue-700 text-white" 
//                   size="sm"
//                   onClick={submitTimesheet}
//                   disabled={isSubmitting || !isTimesheetEditable}
//                 >
//                   <Send className="w-4 h-4 mr-2" />
//                   {isSubmitting ? 'Submitting...' : 'Submit'}
//                 </Button>
//               </div>
//             </div>
            
//             {/* Read-only notice */}
//             {!isTimesheetEditable && (
//               <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                 <div className="flex items-center space-x-2 text-blue-800">
//                   <Lock className="w-4 h-4" />
//                   <span className="text-sm font-medium">
//                     This timesheet has been submitted for approval and is now read-only.
//                     {timesheetStatus.submittedAt && (
//                       <span className="ml-2 text-blue-600">
//                         Submitted on {new Date(timesheetStatus.submittedAt).toLocaleDateString()}
//                       </span>
//                     )}
//                   </span>
//                 </div>
//               </div>
//             )}
//           </CardHeader>

//           <CardContent>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-gray-200">
//                     <th className="text-left py-3 px-2 font-medium text-gray-700 w-40">Project</th>
//                     <th className="text-left py-3 px-2 font-medium text-gray-700 w-40">Sub Project</th>
//                     <th className="text-left py-3 px-2 font-medium text-gray-700 w-20">Billable</th>
//                     {weekDays.map((day) => (
//                       <th key={day.key} className="text-center py-3 px-2 font-medium text-gray-700 w-24">
//                         <div>{day.label}</div>
//                         <div className="text-xs text-gray-500">{day.date}</div>
//                       </th>
//                     ))}
//                     <th className="text-center py-3 px-2 font-medium text-gray-700 w-20">Total</th>
//                     <th className="text-left py-3 px-2 font-medium text-gray-700 w-40">Comment</th>
//                     {isTimesheetEditable && (
//                       <th className="text-center py-3 px-2 font-medium text-gray-700 w-16">Actions</th>
//                     )}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {timesheetEntries.map((entry) => {
//                     const selectedProject = projects.find(p => p.id === entry.projectId);
                    
//                     return (
//                       <tr key={entry.id} className="border-b border-gray-100">
//                         <td className="py-3 px-2">
//                           <Select
//                             value={entry.projectId}
//                             onValueChange={(value) => updateEntry(entry.id, 'projectId', value)}
//                             disabled={!isTimesheetEditable}
//                           >
//                             <SelectTrigger className={`w-full ${!isTimesheetEditable ? 'bg-gray-50 cursor-not-allowed' : ''}`}>
//                               <SelectValue placeholder="Select project..." />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {projects.map((project) => (
//                                 <SelectItem key={project.id} value={project.id}>
//                                   {project.name}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </td>
//                         <td className="py-3 px-2">
//                           <Select
//                             value={entry.subProjectId}
//                             onValueChange={(value) => updateEntry(entry.id, 'subProjectId', value)}
//                             disabled={!entry.projectId || !isTimesheetEditable}
//                           >
//                             <SelectTrigger className={`w-full ${!isTimesheetEditable ? 'bg-gray-50 cursor-not-allowed' : ''}`}>
//                               <SelectValue placeholder="Select sub project..." />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {selectedProject?.subProjects.map((subProject) => (
//                                 <SelectItem key={subProject.id} value={subProject.id}>
//                                   {subProject.name}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </td>
//                         <td className="py-3 px-2 text-center">
//                           <Switch 
//                             checked={entry.billable}
//                             onCheckedChange={(checked) => updateEntry(entry.id, 'billable', checked)}
//                             disabled={!isTimesheetEditable}
//                           />
//                         </td>
//                         {weekDays.map((day) => (
//                           <td key={day.key} className="py-3 px-2">
//                             <Input
//                               type="number"
//                               step="0.25"
//                               min="0"
//                               max="24"
//                               className={`w-full text-center ${
//                                 isTimesheetEditable 
//                                   ? 'bg-teal-50 border-teal-200 text-teal-700' 
//                                   : 'bg-gray-50 border-gray-200 text-gray-600 cursor-not-allowed'
//                               }`}
//                               value={entry.hours[day.key as keyof typeof entry.hours]}
//                               onChange={(e) => updateHour(entry.id, day.key, e.target.value)}
//                               placeholder="0.00"
//                               disabled={!isTimesheetEditable}
//                             />
//                           </td>
//                         ))}
//                         <td className="py-3 px-2">
//                           <Input
//                             type="text"
//                             className="w-full text-center bg-gray-50 font-medium"
//                             value={entry.total.toFixed(2)}
//                             readOnly
//                           />
//                         </td>
//                         <td className="py-3 px-2">
//                           <Input
//                             type="text"
//                             className={`w-full ${
//                               isTimesheetEditable 
//                                 ? '' 
//                                 : 'bg-gray-50 border-gray-200 text-gray-600 cursor-not-allowed'
//                             }`}
//                             placeholder="Work description"
//                             value={entry.comment}
//                             onChange={(e) => updateEntry(entry.id, 'comment', e.target.value)}
//                             disabled={!isTimesheetEditable}
//                           />
//                         </td>
//                         {isTimesheetEditable && (
//                           <td className="py-3 px-2 text-center">
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => removeRow(entry.id)}
//                               className="text-red-600 hover:text-red-700 hover:bg-red-50"
//                             >
//                               <Trash2 className="w-4 h-4" />
//                             </Button>
//                           </td>
//                         )}
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             <div className="mt-4 flex justify-between items-center">
//               {isTimesheetEditable && (
//                 <Button
//                   variant="outline"
//                   onClick={addNewRow}
//                   className="flex items-center space-x-2"
//                 >
//                   <Plus className="w-4 h-4" />
//                   <span>Add Row</span>
//                 </Button>
//               )}
              
//               <div className="text-lg font-semibold text-gray-900 ml-auto">
//                 Grand Total: {calculateGrandTotal().toFixed(2)} hours
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {/* Leave Tab Content */}
//       {activeTab === 'leave' && (
//         <div className="space-y-6">
//           {/* Leave Request Form */}
//           {showLeaveForm && (
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2">
//                   <Calendar className="w-5 h-5 text-teal-600" />
//                   <span>Request Leave</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Leave Type *
//                     </label>
//                     <Select
//                       value={leaveForm.leaveType}
//                       onValueChange={(value) => setLeaveForm(prev => ({ ...prev, leaveType: value }))}
//                     >
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select leave type..." />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {leaveTypes.map((type) => (
//                           <SelectItem key={type} value={type}>
//                             {type}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Total Days: {calculateLeaveDays(leaveForm.startDate, leaveForm.endDate)}
//                     </label>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Start Date *
//                     </label>
//                     <Input
//                       type="date"
//                       value={leaveForm.startDate}
//                       onChange={(e) => setLeaveForm(prev => ({ ...prev, startDate: e.target.value }))}
//                       min={new Date().toISOString().split('T')[0]}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       End Date *
//                     </label>
//                     <Input
//                       type="date"
//                       value={leaveForm.endDate}
//                       onChange={(e) => setLeaveForm(prev => ({ ...prev, endDate: e.target.value }))}
//                       min={leaveForm.startDate || new Date().toISOString().split('T')[0]}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Reason *
//                   </label>
//                   <Textarea
//                     placeholder="Please provide a reason for your leave request..."
//                     value={leaveForm.reason}
//                     onChange={(e) => setLeaveForm(prev => ({ ...prev, reason: e.target.value }))}
//                     rows={3}
//                   />
//                 </div>

//                 <div className="flex justify-end space-x-3">
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setShowLeaveForm(false);
//                       setLeaveForm({ leaveType: '', startDate: '', endDate: '', reason: '' });
//                     }}
//                   >
//                     Cancel
//                   </Button>
//                   <Button
//                     onClick={submitLeaveRequest}
//                     disabled={isSubmitting}
//                     className="bg-teal-600 hover:bg-teal-700 text-white"
//                   >
//                     {isSubmitting ? 'Submitting...' : 'Submit Request'}
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           )}

//           {/* Leave Requests List */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle className="flex items-center space-x-2">
//                   <User className="w-5 h-5 text-gray-600" />
//                   <span>My Leave Requests</span>
//                 </CardTitle>
//                 {!showLeaveForm && (
//                   <Button
//                     onClick={() => setShowLeaveForm(true)}
//                     className="bg-teal-600 hover:bg-teal-700 text-white"
//                   >
//                     <Plus className="w-4 h-4 mr-2" />
//                     New Request
//                   </Button>
//                 )}
//               </div>
//             </CardHeader>
//             <CardContent>
//               {leaveRequests.length === 0 ? (
//                 <div className="text-center py-8 text-gray-500">
//                   <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
//                   <p>No leave requests found</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {leaveRequests.map((request) => (
//                     <div key={request.id} className="border border-gray-200 rounded-lg p-4">
//                       <div className="flex items-center justify-between mb-3">
//                         <div className="flex items-center space-x-3">
//                           <h3 className="font-semibold text-gray-900">{request.leaveType}</h3>
//                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
//                             {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
//                           </span>
//                         </div>
//                         <div className="text-sm text-gray-600">
//                           Applied: {new Date(request.appliedDate).toLocaleDateString()}
//                         </div>
//                       </div>
                      
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                         <div>
//                           <span className="font-medium text-gray-700">Duration:</span>
//                           <p className="text-gray-600">
//                             {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
//                           </p>
//                         </div>
//                         <div>
//                           <span className="font-medium text-gray-700">Total Days:</span>
//                           <p className="text-gray-600">{request.totalDays} days</p>
//                         </div>
//                         <div>
//                           <span className="font-medium text-gray-700">Reason:</span>
//                           <p className="text-gray-600">{request.reason}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TimesheetPortal;