const API_PATH = {
  LOGIN: "/api/users/login",
  SIGNUP: "/api/users/create",
  ACCOUNT: "/api/accounts/",
  ACCOUNT_BY_ID: (id: string) => `/api/accounts/${id}`,
  CREATE_ACCOUNT: "/api/accounts/create",
  UPDATE_ACCOUNT: (id: string) => `/api/accounts/update/${id}`,
  DELETE_ACCOUNT: (id: string) => `/api/accounts/remove/${id}`,
};

export default API_PATH;
