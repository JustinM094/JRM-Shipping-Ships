import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHaulerById } from "../../Services/HaulerService";

export const EditHaulers = () => {
  const { haulerId } = useParams();
  const [hauler, setHauler] = useState({ name: "" });

  useEffect(() => {
    getHaulerById(haulerId).then((data) => {
      setHauler(data);
    });
  }, [haulerId]);

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setHauler((prevHauler) => ({
      ...prevHauler,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <header>
          <h1>Edit Hauler</h1>
        </header>
        <fieldset>
          <input
            name="title"
            placeholder="hauler title"
            value={hauler.name || ""}
            type="text"
            onChange={handleEditChange}
          ></input>
        </fieldset>
        <fieldset>
          <select
            name="dock-name"
            onChange={handleEditChange}
            value={hauler.dock_id}
          >
            <option value={0}></option>
          </select>
        </fieldset>
      </form>
    </>
  );
};
