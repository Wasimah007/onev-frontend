// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { loginUser } from '@/utils/auth';
// // import { Cloud } from 'lucide-react';

// // export default function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setError('');
// //     setLoading(true);

// //     try {
// //         // ✅ Prepare form-encoded data for FastAPI OAuth2PasswordRequestForm
// //         const formData = new URLSearchParams();
// //         formData.append('username', email);
// //         formData.append('password', password);

// //         const response = await fetch('http://127.0.0.1:8000/api/v1/auth/login', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/x-www-form-urlencoded',
// //         },
// //         body: formData.toString(),
// //         });

// //         const data = await response.json();

// //         if (!response.ok) {
// //         throw new Error(data.detail || 'Invalid credentials');
// //         }

// //         // ✅ Handle returned tokens from FastAPI
// //         const token = data.access_token || data.access || data.token;
// //         if (token) {
// //         loginUser(token); // store token in localStorage
// //         navigate('/admin-dashboard');
// //         } else {
// //         throw new Error('Invalid server response');
// //         }
// //     } catch (err: any) {
// //         setError(err.message || 'Login failed');
// //     } finally {
// //         setLoading(false);
// //     }
// //     };

// //   return (
// //     <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
// //       <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-12">
// //         <div className="text-center mb-8">
// //           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
// //           <p className="text-gray-600">Sign in to continue to your account.</p>
// //         </div>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="your@email.com"
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //             required
// //           />
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Enter your password"
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //             required
// //           />

// //           {error && (
// //             <p className="text-sm text-red-500 text-center mt-2">{error}</p>
// //           )}

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
// //           >
// //             {loading ? 'Logging in...' : 'Login'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState } from 'react';
// import { Cloud } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '@/utils/auth';
// import { toast } from 'sonner';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // ✅ Regular username/password login (FastAPI)
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const formData = new URLSearchParams();
//       formData.append('username', email);
//       formData.append('password', password);

//       const response = await fetch('http://127.0.0.1:8000/api/v1/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: formData.toString(),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || 'Invalid credentials');
//       }

//       const token = data.access_token || data.access || data.token;
//       if (token) {
//         loginUser(token);
//         toast.success('Login successful');
//         navigate('/admin-dashboard');
//       } else {
//         throw new Error('Invalid server response');
//       }
//     } catch (err: any) {
//       setError(err.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Azure AD login
//   const handleAzureLogin = () => {
//     // Redirect to your backend or Azure AD login endpoint
//     window.location.href = 'http://127.0.0.1:8000/api/v1/auth/azure/login';
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-12">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
//           <p className="text-gray-600">Sign in to continue to your account.</p>
//         </div>

//         {/* Azure Sign-in Button */}
//         <button
//           onClick={handleAzureLogin}
//           className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors mb-6"
//         >
//           <Cloud className="w-5 h-5 text-blue-500" />
//           <span className="font-medium text-gray-900">Sign in with Azure</span>
//         </button>

//         {/* Divider */}
//         <div className="relative mb-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-4 bg-white text-gray-500">Or continue with</span>
//           </div>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="your@email.com"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             required
//           />

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             required
//           />

//           {error && (
//             <p className="text-sm text-red-500 text-center mt-2">{error}</p>
//           )}

//           <div className="text-right">
//             <a href="#" className="text-sm text-blue-500 hover:text-blue-600 transition-colors">
//               Forgot your password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Cloud } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '@/utils/auth';
// import { toast } from 'sonner';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // ✅ Detect token from Azure redirect
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get('token');

//     if (token) {
//       loginUser(token);
//       toast.success('Azure login successful');
//       navigate('/admin-dashboard');
//     }
//   }, [navigate]);

//   // ✅ Normal JWT login
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const formData = new URLSearchParams();
//       formData.append('username', email);
//       formData.append('password', password);

//       const response = await fetch('http://127.0.0.1:8000/api/v1/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: formData.toString(),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || 'Invalid credentials');
//       }

//       const token = data.access_token || data.access || data.token;
//       if (token) {
//         loginUser(token);
//         toast.success('Login successful');
//         navigate('/admin-dashboard');
//       } else {
//         throw new Error('Invalid server response');
//       }
//     } catch (err: any) {
//       setError(err.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Azure Login redirect
//   const handleAzureLogin = () => {
//     window.location.href = 'http://127.0.0.1:8000/api/v1/auth/azure/authorize';
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-12">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
//           <p className="text-gray-600">Sign in to continue to your account.</p>
//         </div>

//         {/* Azure Sign-in Button */}
//         <button
//           onClick={handleAzureLogin}
//           className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors mb-6"
//         >
//           <Cloud className="w-5 h-5 text-blue-500" />
//           <span className="font-medium text-gray-900">Sign in with Azure</span>
//         </button>

//         {/* Divider */}
//         <div className="relative mb-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-4 bg-white text-gray-500">Or continue with</span>
//           </div>
//         </div>

//         {/* Normal Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="your@email.com"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             required
//           />

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             required
//           />

//           {error && (
//             <p className="text-sm text-red-500 text-center mt-2">{error}</p>
//           )}

//           <div className="text-right">
//             <a
//               href="#"
//               className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
//             >
//               Forgot your password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// src/pages/Login.tsx

// import { useState, useEffect } from "react";
// import { Cloud } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { loginUser, getToken } from "@/utils/auth";
// import { toast } from "sonner";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // ✅ If already logged in, redirect to dashboard
//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       navigate("/admin-dashboard");
//     }
//   }, [navigate]);

//   // ✅ Handle Azure redirect token (?token=)
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");
//     if (token) {
//       loginUser(token);
//       toast.success("Azure login successful");
//       navigate("/admin-dashboard");
//     }
//   }, [navigate]);

//   // ✅ Handle normal JWT login
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const formData = new URLSearchParams();
//       formData.append("username", email);
//       formData.append("password", password);

//       const response = await fetch("http://127.0.0.1:8000/api/v1/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formData.toString(),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.detail || "Invalid credentials");

//       const token = data.access_token || data.access || data.token;
//       if (token) {
//         loginUser(token);
//         toast.success("Login successful");
//         navigate("/admin-dashboard");
//       } else {
//         throw new Error("Invalid server response");
//       }
//     } catch (err: any) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Azure AD login redirect
//   const handleAzureLogin = () => {
//     window.location.href = "http://127.0.0.1:8000/api/v1/auth/azure/authorize";
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-12">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
//           <p className="text-gray-600">Sign in to continue to your account.</p>
//         </div>

//         {/* Azure Sign-in Button */}
//         <button
//           onClick={handleAzureLogin}
//           className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors mb-6"
//         >
//           <Cloud className="w-5 h-5 text-blue-500" />
//           <span className="font-medium text-gray-900">Sign in with Azure</span>
//         </button>

//         {/* Divider */}
//         <div className="relative mb-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-4 bg-white text-gray-500">Or continue with</span>
//           </div>
//         </div>

//         {/* Normal Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="your@email.com"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             required
//           />

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             required
//           />

//           {error && (
//             <p className="text-sm text-red-500 text-center mt-2">{error}</p>
//           )}

//           <div className="text-right">
//             <a
//               href="#"
//               className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
//             >
//               Forgot your password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { Cloud } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { loginUser, getToken } from "@/utils/auth";
// import { toast } from "sonner";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // ✅ Redirect if already logged in
//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       navigate("/admin-dashboard");
//     }
//   }, [navigate]);

//   // ✅ Handle Azure redirect callback (?token=)
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");
//     if (token) {
//       loginUser(token);
//       toast.success("Azure login successful");
//       navigate("/admin-dashboard");
//     }
//   }, [navigate]);

//   // ✅ Handle normal JWT login
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const formData = new URLSearchParams();
//       formData.append("username", email);
//       formData.append("password", password);

//       const response = await fetch("http://127.0.0.1:8000/api/v1/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formData.toString(),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.detail || "Invalid credentials");

//       const token = data.access_token || data.access || data.token;
//       if (token) {
//         loginUser(token);
//         toast.success("Login successful");
//         navigate("/admin-dashboard");
//       } else {
//         throw new Error("Invalid server response");
//       }
//     } catch (err: any) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Azure Login redirect
//   const handleAzureLogin = () => {
//     window.location.href = "http://127.0.0.1:8000/api/v1/auth/azure/authorize";
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-12">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
//           <p className="text-gray-600">Sign in to continue to your account.</p>
//         </div>

//         {/* Azure Login Button */}
//         <button
//           onClick={handleAzureLogin}
//           className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors mb-6"
//         >
//           <Cloud className="w-5 h-5 text-blue-500" />
//           <span className="font-medium text-gray-900">Sign in with Azure</span>
//         </button>

//         {/* Divider */}
//         <div className="relative mb-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-4 bg-white text-gray-500">Or continue with</span>
//           </div>
//         </div>

//         {/* Normal Login Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="your@email.com"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             required
//           />

//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             required
//           />

//           {error && (
//             <p className="text-sm text-red-500 text-center mt-2">{error}</p>
//           )}

//           <div className="text-right">
//             <a
//               href="#"
//               className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
//             >
//               Forgot your password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// src/pages/Login.tsx
// src/pages/Login.tsx
// src/pages/login.tsx
import { useState, useEffect } from "react";
import { Cloud } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { loginUser, getToken } from "@/utils/auth";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/admin-dashboard", { replace: true });
    }
  }, [navigate]);

  // ✅ Handle Azure redirect callback (?token=)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      setLoading(true);
      fetch("http://127.0.0.1:8000/api/v1/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((userData) => {
          loginUser(token, userData);
          toast.success("Azure login successful");
          navigate("/admin-dashboard", { replace: true });
        })
        .catch(() => {
          toast.error("Azure login failed");
          setLoading(false);
        });
    }
  }, [navigate]);

  // ✅ Handle normal JWT login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("username", email);
      formData.append("password", password);

      const response = await fetch("http://127.0.0.1:8000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Invalid credentials");

      const token = data.access_token || data.access || data.token;
      if (!token) throw new Error("No token received");

      const userRes = await fetch("http://127.0.0.1:8000/api/v1/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!userRes.ok) throw new Error("Failed to fetch user data");

      const userData = await userRes.json();
      loginUser(token, userData);

      toast.success("Login successful");
      navigate("/admin-dashboard", { replace: true });
    } catch (err: any) {
      toast.error(err.message || "Login failed");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAzureLogin = () => {
    window.location.href = "http://127.0.0.1:8000/api/v1/auth/azure/authorize";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome </h1>
          <p className="text-gray-600">Sign in to continue to your account.</p>
        </div>

        <button
          onClick={handleAzureLogin}
          disabled={loading}
          className="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors mb-6 disabled:opacity-50"
        >
          <Cloud className="w-5 h-5 text-blue-500" />
          <span className="font-medium text-gray-900">Sign in with Azure</span>
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
            disabled={loading}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
            disabled={loading}
          />

          {error && (
            <p className="text-sm text-red-500 text-center mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
