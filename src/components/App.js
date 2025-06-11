import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddCar from './AddCar';
import CarList from './CarList';
import AddMechanic from './AddMechanic';
import MechanicList from './MechanicList';

function App() {
  // State with useState hook
  const [cars, setCars] = useState(() => {
  const savedCars = localStorage.getItem('cars');
  return savedCars ? JSON.parse(savedCars) : [];
});

  
  const [mechanics, setMechanics] = useState(() => {
  const savedMechanics = localStorage.getItem('mechanics');
  return savedMechanics ? JSON.parse(savedMechanics) : [];
});
  
  const [currentCar, setCurrentCar] = useState(null);
  const [currentMechanic, setCurrentMechanic] = useState(null);

  // useEffect hook for side effects and local storage
  useEffect(() => {
  localStorage.setItem('cars', JSON.stringify(cars));
}, [cars]);

  useEffect(() => {
  localStorage.setItem('mechanics', JSON.stringify(mechanics));
}, [mechanics]);

  // Car CRUD functions
  const addCar = (car) => {
    const newCars = [...cars, { id: Date.now(), ...car }];
    setCars(newCars);
  };

  const editCar = (updatedCar) => {
    setCars(cars.map(car => car.id === updatedCar.id ? updatedCar : car));
    setCurrentCar(null);
  };

  const deleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  // Mechanic CRUD functions
  const addMechanic = (mechanic) => {
    const newMechanics = [...mechanics, { id: Date.now(), ...mechanic }];
    setMechanics(newMechanics);
  };

  const editMechanic = (updatedMechanic) => {
    setMechanics(mechanics.map(mechanic => 
      mechanic.id === updatedMechanic.id ? updatedMechanic : mechanic
    ));
    setCurrentMechanic(null);
  };

  const deleteMechanic = (id) => {
    setMechanics(mechanics.filter(mechanic => mechanic.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="content row">
        {/* Car Section */}
        <div className="col-md-6">
          <AddCar
            addCar={addCar}
            editCar={editCar}
            currentCar={currentCar}
            setCurrentCar={setCurrentCar}
          />
          <CarList
            cars={cars}
            deleteCarHandler={deleteCar}
            setCurrentCar={setCurrentCar}
          />
        </div>
        
        {/* Mechanic Section */}
        <div className="col-md-6">
          <AddMechanic
            addMechanic={addMechanic}
            editMechanic={editMechanic}
            currentMechanic={currentMechanic}
            setCurrentMechanic={setCurrentMechanic}
          />
          <MechanicList
            mechanics={mechanics}
            deleteMechanicHandler={deleteMechanic}
            setCurrentMechanic={setCurrentMechanic}
          />
        </div>
      </div>
    </div>
  );
}

export default App;