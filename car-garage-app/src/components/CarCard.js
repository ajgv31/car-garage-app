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
            <i
                className="edit alternate outline icon"
                style={{ color: "blue", marginTop: "7px", marginRight: "10px" }}
                onClick={() => editHandler(id)}
            ></i>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => deleteCarHandler(id)}
            ></i>
        </div>
    );
};

export default CarCard;
