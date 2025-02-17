import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { hostVan } = useOutletContext();
  console.log(hostVan);
  return (
    <div className="flex flex-col gap-4 mt-4">
      <p>
        <span className="font-bold">Name:</span> {hostVan.name}
      </p>
      <p>
        <span className="font-bold">Type:</span>{" "}
        {hostVan.type?.charAt(0).toUpperCase() + hostVan.type?.slice(1)}
      </p>
      <p className="">
        <span className="font-bold">Description:</span> {hostVan.description}
      </p>
      <p className="">
        <span className="font-bold">Visibility:</span> Public
      </p>
    </div>
  );
};

export default HostVanInfo;
