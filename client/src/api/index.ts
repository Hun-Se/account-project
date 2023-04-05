import axios from "axios";
import { TOKEN_KEY } from "../constant/token_constant";
import Token from "../lib/token/token_class";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (!Token.getToken(TOKEN_KEY)) return config;

  config.headers["Content-Type"] = "aplication/json";
  config.headers["Authorization"] = Token.getToken(TOKEN_KEY);

  return config;
});

export default api;
