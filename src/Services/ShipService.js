export const getShippingShips = () => {
  return fetch("http://localhost:8000/ships").then((res) => res.json());
};

export const getExpandedShips = () => {
  return fetch("http://localhost:8000/ships?_expand=hauler").then((res) =>
    res.json()
  );
};

export const deleteShip = (shipId) => {
  return fetch(`http://localhost:8000/ships/${shipId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
