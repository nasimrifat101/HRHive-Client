import { useNavigate } from "react-router-dom";
import useApproved from "../Hooks/useApproved";
import { useEffect } from "react";

const Signup = () => {
  const approved = useApproved();
  const navigate = useNavigate();

  useEffect(() => {
    if (!approved) {
      navigate("/");
    }
  }, [approved]);
  return <div></div>;
};

export default Signup;
