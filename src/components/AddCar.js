import React from "react";
import CarList from './CarList';
import CarCard from "./CarCard";

class AddCar extends React.Component {
  state = {
    make: "",
    model: "",
    year: "",
    colour: "",
    plateNumber: "",
    fault: ""
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentCar !== this.props.currentCar && this.props.currentCar) {
      this.setState({ ...this.props.currentCar });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { make, model, plateNumber } = this.state;

    if (!make || !model || !plateNumber) {
      alert("Make, Model, and Plate Number are mandatory!");
      return;
    }

    if (this.props.currentCar) {
      this.props.editCarHandler(this.state);
    } else {
      this.props.addCarHandler(this.state);
    }

    this.setState({
      make: "",
      model: "",
      colour: "",
      year: "",
      plateNumber: "",
      fault: ""
    });
  };

  render() {
    return (
       <div className="card shadow-sm p-3 mb-4"> {/* Added card for border, shadow, and padding */}
        <div className="card-body p-0"> {/* Removed default card-body padding */}
          <h4 className="card-title text-center mb-3">
            {this.props.currentCar ? "Edit Car" : "Add Car"}
          </h4>
          <form onSubmit={this.handleSubmit}>
            {/* Using form-floating for compact labels and inputs */}
            <div className="form-floating mb-2"> {/* mb-2 for reduced space */}
              <input
                type="text"
                className="form-control"
                id="carMake"
                name="make"
                placeholder="Enter car make"
                value={this.state.make}
                onChange={(e) => this.setState({ make: e.target.value })}
              />
              <label htmlFor="carMake">Make</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="carModel"
                name="model"
                placeholder="Enter car model"
                value={this.state.model}
                onChange={(e) => this.setState({ model: e.target.value })}
              />
              <label htmlFor="carModel">Model</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="carColour"
                name="colour"
                placeholder="Enter car colour"
                value={this.state.colour}
                onChange={(e) => this.setState({ colour: e.target.value })}
              />
              <label htmlFor="carColour">Colour</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="carYear"
                name="year"
                placeholder="Enter year"
                value={this.state.year}
                onChange={(e) => this.setState({ year: e.target.value })}
              />
              <label htmlFor="carYear">Year</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="carPlateNumber"
                name="plateNumber"
                placeholder="Enter plate number"
                value={this.state.plateNumber}
                onChange={(e) => this.setState({ plateNumber: e.target.value })}
              />
              <label htmlFor="carPlateNumber">Plate Number</label>
            </div>

            <div className="form-floating mb-3"> {/* Slightly more space for the last input before buttons */}
              <input
                type="text"
                className="form-control"
                id="carFault"
                name="fault"
                placeholder="Describe the issue"
                value={this.state.fault}
                onChange={(e) => this.setState({ fault: e.target.value })}
              />
              <label htmlFor="carFault">Fault</label>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end"> {/* For button alignment */}
              <button type="submit" className="btn btn-primary">
                {this.props.currentCar ? "Update" : "Add"}
              </button>

              {this.props.currentCar && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    this.props.setCurrentCar(null);
                    this.setState({
                      make: "",
                      model: "",
                      colour: "",
                      year: "",
                      plateNumber: "",
                      fault: ""
                    });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddCar;
