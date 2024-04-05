import { useEffect, useState } from "react";
import cursor from "../../src/assets/cursor.svg";
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e :any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      document.body.style.cursor = "auto";
    };
  }, []);
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: position.y - 70,
        left: position.x - 70,
      }}
    >
      <img
        src={cursor}
        alt="logo"
        className="w-[150px] h-[150px]"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

export default Cursor;
