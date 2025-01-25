interface RouteConfig {
    publicRoutes: string[];
    privateRoutes: string[];
    hybridRoutes: string[];
    loginRoute: string;
    accessRoutes: { [role: string]: string[] };
  }
  
  export const config: RouteConfig = {
    publicRoutes: ['/login', '/signup'],
    privateRoutes: ['/dashboard', '/profile'],
    hybridRoutes: ['/home'],
    loginRoute: '/login',
    accessRoutes: {
      admin: ['/admin', '/settings'],
      user: ['/user', '/profile'],
    },
  };