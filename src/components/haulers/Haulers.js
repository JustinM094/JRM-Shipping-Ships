import { useEffect, useState } from "react";
import { getHaulers } from "../../Services/HaulerService";
import { useNavigate } from "react-router-dom";

export const DisplayHaulers = () => {
  const [allHaulers, setAllHaulers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getHaulers().then((haulers) => {
      setAllHaulers(haulers);
      console.log("haulers set!");
    });
  }, []);

  const handleEdit = (haulerId) => {
    navigate(`/haulers/${haulerId}/edit`);
  };

  return (
    <>
      <section>
        <h1>Here are all the haulers</h1>
        {allHaulers.map((hauler) => {
          return (
            <div key={hauler.id}>
              <p>Hauler Name: {hauler.name}</p>
              <button onClick={() => handleEdit(hauler.id)}>Edit</button>
            </div>
          );
        })}
      </section>
    </>
  );
};
