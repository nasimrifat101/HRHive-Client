import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

interface Auth {
  name: string;
}

const useAuth: () => Auth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return auth;
};

export default useAuth;
