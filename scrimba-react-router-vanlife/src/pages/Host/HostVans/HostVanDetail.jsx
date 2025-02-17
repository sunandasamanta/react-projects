import { useState, useEffect, useCallback } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import Button from "../../../components/Button/Button";
import HostVanNavbar from "../../../components/HostVanNavbar/HostVanNavbar";

const HostVanDetail = () => {
  const [hostVan, setHostVan] = useState({});

  const param = useParams();
  const fetchVan = useCallback(async () => {
    try {
      const res = await fetch(`/api/host/vans/${param.id}`);
      const data = await res.json();
      setHostVan(data.vans);
      console.log(data.vans);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchVan();
  }, []);
  return hostVan ? (
    <>
      <Link
        className="ml-4 mb-4 flex items-center gap-1"
        to=".."
        relative="path"
      >
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
      <div className="p-6 rounded bg-white w-11/12 mx-auto">
        <div className="mb-6 flex items-center gap-4 cursor-pointer">
          <img
            className="w-1/3 rounded"
            src={hostVan.imageUrl}
            alt={hostVan.name}
          />
          <div className="grid">
            <Button buttonText={hostVan.type} />
            <h2 className="font-bold text-lg text-dark sm:text-3xl mt-1 mb-2">
              {hostVan.name}
            </h2>
            <p className="text-dark font-medium sm:text-lg">
              ${hostVan.price}/day
            </p>
          </div>
        </div>
        <HostVanNavbar />
        <Outlet context={{ hostVan }} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default HostVanDetail;
