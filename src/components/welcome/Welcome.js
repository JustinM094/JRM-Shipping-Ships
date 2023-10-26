import "./Welcome.css";
import { useState, useEffect } from "react";
import { getShippingShips } from "../../Services/ShipService.js";
import { getHaulers } from "../../Services/HaulerService";
import { getDocks } from "../../Services/DockService";

export const Welcome = () => {
  const [everyShippingShip, setEveryShippingShip] = useState([]);
  const [everyHaulingShip, setEveryHaulingShip] = useState([]);
  const [everyDock, setEveryDock] = useState([]);

  useEffect(() => {
    getShippingShips().then((ships) => {
      setEveryShippingShip(ships);
      console.log("ships set!");
    });
  }, []);

  useEffect(() => {
    getHaulers().then((haulers) => {
      setEveryHaulingShip(haulers);
      console.log("haulers set!");
    });
  }, []);

  useEffect(() => {
    getDocks().then((docks) => {
      setEveryDock(docks);
      console.log("docks set!");
    });
  }, []);

  return (
    <>
      <section className="welcome-container">
        <h1>Here are all the ships!</h1>
      </section>
      <section className="items-container">
        <div>
          <h2>Ships</h2>
          {everyShippingShip.map((ship) => {
            return <p key={ship.id}>{ship.name}</p>;
          })}
        </div>
        <div>
          <h2>Haulers</h2>
          {everyHaulingShip.map((hauler) => {
            return <p key={hauler.id}>{hauler.name}</p>;
          })}
        </div>
        <div>
          <h2>Docks</h2>
          {everyDock.map((dock) => {
            return <p key={dock.id}>{dock.location}</p>;
          })}
        </div>
      </section>
    </>
  );
};
