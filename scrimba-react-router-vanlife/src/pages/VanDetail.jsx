import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// components
import Button from "../components/Button/Button";

const VanDetail = () => {
  const [van, setVan] = useState({});
  const param = useParams();
  const fetchVan = useCallback(async () => {
    try {
      const res = await fetch(`/api/vans/${param.id}`);
      const data = await res.json();
      setVan(data.vans);
      console.log(data.vans);
    } catch (error) {
      console.log(error);
    }
  }, [param.id]);

  useEffect(() => {
    fetchVan();
  }, []);
  return (
    <div className="p-8 w-full">
      <Link className="flex items-center gap-1" to="/vans">
        <svg
          className="fill-dark"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
        >
          <path
            d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.30471 5.37222 0.30471 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z"
            fill="#858585"
          />
        </svg>
        <p className="underline">Back to all vans</p>
      </Link>
      <div className="my-6 mx-auto w-full sm:w-1/2 md:w-1/3 xl:max-w-[600px]">
        <div className="overflow-hidden rounded-lg w-full mb-6">
          <img
            className="rounded-lg aspect-square hover:scale-105 duration-300"
            src={van.imageUrl}
            alt={van.name}
          />
        </div>
        <Button buttonText={van.type ?? `simple`} />
        <h3 className="font-bold my-4 text-xl">{van.name}</h3>
        <p className="text-md mb-4">
          <span className="font-bold">${van.price}</span>/day
        </p>
        <p className="">{van.description}</p>
      </div>
    </div>
  );
};

export default VanDetail;
