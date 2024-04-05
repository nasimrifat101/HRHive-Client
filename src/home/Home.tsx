import Cursor from "../utils/Cursor";
import Banner from "./homeponents/Banner";
import Navbar from "./homeponents/Navbar";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <div className="absolute">
        <Cursor />
      </div>
    </div>
  );
};

export default Home;
