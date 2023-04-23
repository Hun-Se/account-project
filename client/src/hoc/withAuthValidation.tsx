import { ComponentType } from "react";
import useTokenValidation from "../hook/auth/useTokenValidation";

const withAuthValidation = (AuthComponent: ComponentType) => {
  const AuthCheckHandler = () => {
    const { isAuthority } = useTokenValidation();

    if (!isAuthority) {
      window.location.href = "/auth/login";
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheckHandler;
};

export default withAuthValidation;
