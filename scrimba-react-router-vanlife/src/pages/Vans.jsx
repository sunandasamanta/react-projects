import { useEffect, useState } from "react";
import VanCard from "../components/VanCard/VanCard";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const fetchVans = async () => {
    try {
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVans(data.vans);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVans();
  }, []);
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      {vans.map((van) => (
        <Link key={van.id} to={`/vans/${van.id}`}>
          <VanCard
            imgSrc={van.imageUrl}
            vanName={van.name}
            rent={van.price}
            vanType={van.type}
          />
        </Link>
      ))}
    </div>
  );
};

export default Vans;
