import React from "react";
import ImageUploader from "./ImageUploader";

class AddCar extends React.Component {
  state = {
    make: "",
    model: "",
    year: "",
    colour: "",
    plateNumber: "",
    fault: "",
    image: null,
    errors: {
      make: "",
      model: "",
      plateNumber: ""
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentCar !== this.props.currentCar && this.props.currentCar) {
      this.setState({ 
        ...this.props.currentCar,
        errors: {
          make: "",
          model: "",
          plateNumber: ""
        }
      });
    }
  }

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      alert('Please select an image file (JPEG, PNG, etc.)');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('Image size should be less than 2MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  validateForm = () => {
    const { make, model, plateNumber } = this.state;
    const errors = {
      make: make ? "" : "Make is required",
      model: model ? "" : "Model is required",
      plateNumber: plateNumber ? "" : "Plate number is required"
    };

    this.setState({ errors });
    return !Object.values(errors).some(error => error);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: ""
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }

    const carData = {
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      colour: this.state.colour,
      plateNumber: this.state.plateNumber,
      fault: this.state.fault,
      image: this.state.image
    };

    if (this.props.currentCar) {
      carData.id = this.props.currentCar.id;
      this.props.editCar(carData);
      this.props.setCurrentCar(null);
    } else {
      this.props.addCar(carData);
    }

    this.setState({
      make: "",
      model: "",
      year: "",
      colour: "",
      plateNumber: "",
      fault: "",
      image: null,
      errors: {
        make: "",
        model: "",
        plateNumber: ""
      }
    });
  };

  handleCancel = () => {
    this.props.setCurrentCar(null);
    this.setState({
      make: "",
      model: "",
      year: "",
      colour: "",
      plateNumber: "",
      fault: "",
      image: null,
      errors: {
        make: "",
        model: "",
        plateNumber: ""
      }
    });
  };

  render() {
    const { make, model, year, colour, plateNumber, fault, image, errors } = this.state;
    const { currentCar } = this.props;

    return (
      <div className="card shadow-sm p-3 mb-4">
        <div className="card-body">
          <h4 className="card-title text-center mb-4">
            {currentCar ? "Edit Car" : "Add Car"}
          </h4>
          
          <form onSubmit={this.handleSubmit}>
            <ImageUploader 
              onImageChange={this.handleImageChange} 
              currentImage={image}
            />

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="make" className="form-label">Make*</label>
                <input
                  type="text"
                  className={`form-control ${errors.make ? "is-invalid" : ""}`}
                  id="make"
                  name="make"
                  value={make}
                  onChange={this.handleChange}
                  placeholder="Enter car make"
                />
                {errors.make && <div className="invalid-feedback">{errors.make}</div>}
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="model" className="form-label">Model*</label>
                <input
                  type="text"
                  className={`form-control ${errors.model ? "is-invalid" : ""}`}
                  id="model"
                  name="model"
                  value={model}
                  onChange={this.handleChange}
                  placeholder="Enter car model"
                />
                {errors.model && <div className="invalid-feedback">{errors.model}</div>}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="year" className="form-label">Year</label>
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  name="year"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  value={year}
                  onChange={this.handleChange}
                  placeholder="Enter year"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="colour" className="form-label">Colour</label>
                <input
                  type="text"
                  className="form-control"
                  id="colour"
                  name="colour"
                  value={colour}
                  onChange={this.handleChange}
                  placeholder="Enter colour"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="plateNumber" className="form-label">Plate Number*</label>
              <input
                type="text"
                className={`form-control ${errors.plateNumber ? "is-invalid" : ""}`}
                id="plateNumber"
                name="plateNumber"
                value={plateNumber}
                onChange={this.handleChange}
                placeholder="Enter plate number"
              />
              {errors.plateNumber && <div className="invalid-feedback">{errors.plateNumber}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="fault" className="form-label">Fault Description</label>
              <textarea
                className="form-control"
                id="fault"
                name="fault"
                rows="2"
                value={fault}
                onChange={this.handleChange}
                placeholder="Describe the issue"
              />
            </div>

            <div className="d-flex justify-content-end gap-2">
              {currentCar && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              )}
              <button 
                type="submit" 
                className="btn btn-primary"
              >
                {currentCar ? "Update Car" : "Add Car"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddCar;