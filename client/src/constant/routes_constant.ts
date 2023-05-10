const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  DASHBOARD: "/dashboard",
  CALENDAR: "/calendar",
  ACCOUNT: "/account",
  ACCOUNT_CREATE: "/account/create",
  ACCOUNT_BY_ID: (id: string) => `/accounts/${id}`,
};

export default ROUTES;
