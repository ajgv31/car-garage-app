import React from "react";
import MechanicCard from "./MechanicCard";

const MechanicList = ({ mechanics, deleteMechanicHandler, setCurrentMechanic }) => {
  const editHandler = (id) => {
    const mechanicToEdit = mechanics.find((mechanic) => mechanic.id === id);
    setCurrentMechanic(mechanicToEdit);
  };

  const renderMechanicList = mechanics.map((mechanic) => (
    <div key={mechanic.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <MechanicCard
            mechanic={mechanic}
            deleteMechanicHandler={deleteMechanicHandler}
            editHandler={editHandler}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <div className="row">
        {renderMechanicList}
      </div>
      {mechanics.length === 0 && (
        <div className="text-center mt-5">
          <h3>No Mechanics Available</h3>
          <p>Add some mechanics to display them here.</p>
        </div>
      )}
    </div>
  );
};

export default MechanicList;