import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="styles">
            <Outlet />
        </div>
    );
};

export default Main;
