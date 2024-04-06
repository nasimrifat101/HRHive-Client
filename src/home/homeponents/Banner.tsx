import circle from "../../assets/circle.svg";
const Banner = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto relative mb-10">
      <div className="space-y-5 pt-20">
        <p className="text-9xl font-bold">Creating</p>
        <p className="text-9xl font-bold">
          The <span>Future</span>
        </p>
        <p className="text-9xl font-bold">Of <span className="hover-stroke">Human Resource </span></p>
        <p className="text-9xl font-bold">Management</p>
        <p className="text-3xl pt-10 ">Helping businesses to grow bigger with high-tech applications.</p>
      </div>
      <div
        className="absolute -top-20 -right-10 animate-spin-slow "
        style={{ willChange: "transform" }}
      >
        <img src={circle} alt="logo" className="w-[600px]" />
      </div>
    </div>
  );
};

export default Banner;
