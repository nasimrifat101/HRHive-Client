import { NavLink, Outlet } from "react-router-dom";
import DashNav from "../dashboard/Common/DashNav";

const DashboardLay = () => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="w-[275px] min-h-screen">
          <div className="pt-3 pl-6">
            <h1 className="text-3xl font-bold">HRHive</h1>
          </div>
          <div className="">
            <ul className="menu space-y-4 pt-10">
              <li>
                <NavLink className={`text-lg`} to="/dashboard/stats">
                  Stats
                </NavLink>
              </li>
              <li>
                <NavLink className={`text-lg`} to="/dashboard/attendance">
                  Attendance
                </NavLink>
              </li>
              <li>
                <NavLink className={`text-lg`} to="/dashboard/leave-request">
                  Leave Requests
                </NavLink>
              </li>
              <li>
                <NavLink className={`text-lg`} to="/dashboard/performance">
                  Performance
                </NavLink>
              </li>
              <li>
                <NavLink className={`text-lg`} to="/dashboard/training">
                  Training
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`text-lg`}
                  to="/dashboard/employee-relations"
                >
                  Employee Relations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`text-lg`}
                  to="/dashboard/compensation-benefits"
                >
                  Compensation
                </NavLink>
              </li>
              <li>
                <NavLink className={`text-lg`} to="/dashboard/compliance">
                  Compliance
                </NavLink>
              </li>
              <li>
                <NavLink className={`text-lg`} to="/dashboard/employees">
                  Employees
                </NavLink>
              </li>
              <li>
                <NavLink className={`text-lg`} to="/dashboard/recruitment">
                  Recruitment
                </NavLink>
              </li>
            </ul>
            <div className="divider"></div>
            <div className="space-y-4 mt-20">
              <button className="btn w-full">Home</button>
              <button className="btn w-full bg-red-300">Logout</button>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50">
          <DashNav bg="bg-white" title="Dashboard" />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLay;
