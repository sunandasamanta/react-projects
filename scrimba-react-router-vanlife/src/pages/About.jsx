
const About = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-148.8px)]">
      <img src="./vanlife-image-54.png" alt="Person on Van" />
      <div className="text-dark w-11/12 sm:w-1/2 mx-auto mt-6 mb-10">
        <h2 className="font-bold text-xl m-0 mb-5">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="text-sm">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. 
          <br />
          (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="p-6 w-full bg-amber-400 rounded-xl mt-6">
          <h3 className="text-dark font-bold mb-4">
          Your destination is waiting.
          <br />
          Your van is ready.
          </h3>
          <button className="btn">
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
