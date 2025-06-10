import React from "react";
import defaultMechanicImage from "../images/mechanic.jpg";

const MechanicCard = ({ mechanic, deleteMechanicHandler, editHandler }) => {
  const { 
    id, 
    name, 
    specialization, 
    experience, 
    contactNumber, 
    image 
  } = mechanic;
  
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex flex-column h-100">
          {/* Image Section */}
          <div className="text-center mb-3">
            <img 
              className="img-fluid rounded-circle border"
              src={image || defaultMechanicImage} 
              alt={name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                border: '2px solid #dee2e6'
              }}
            />
          </div>
          
          {/* Mechanic Details */}
          <div className="flex-grow-1">
            <h5 className="card-title text-center mb-3">{name}</h5>
            
            <div className="card-text">
              <div className="mb-2">
                <strong>Specialization:</strong> {specialization}
              </div>
              <div className="mb-2">
                <strong>Experience:</strong> {experience} years
              </div>
              <div className="mb-3">
                <strong>Contact:</strong> {contactNumber}
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="d-flex justify-content-center gap-2 mt-auto">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => editHandler(id)}
            >
              <i className="bi bi-pencil-fill"></i> Edit
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => deleteMechanicHandler(id)}
            >
              <i className="bi bi-trash-fill"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicCard;