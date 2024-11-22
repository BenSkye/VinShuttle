/**
 * Client-side routes based on Next.js App Router structure
 * These match the folder structure in app directory
 */
export const APP_ROUTES = {
  HOME: '/',
  
  // Auth routes - matches app/(auth)/*
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
  },

  // Main routes - matches app/(main)/*
  MAIN: {
    // Booking routes
    BOOKING: {
      PRIVATE_RENTAL: {
        ROOT: '/booking/private-rental',
        HOURLY: '/booking/private-rental/hourly',
        ROUTE_BASED: '/booking/private-rental/route-based',
      },
      SHARED_RIDE: {
        ROOT: '/booking/shared-ride',
        FIXED_ROUTE: '/booking/shared-ride/fixed-route',
        ON_DEMAND: '/booking/shared-ride/on-demand',
      }
    },

    // Profile routes
    PROFILE: '/profile',

    // Trips routes
    TRIPS: {
      ACTIVE: '/trips/active',
      HISTORY: '/trips/history',
    },

    // Payment routes
    PAYMENT: '/payment'
  }
} as const;

/**
 * API Routes for backend calls
 * These match the route handlers in app/api
 */
export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
  },
  BOOKING: {
    CREATE: '/api/booking/create',
    GET_ALL: '/api/booking/all',
    GET_BY_ID: (id: string) => `/api/booking/${id}`,
    UPDATE: (id: string) => `/api/booking/${id}`,
    DELETE: (id: string) => `/api/booking/${id}`,
  },
  PAYMENT: {
    CREATE: '/api/payment/create',
    VERIFY: '/api/payment/verify',
  }
} as const;