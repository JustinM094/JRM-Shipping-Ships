import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHaulerById } from "../../Services/HaulerService";
import { getDocks } from "../../Services/DockService";

export const EditHaulers = () => {
  const { haulerId } = useParams();
  const [hauler, setHauler] = useState({ name: "", dockId: 0 });
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getHaulerById(haulerId).then((data) => {
      setHauler(data);
    });
  }, [haulerId]);

  useEffect(() => {
    getDocks().then((docks) => {
      setDocks(docks);
    });
  }, []);

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setHauler((prevHauler) => ({
      ...prevHauler,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <header>
          <h1>Edit Hauler</h1>
        </header>
        <fieldset>
          <input
            name="name"
            placeholder="hauler title"
            value={hauler.name || ""}
            type="text"
            onChange={handleEditChange}
          />
        </fieldset>
        <fieldset>
          <select
            name="dockId"
            onChange={handleEditChange}
            value={hauler.dockId}
          >
            <option value={0}>Please select a dock</option>
            {docks.map((dock) => (
              <option key={dock.id} value={dock.id}>
                {dock.location}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="submit">Update</button>
      </form>
    </>
  );
};
