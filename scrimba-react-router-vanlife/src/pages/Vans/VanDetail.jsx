import { Link, useLocation, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// components
import Button from "../../components/Button/Button";

const VanDetail = () => {
  const [van, setVan] = useState({});
  const param = useParams();
  const location = useLocation();
  console.log(location)
  const fetchVan = useCallback(async () => {
    try {
      const res = await fetch(`/api/vans/${param.id}`);
      const data = await res.json();
      setVan(data.vans);
    } catch (error) {
      console.log(error);
    }
  }, [param.id]);

  useEffect(() => {
    fetchVan();
  }, []);
  return van ? (
    <div className="p-8 w-full">
      <Link 
      className="flex items-center gap-1" 
      to={`..?${location.state?.search}` || ".."}
      relative="path"
      >
        &larr;<p className="underline">Back to all vans</p>
      </Link>
      <div className="py-6 mx-auto w-full sm:w-1/2 md:w-1/3 xl:max-w-[600px]">
        <div className="overflow-hidden rounded-lg w-full mb-6">
          <img
            className="rounded-lg hover:scale-105 duration-300"
            src={van.imageUrl}
            alt={van.name}
          />
        </div>
        <Button buttonText={van.type} />
        <h3 className="font-bold my-4 text-xl">{van.name}</h3>
        <p className="text-md mb-4">
          <span className="font-bold">${van.price}</span>/day
        </p>
        <p className="">{van.description}</p>
        <button className={`van-btn ${van.type} w-full mt-6 py-3 text-md`}>
          <Link relative="path" to="checkout">Rent this van</Link>
        </button>
      </div>
    </div>
  ) : (
    <h1 className="">Loading...</h1>
  );
};

export default VanDetail;
