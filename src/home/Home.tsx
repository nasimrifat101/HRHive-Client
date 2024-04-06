import Cursor from "../utils/Cursor";
import Banner from "./homeponents/Banner";
import Navbar from "./homeponents/Navbar";
import Purpose from "./homeponents/Purpose";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <Purpose/>  
      <div className="absolute">
        <Cursor />
      </div>
    </div>
  );
};

export default Home;
