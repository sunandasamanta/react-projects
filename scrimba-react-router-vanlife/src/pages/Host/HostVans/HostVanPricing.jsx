import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { hostVan } = useOutletContext();

  return (
    <>
      <p className="my-4 text-md">
        <span className="font-bold text-xl">${hostVan.price}.00</span>/day
      </p>
    </>
  );
};

export default HostVanPricing;
