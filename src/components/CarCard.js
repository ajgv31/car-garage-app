import React from "react";
import carImage from "../images/derix.jpg";

const CarCard = ({ car, deleteCarHandler, editHandler }) => {
  const { id, make, model, colour, year, plateNumber, fault } = car;
  
  return (
    <div className="item">
      <img className="ui avatar image" src={carImage} alt="car" width={300}/>
      <div className="content">
        <div className="header">
          {make} {model} ({year})
        </div>
        <div>
          <p>Colour: {colour}</p>
          <p>Plate: {plateNumber}</p>
          <p>Fault: {fault}</p>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => editHandler(id)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => deleteCarHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CarCard;