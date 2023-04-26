import { TOKEN_KEY } from "../../constant/token_constant";

class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}

const myToken = new Token();

export default myToken;
