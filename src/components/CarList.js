import React from "react";
import CarCard from "./CarCard";

const CarList = ({ cars, deleteCarHandler, setCurrentCar }) => {
  const editHandler = (id) => {
    const carToEdit = cars.find((car) => car.id === id);
    setCurrentCar(carToEdit);
  };

  const renderCarList = cars.map((car) => (
    <div key={car.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <CarCard
            car={car}
            deleteCarHandler={deleteCarHandler}
            editHandler={editHandler}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <div className="row">
        {renderCarList}
      </div>
      {cars.length === 0 && (
        <div className="text-center mt-5">
          <h3>No Cars Available</h3>
          <p>Add some cars to display them here.</p>
        </div>
      )}
    </div>
  );
};

export default CarList;