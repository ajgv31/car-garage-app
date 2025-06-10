import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import AddCar from './AddCar';
import CarList from './CarList';
//import AddMechanic from './AddMechanic';

function App() 
{
  const { v4: uuid } = require("uuid");
  
  const LOCAL_STORAGE_CARS_KEY = "cars";
  const LOCAL_STORAGE_MECHANICS_KEY = "mechanics";

  const [cars, setCars] = useState(() => {
    const storedCars = localStorage.getItem(LOCAL_STORAGE_CARS_KEY);
    return storedCars ? JSON.parse(storedCars) : [];
  });

  const [mechanics/*, setMechanics*/] = useState(() => {
    const storedMechanics = localStorage.getItem(LOCAL_STORAGE_MECHANICS_KEY);
    return storedMechanics ? JSON.parse(storedMechanics) : [];
  });

  const [currentCar, setCurrentCar] = useState(null);
  //const [currentMechanic, setCurrentMechanic] = useState(null);

  // CRUD for Car
  const addCarHandler =(car)=>
  {
    setCars([...cars, {id: uuid(),...car}]);
  };

  const deleteCarHandler =(id)=>
  {
    const newCarList = cars.filter((car) => car.id !==id);
    setCars(newCarList);
  }

  const editCarHandler =(car)=>
  {
    setCars();
  }

  //CRUD for Mechanic

  // Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CARS_KEY, JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_MECHANICS_KEY, JSON.stringify(mechanics));
  }, [mechanics]);

  return (
    <div className="container-fluid"> {/* Use container-fluid for full width or container for fixed width */}
      <Header />
      <div className="row mt-4"> {/* Bootstrap row for the main layout, with some top margin */}
        {/*  Column for AddCar */}
        <div className="col-md-4"> {/* Takes 4 out of 12 columns on medium and larger screens */}
          <AddCar
            addCarHandler={addCarHandler}
            editCarHandler={editCarHandler}
            currentCar={currentCar}
            setCurrentCar={setCurrentCar}
          />
        </div>
        {/*  Column for CarList */}
        <div className="col-md-8"> {/* Takes 8 out of 12 columns on medium and larger screens */}
          <CarList
            cars={cars}
            deleteCarHandler={deleteCarHandler}
            setCurrentCar={setCurrentCar}
          />
        </div>


        {/* Uncomment and adjust if you want to include Mechanic options later
        <div className="col-md-6"> // Example for placing them side-by-side if you wanted another pair
          <AddMechanic
            addMechanicHandler={addMechanicHandler}
            editMechanicHandler={editMechanicHandler}
            currentMechanic={currentMechanic}
            setCurrentMechanic={setCurrentMechanic}
          />
          <MechanicList
            mechanics={mechanics}
            deleteMechanicHandler={deleteMechanicHandler}
            setCurrentMechanic={setCurrentMechanic}
          />
        </div>
        */}
      </div>
    </div>
  );
  
}

export default App;
