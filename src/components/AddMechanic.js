import React from "react";

class AddMechanic extends React.Component {
  state = {
    name: "",
    specialization: "",
    experience: "",
    contactNumber: ""
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentMechanic !== this.props.currentMechanic && this.props.currentMechanic) {
      this.setState({ ...this.props.currentMechanic });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, specialization, contactNumber } = this.state;

    if (!name || !specialization || !contactNumber) {
      alert("Name, Specialization, and Contact Number are mandatory!");
      return;
    }

    if (this.props.currentMechanic) {
    this.props.editMechanic(this.state); 
    this.props.setCurrentMechanic(null);
  } else {
    this.props.addMechanic(this.state);
  }

    this.setState({
      name: "",
      specialization: "",
      experience: "",
      contactNumber: ""
    });
  };

  render() {
    return (
      <div className="card shadow-sm p-3 mb-4">
        <div className="card-body p-0">
          <h4 className="card-title text-center mb-3">
            {this.props.currentMechanic ? "Edit Mechanic" : "Add Mechanic"}
          </h4>
          <form onSubmit={this.handleSubmit}>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="mechanicName"
                placeholder="Enter mechanic name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <label htmlFor="mechanicName">Name</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="mechanicSpecialization"
                placeholder="Enter specialization"
                value={this.state.specialization}
                onChange={(e) => this.setState({ specialization: e.target.value })}
              />
              <label htmlFor="mechanicSpecialization">Specialization</label>
            </div>

            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="mechanicExperience"
                placeholder="Enter years of experience"
                value={this.state.experience}
                onChange={(e) => this.setState({ experience: e.target.value })}
              />
              <label htmlFor="mechanicExperience">Experience (years)</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="mechanicContact"
                placeholder="Enter contact number"
                value={this.state.contactNumber}
                onChange={(e) => this.setState({ contactNumber: e.target.value })}
              />
              <label htmlFor="mechanicContact">Contact Number</label>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                {this.props.currentMechanic ? "Update" : "Add"}
              </button>

              {this.props.currentMechanic && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    this.props.setCurrentMechanic(null);
                    this.setState({
                      name: "",
                      specialization: "",
                      experience: "",
                      contactNumber: ""
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

export default AddMechanic;