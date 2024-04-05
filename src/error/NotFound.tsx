import { useNavigate } from "react-router-dom";
import notFound from "../assets/NotFound.svg";
import Cursor from "../utils/Cursor";
const NotFound = () => {
    const navigate = useNavigate()
    const click = ()=>{
        navigate(-1)
    }
  return (
    <div className="styles min-h-screen flex justify-center items-center overflow-hidden relative">
      <p className="text-[500px] font-black hover-stroke">404</p>
      <div className="absolute -bottom-48 animate-spin-slow">
        <img src={notFound} alt="" />
      </div>
      <div className="absolute bottom-10">
        <button onClick={()=>{click()}} className="underline-offset-4 underline text-green-800">Go Back</button>
      </div>
      <Cursor/>
    </div>

  );
};

export default NotFound;
