import React from "react";
import CarCard from "./CarCard";

const CarList = ({ cars, deleteCarHandler, setCurrentCar }) => {
  const renderCarList = cars.map((car) => (
    // 
    <div key={car.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      {/* 
      */}
      <div className="card h-100"> {/* h-100 makes all cards in a row the same height */}
        <div className="card-body">
          <CarCard
            car={car}
            deleteCarHandler={deleteCarHandler}
            setCurrentCar={setCurrentCar}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4"> {/* Added a container for proper centering and padding */}
      <div className="row"> {/* Bootstrap row to hold the columns */}
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