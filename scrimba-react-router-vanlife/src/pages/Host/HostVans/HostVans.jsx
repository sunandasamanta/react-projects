import { useCallback, useEffect, useState } from "react";
import HostVanCard from "../../../components/HostVanCard/HostVanCard";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  const fetchHostVans = useCallback(async () => {
    try {
      const res = await fetch("/api/host/vans");
      const data = await res.json();
      setHostVans(data.vans);
    } catch (error) {
      console.log(error);
    }
  }, [hostVans]);

  useEffect(() => {
    fetchHostVans();
  }, []);
  return (
    <>
      <h1 className="font-bold text-dark text-xl p-4">Your listed vans</h1>
      {hostVans ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 items-center">
          {hostVans.map((van) => (
            <Link to={`${van.id}`} key={van.id}>
              <HostVanCard key={van.id} van={van} />
            </Link>
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default HostVans;
