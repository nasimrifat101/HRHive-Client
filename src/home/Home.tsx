import Cursor from "../utils/Cursor";
import Banner from "./homeponents/Banner";
import Navbar from "./homeponents/Navbar";
import Vision from "./homeponents/Vision";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <Vision/>
      <div className="absolute">
        <Cursor />
      </div>
    </div>
  );
};

export default Home;
