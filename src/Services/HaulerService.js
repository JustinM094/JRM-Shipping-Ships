export const getHaulers = () => {
  return fetch("http://localhost:8000/haulers").then((res) => res.json());
};

export const editHauler = (haulerId) => {
  return fetch(`http://localhost:8000/haulers/${haulerId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getHaulerById = (haulerId) => {
  return fetch(`http://localhost:8000/haulers/${haulerId}`).then((res) =>
    res.json()
  );
};
