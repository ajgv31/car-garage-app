import React from "react";
import CarCard from "./CarCard";

const CarList = ({ cars, deleteCarHandler, setCurrentCar }) => {
  const renderCarList = cars.map((car) => (
    <CarCard
      key={car.id}
      car={car}
      deleteCarHandler={deleteCarHandler}
      setCurrentCar={setCurrentCar}
    />
  ));

  return <div className="ui celled list">{renderCarList}</div>;
};

export default CarList;
