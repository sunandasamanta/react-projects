import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { hostVan } = useOutletContext();

  return (
      <div className="max-w-1/4 rounded-md overflow-hidden my-4">
        <img
          className=" rounded-md hover:scale-105 transition-transform duration-300"
          src={hostVan.imageUrl}
          alt={hostVan.name}
        />
      </div>
  );
};

export default HostVanPhotos;
