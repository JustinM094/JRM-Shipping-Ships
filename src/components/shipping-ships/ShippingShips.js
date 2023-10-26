import { useEffect, useState } from "react";
import { deleteShip, getExpandedShips } from "../../Services/ShipService";

export const DisplayShippingShips = () => {
  const [shipsAndHaulers, setShipsAndHaulers] = useState([]);

  useEffect(() => {
    getUpdatedShips();
  }, []);

  const getUpdatedShips = () => {
    getExpandedShips().then((ships) => {
      setShipsAndHaulers(ships);
      console.log("ships set!");
    });
  };

  const handleDelete = (shipId) => {
    deleteShip(shipId).then(() => {
      getUpdatedShips();
    });
  };

  return (
    <>
      <section>
        <h1>Here are all the ships with associated haulers</h1>
        {shipsAndHaulers.map((ship) => {
          return (
            <div key={ship.id}>
              <p>Ship Name: {ship.name}</p>
              {ship.hauler && (
                <p>
                  Associated Hauler Name: {ship.hauler.name} - ID:{" "}
                  {ship.hauler.id}
                </p>
              )}
              <button onClick={() => handleDelete(ship.id)}>Delete</button>
            </div>
          );
        })}
      </section>
    </>
  );
};
