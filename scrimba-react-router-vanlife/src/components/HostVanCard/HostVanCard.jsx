import { useParams } from "react-router-dom";

const HostVanCard = ({ van }) => {
  
  return (
    <div className="p-4 bg-white w-11/12 mx-auto flex items-center gap-4 cursor-pointer rounded">
      <img className="w-24 rounded" src={van.imageUrl} alt={van.name} />
      <div className="grid">
        <h2 className="font-bold text-lg text-dark">{van.name}</h2>
        <p className="text-gray-500 font-medium">${van.price}/day</p>
      </div>
    </div>
  );
};

export default HostVanCard;
