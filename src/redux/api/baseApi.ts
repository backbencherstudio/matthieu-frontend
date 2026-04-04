// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const rawBaseQuery = fetchBaseQuery({
//   baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
//   credentials: "same-origin",
//   prepareHeaders: (headers) => {
//     if (typeof window !== "undefined") {
//       const token = localStorage?.getItem("token");
//       if (token) headers.set("Authorization", `Bearer ${token}`);

//       // Comment out until backend is fixed
//     const match = document.cookie.match(/x-region=([^;]+)/);
//     const region = match ? match[1] : 'other';
//     headers.set('x-country', region);
//     }
//     return headers;
//   },
// });

// const baseQueryWithAutoTokenUpdate = async (
//   args: any,
//   api: any,
//   extraOptions: any,
// ) => {
//   const result = await rawBaseQuery(args, api, extraOptions);



//   return result;
// };

// const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithAutoTokenUpdate,
//   tagTypes: [
//     "WagePolicies",
//     "bookmark",
//     "User",
//     "queries",
//     "TackProduct",
//     "SaddleProduct",
//   ],
//   endpoints: () => ({}),
// });

// export default baseApi;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // Region / country from cookie (keep only if you really use it)
      const match = document.cookie.match(/x-region=([^;]+)/);
      const region = match ? match[1] : "other";
      headers.set("x-country", region);
    }
    return headers;
  },
});

const baseQueryWithAutoTokenUpdate = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  // ── Extract and save token + type when present ──
  const responseData = result?.data as {
    authorization?: {
      token?: string;
      type?: string;
    };
    type?: string;           // fallback if type is at root level
  } | undefined;

  try {
    const newToken = responseData?.authorization?.token;
    const userType = responseData?.type;

    if (newToken) {
      // Save to localStorage (optional – many keep it for faster client access)
      localStorage.setItem("token", newToken);

      // Save to cookies – this is what you asked for
      document.cookie = `token=${newToken}; path=/; secure; samesite=strict; max-age=2592000`; // 30 days

      if (userType) {
        localStorage.setItem("userType", userType);
        document.cookie = `userType=${userType}; path=/; secure; samesite=strict; max-age=2592000`;
      }
    }
  } catch (err) {
    console.warn("Failed to save token/userType to cookies:", err);
  }

  // ── Handle 401 Unauthorized ──
  if ((result as any)?.error?.status === 401) {
    console.warn("401 Unauthorized – clearing session");

    // You can dispatch logout action here if you have one
    // api.dispatch({ type: "auth/logout" });

    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("userType");

      // Clear cookies
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict;";
      document.cookie = "userType=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict;";

      // Optional: redirect
      window.location.href = "/signin";
    }
  }

  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithAutoTokenUpdate,
  tagTypes: [
    "WagePolicies",
    "bookmark",
    "User",
    "queries",
    "TackProduct",
    "SaddleProduct",
    "Cart",
  ],
  endpoints: () => ({}),
});

export default baseApi;