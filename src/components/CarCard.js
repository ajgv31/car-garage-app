import React from "react";
import defaultCarImage from "../images/derix.jpg";

const CarCard = ({ car, deleteCarHandler, editHandler }) => {
  const { 
    id, 
    make, 
    model, 
    colour, 
    year, 
    plateNumber, 
    fault, 
    image 
  } = car;
  
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex flex-column h-100">
          {/* Image Section */}
          <div className="text-center mb-3">
            <img 
              className="img-fluid rounded border"
              src={image || defaultCarImage} 
              alt={`${make} ${model}`}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover'
              }}
            />
          </div>
          
          {/* Car Details */}
          <div className="flex-grow-1">
            <h5 className="card-title text-center mb-3">
              {make} {model} {year && `(${year})`}
            </h5>
            
            <div className="card-text">
              <div className="mb-2">
                <strong>Color:</strong> {colour || 'N/A'}
              </div>
              <div className="mb-2">
                <strong>Plate:</strong> {plateNumber}
              </div>
              {fault && (
                <div className="mb-3">
                  <strong>Fault:</strong> {fault}
                </div>
              )}
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
              onClick={() => deleteCarHandler(id)}
            >
              <i className="bi bi-trash-fill"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;