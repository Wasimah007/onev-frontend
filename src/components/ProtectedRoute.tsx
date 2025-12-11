// // import { Navigate } from 'react-router-dom';
// // import { isAuthenticated } from '@/utils/auth';
// // import { ReactNode } from 'react';

// // interface ProtectedRouteProps {
// //   children: ReactNode;
// // }

// // export default function ProtectedRoute({ children }: ProtectedRouteProps) {
// //   if (!isAuthenticated()) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   return <>{children}</>;
// // }


// // src/routes/ProtectedRoute.tsx
// import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { isAuthenticated } from "@/utils/auth";

// import { ReactNode } from 'react';

// interface ProtectedRouteProps {
//   children: ReactNode;
// }

// export default function ProtectedRoute({ children }: ProtectedRouteProps) {
//   const [authChecked, setAuthChecked] = useState(false);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const verifyAuth = async () => {
//       const valid = await isAuthenticated();
//       setAuthenticated(valid);
//       setAuthChecked(true);
//     };
//     verifyAuth();
//   }, []);

//   if (!authChecked) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-600">
//         Checking authentication...
//       </div>
//     );
//   }

//   if (!authenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return <>{children}</>;
// }



import { Navigate } from "react-router-dom";
import { useEffect, useState, ReactNode } from "react";
import { isAuthenticated } from "@/utils/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [authChecked, setAuthChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      const valid = await isAuthenticated();
      setAuthenticated(valid);
      setAuthChecked(true);
    };
    verifyAuth();
  }, []);

  if (!authChecked) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Checking authentication...
      </div>
    );
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
