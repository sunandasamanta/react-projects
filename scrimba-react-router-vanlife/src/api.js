const getVans = async () => {
  try {
    const res = await fetch("/api/vans");
    const data = await res.json();
    return data.vans;
  } catch (error) {
    console.log(error);
  }
};

const getVan = async (id) => {
  try {
    const res = await fetch(`/api/vans/${id}`);
    const data = await res.json();
    return data.vans;
  } catch (error) {
    console.log(error);
  }
};

export { getVans, getVan };