import React from "react";
import CarCard from "./CarCard";

const CarList = ({ cars, deleteCarHandler, setCurrentCar }) => {
  const editHandler = (id) => {
    const carToEdit = cars.find((car) => car.id === id);
    setCurrentCar(carToEdit);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="card">
        <div className="card-body d-flex flex-row flex-nowrap overflow-auto" style={{ gap: '20px' }}>
          {cars.length > 0 ? (
            cars.map((car) => (
              <div key={car.id} style={{ minWidth: '300px', flexShrink: 0 }}>
                <CarCard
                  car={car}
                  deleteCarHandler={deleteCarHandler}
                  editHandler={editHandler}
                />
              </div>
            ))
          ) : (
            <div className="text-center w-100 py-5">
              <h3>No Cars Available</h3>
              <p>Add some cars to display them here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarList;