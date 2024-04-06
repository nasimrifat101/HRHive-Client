import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AccessForm from "../../auth/AccessForm";
import closeBtn from '../../assets/close.svg'

const Navbar = () => {
  // const isManager = false;
  const [openModal, setOpenModal] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const navlinks = (
    <>
      <li key={"home"}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] underline" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li key={"About"}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] underline" : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li key={"contact"}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] underline" : ""
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      {/* {isManager && ( */}
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#4aed8b] underline" : ""
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      {/* )} */}
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`sticky top-0 z-50 ${
          scrollPosition > 20 ? "backdrop-blur-sm bg-white/30" : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-5"
              >
                {navlinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">HRHive</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-5">{navlinks}</ul>
          </div>
          <div className="navbar-end">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="btn"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <>
          <div className="absolute backdrop-blur-md z-40 w-full">
            <div>
              <AccessForm />
            </div>
            <div className="absolute top-[190px] right-[430px] z-50">
              <button onClick={()=>{setOpenModal(false)}} className="animate-spin-slow">
                <img src={closeBtn} alt="" className="w-20 h-20" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
