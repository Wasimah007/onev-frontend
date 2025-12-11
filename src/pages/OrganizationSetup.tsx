// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Layout from '@/components/Layout';
// // import UserManagement from '@/components/UserManagement';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Switch } from '@/components/ui/switch';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { toast } from 'sonner';
// // import { organizationApi, Organization } from '@/services/api';
// import { ArrowLeft, Building2, Save } from 'lucide-react';

// const OrganizationSetup: React.FC = () => {
//   const navigate = useNavigate();
//   const [organization, setOrganization] = useState<Organization | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     logo_url: '',
//     address: '',
//     contact_number: '',
//     email: '',
//     is_active: true
//   });

//   useEffect(() => {
//     loadOrganization();
//   }, []);

//   const loadOrganization = async () => {
//     try {
//       setLoading(true);
//       const data = await organizationApi.getOrganization();
//       if (data) {
//         setOrganization(data);
//         setFormData({
//           name: data.name,
//           logo_url: data.logo_url || '',
//           address: data.address,
//           contact_number: data.contact_number,
//           email: data.email,
//           is_active: data.is_active
//         });
//       }
//     } catch (error) {
//       console.error('Failed to load organization:', error);
//       toast.error('Failed to load organization data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!formData.name || !formData.email || !formData.address || !formData.contact_number) {
//       toast.error('Please fill in all required fields');
//       return;
//     }

//     try {
//       setSaving(true);
      
//       const result = await organizationApi.createOrganization(formData);
      
//       setOrganization(result);
//       toast.success(organization ? 'Organization updated successfully' : 'Organization created successfully');
      
//     } catch (error) {
//       console.error('Failed to save organization:', error);
//       const errorMessage = error instanceof Error ? error.message : 'Failed to save organization';
//       toast.error(errorMessage);
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleInputChange = (field: string, value: string | boolean) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   if (loading) {
//     return (
//       <Layout>
//         <div className="flex justify-center items-center min-h-[400px]">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center space-x-4 mb-8">
//           <Button
//             variant="ghost"
//             onClick={() => navigate('/')}
//             className="flex items-center space-x-2"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             <span>Back to Dashboard</span>
//           </Button>
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Organization Setup</h1>
//             <p className="text-gray-600 mt-2">
//               Manage your organization settings and users
//             </p>
//           </div>
//         </div>

//         <div className="space-y-6">
//           {/* Organization Information */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2">
//                     <Building2 className="h-5 w-5" />
//                     <span>Organization Information</span>
//                   </CardTitle>
//                   <CardDescription>
//                     {organization ? 'Update your organization details below.' : 'Enter your organization details to get started.'}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="name">Organization Name *</Label>
//                         <Input
//                           id="name"
//                           value={formData.name}
//                           onChange={(e) => handleInputChange('name', e.target.value)}
//                           placeholder="Enter organization name"
//                           required
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="email">Email Address *</Label>
//                         <Input
//                           id="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={(e) => handleInputChange('email', e.target.value)}
//                           placeholder="contact@company.com"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="address">Address *</Label>
//                       <Textarea
//                         id="address"
//                         value={formData.address}
//                         onChange={(e) => handleInputChange('address', e.target.value)}
//                         placeholder="Enter complete address"
//                         rows={3}
//                         required
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="contact_number">Contact Number *</Label>
//                         <Input
//                           id="contact_number"
//                           value={formData.contact_number}
//                           onChange={(e) => handleInputChange('contact_number', e.target.value)}
//                           placeholder="+1-555-0123"
//                           required
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="logo_url">Logo URL (Optional)</Label>
//                         <Input
//                           id="logo_url"
//                           type="url"
//                           value={formData.logo_url}
//                           onChange={(e) => handleInputChange('logo_url', e.target.value)}
//                           placeholder="https://example.com/logo.png"
//                         />
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-3">
//                       <Switch
//                         id="is_active"
//                         checked={formData.is_active}
//                         onCheckedChange={(checked) => handleInputChange('is_active', checked)}
//                       />
//                       <Label htmlFor="is_active" className="text-sm font-medium">
//                         Organization is active
//                       </Label>
//                     </div>

//                     <div className="flex justify-end space-x-3">
//                       <Button
//                         type="button"
//                         variant="outline"
//                         onClick={() => navigate('/')}
//                       >
//                         Cancel
//                       </Button>
//                       <Button
//                         type="submit"
//                         disabled={saving}
//                         className="bg-blue-600 hover:bg-blue-700"
//                       >
//                         {saving ? (
//                           <>
//                             <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                             Saving...
//                           </>
//                         ) : (
//                           <>
//                             <Save className="h-4 w-4 mr-2" />
//                             {organization ? 'Update Organization' : 'Create Organization'}
//                           </>
//                         )}
//                       </Button>
//                     </div>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Organization Summary */}
//             <div>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Current Status</CardTitle>
//                   <CardDescription>
//                     Organization overview and status
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   {organization ? (
//                     <>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-medium">Status</span>
//                         <Badge variant={organization.is_active ? 'default' : 'secondary'}>
//                           {organization.is_active ? 'Active' : 'Inactive'}
//                         </Badge>
//                       </div>
//                       <div className="space-y-2">
//                         <span className="text-sm font-medium">Organization ID</span>
//                         <p className="text-sm text-gray-600">#{organization.id}</p>
//                       </div>
//                       {organization.created_at && (
//                         <div className="space-y-2">
//                           <span className="text-sm font-medium">Created</span>
//                           <p className="text-sm text-gray-600">
//                             {new Date(organization.created_at).toLocaleDateString()}
//                           </p>
//                         </div>
//                       )}
//                       {organization.updated_at && (
//                         <div className="space-y-2">
//                           <span className="text-sm font-medium">Last Updated</span>
//                           <p className="text-sm text-gray-600">
//                             {new Date(organization.updated_at).toLocaleDateString()}
//                           </p>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <div className="text-center py-6">
//                       <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-3" />
//                       <p className="text-sm text-gray-600">
//                         No organization set up yet. Fill out the form to create your organization profile.
//                       </p>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* User Management Section */}
//           <UserManagement />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default OrganizationSetup;