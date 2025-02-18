import Button from "../Button/Button";

const VanCard = ({ imgSrc, vanName, rent, vanType }) => {
  return (
    <div className="relative text-md p-6 hover:shadow-2xl cursor-pointer rounded-md">
      <div className="overflow-hidden rounded-md">
        <img
          className="max-w-full rounded-md hover:scale-110 transition-transform duration-500"
          src={imgSrc}
          alt={vanName}
        />
      </div>
      <div className="grid sm:flex sm:justify-between mt-6">
        <p className="font-bold text-xl">{vanName}</p>
        <p className="">
          <span className="font-bold text-lg">${rent}</span>
          <br className="hidden sm:inline-block" />
          /day
        </p>
      </div>
      <div className="mt-2 sm:m-0 relative sm:-top-6">
        <Button buttonText={vanType} />
      </div>
    </div>
  );
};

export default VanCard;
