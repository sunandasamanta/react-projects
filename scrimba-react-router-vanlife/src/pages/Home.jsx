import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="box-container hero-bg">
      <div className="w-11/12 sm:w-1/2 text-white">
        <h3 className="font-bold mb-6 text-2xl">
          You got the travel plans, we got the travel vans.
        </h3>
        <p className="mb-8">
          Add adventure to your life by joining the #vanlife movement.
          <br />
          Rent the perfect van to make your perfect road trip.
        </p>
        <Link to="/vans">
          <button className="btn w-max cursor-pointer bg-[#FF8C38]">
            Find your van
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
