import React from "react";
import mechanicImage from "../images/mechanic.jpg"; // Add a mechanic image

const MechanicCard = ({ mechanic, deleteMechanicHandler, editHandler }) => {
  const { id, name, specialization, experience, contactNumber } = mechanic;
  
  return (
    <div className="item">
      <img className="ui avatar image" src={mechanicImage} alt="mechanic" width={300}/>
      <div className="content">
        <div className="header">{name}</div>
        <div>
          <p>Specialization: {specialization}</p>
          <p>Experience: {experience} years</p>
          <p>Contact: {contactNumber}</p>
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
          onClick={() => deleteMechanicHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MechanicCard;