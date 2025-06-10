import React from "react";
import MechanicCard from "./MechanicCard";

const MechanicList = ({ mechanics, deleteMechanicHandler, setCurrentMechanic }) => {
  const editHandler = (id) => {
    const mechanicToEdit = mechanics.find((mechanic) => mechanic.id === id);
    setCurrentMechanic(mechanicToEdit);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="card">
        <div className="card-body d-flex flex-row flex-nowrap overflow-auto" style={{ gap: '20px' }}>
          {mechanics.length > 0 ? (
            mechanics.map((mechanic) => (
              <div key={mechanic.id} style={{ minWidth: '300px', flexShrink: 0 }}>
                <MechanicCard
                  mechanic={mechanic}
                  deleteMechanicHandler={deleteMechanicHandler}
                  editHandler={editHandler}
                />
              </div>
            ))
          ) : (
            <div className="text-center w-100 py-5">
              <h3>No Mechanics Available</h3>
              <p>Add some mechanics to display them here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MechanicList;