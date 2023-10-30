import { useEffect, useState } from "react";
import { getDocks } from "../../Services/DockService";

export const DisplayDocks = () => {
  const [allDocks, setAllDocks] = useState([]);

  useEffect(() => {
    getDocks().then((docks) => {
      setAllDocks(docks);
    });
  }, []);
  return (
    <>
      <section>
        <h1>Here are all the docks</h1>
        {allDocks.map((dock) => {
          return (
            <div key={dock.id}>
              <p>Dock Location: {dock.location}</p>
              <p>Tonnage Capacity: {dock.capacity}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};
