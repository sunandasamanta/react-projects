import { useCallback, useEffect, useState } from "react";
import VanCard from "../../components/VanCard/VanCard";
import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getVans } from "../../api";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchVans() {
      const data = await getVans();
      setVans(data);
      setLoading(false);
    }
    fetchVans();
  }, []);

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1 className="text-dark mx-8 text-2xl font-bold">
        Explore our van options
      </h1>
      <nav className="mx-6 my-4 flex gap-4">
        <Button
          onClick={() => setSearchParams({ type: "simple" })}
          buttonText="Simple"
        />
        <Button
          onClick={() => setSearchParams({ type: "rugged" })}
          buttonText="Rugged"
        />
        <Button
          onClick={() => setSearchParams({ type: "luxury" })}
          buttonText="Luxury"
        />
        {typeFilter && (
          <Button onClick={() => setSearchParams("")} buttonText="Clear" />
        )}
      </nav>
      <div className="grid grid-cols-1 m-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center">
        {displayedVans.map((van) => (
          <Link
            key={van.id}
            to={van.id}
            state={{
              search: searchParams.toString(),
              type: typeFilter,
            }}
          >
            <VanCard
              imgSrc={van.imageUrl}
              vanName={van.name}
              rent={van.price}
              vanType={van.type}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Vans;
