import React from "react";
import CarList from './CarList';
import CarCard from "./CarCard";

class AddCar extends React.Component
{
    state={
        make:"",
        model:"",
        year:"",
        color:"",
        plateNumber:"",
        issue:""

    };

    componentDidUpdate(prevProps) {
    if (prevProps.currentCar !== this.props.currentCar && this.props.currentCar) {
      this.setState({ ...this.props.currentCar });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.make || !this.state.model || !this.state.plateNumber) {
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


    render() 
    {
        return (
        <div className="ui main">
            <h2>{this.props.currentCar ? "Edit Car" : "Add Car"}</h2>
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Make</label>
                    <input
                    type="text"
                    name="make"
                    placeholder="Make"
                    value={this.state.make}
                    onChange={(e) => this.setState({ make: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Model</label>
                    <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    value={this.state.model}
                    onChange={(e) => this.setState({ model: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Colour</label>
                    <input
                    type="text"
                    name="colour"
                    placeholder="Colour"
                    value={this.state.colour}
                    onChange={(e) => this.setState({ colour: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Year</label>
                    <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    value={this.state.year}
                    onChange={(e) => this.setState({ year: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Plate Number</label>
                    <input
                    type="text"
                    name="plateNumber"
                    placeholder="Plate Number"
                    value={this.state.plateNumber}
                    onChange={(e) => this.setState({ plateNumber: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Fault</label>
                    <input
                    type="text"
                    name="fault"
                    placeholder="Fault"
                    value={this.state.fault}
                    onChange={(e) => this.setState({ fault: e.target.value })}
                    />
                </div>
            <button className="ui button blue" type="submit">
                {this.props.currentCar ? "Update" : "Add"}
            </button>
            {this.props.currentCar && (
                <button 
                className="ui button red"
                type="button"
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
            </form>
        </div>
        );
    }

}

export default AddCar;
