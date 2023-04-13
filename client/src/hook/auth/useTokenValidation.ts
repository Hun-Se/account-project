import { useEffect, useState } from "react";
import { TOKEN_KEY } from "../../constant/token_constant";
import token from "../../lib/token/token_class";

const useTokenValidation = () => {
  const [isAuthority, setIsAuthority] = useState(true);

  useEffect(() => {
    if (token.getToken(TOKEN_KEY) === null) {
      setIsAuthority(false);
    } else {
      setIsAuthority(true);
    }
  }, []);

  return { isAuthority };
};

export default useTokenValidation;
