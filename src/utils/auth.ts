// // src/utils/auth.ts
// export const getToken = () => localStorage.getItem("token");

// export const isAuthenticated = () => !!getToken();

// export const loginUser = (token: string) => {
//   localStorage.setItem("token", token);
//   localStorage.setItem("isLoggedIn", "true");
// };

// // export const logoutUser = () => {
// //   localStorage.removeItem("token");
// //   localStorage.removeItem("isLoggedIn");
// // };


// export const logoutUser = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("isLoggedIn");
// };

// src/utils/auth.ts

// export const getToken = () => localStorage.getItem("token");

// export const loginUser = (token: string) => {
//   localStorage.setItem("token", token);
// };

// export const logoutUser = () => {
//   localStorage.removeItem("token");
// };

// export const isAuthenticated = async (): Promise<boolean> => {
//   const token = getToken();
//   if (!token) return false;

//   try {
//     const res = await fetch("http://127.0.0.1:8000/api/v1/auth/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return res.ok;
//   } catch (error) {
//     return false;
//   }
// };



// src/utils/auth.ts

// Get token from localStorage
// export const getToken = () => localStorage.getItem("token");

// // Save token to localStorage
// export const loginUser = (token: string) => {
//   localStorage.setItem("token", token);
// };

// // Logout (clear token)
// export const logoutUser = () => {
//   localStorage.removeItem("token");
// };

// // Verify token validity with backend /auth/me endpoint
// export const isAuthenticated = async (): Promise<boolean> => {
//   const token = getToken();
//   if (!token) return false;

//   try {
//     const res = await fetch("http://127.0.0.1:8000/api/v1/auth/me", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.ok;
//   } catch (error) {
//     return false;
//   }
// };


// src/utils/auth.ts

// src/utils/auth.ts

// src/utils/auth.ts

// src/utils/auth.ts

export const loginUser = (token: string, user: any) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const getUser = (): any | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// ✅ Use "roles" since that’s what your API returns
export const getUserRole = (): string | null => {
  const user = getUser();
  return user?.roles || null;
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = getToken();
  return !!token;
};

