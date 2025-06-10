import React from "react";
import ImageUploader from "./ImageUploader";

class AddMechanic extends React.Component {
  state = {
    name: "",
    specialization: "",
    experience: "",
    contactNumber: "",
    image: null,
    errors: {
      name: "",
      specialization: "",
      contactNumber: ""
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currentMechanic !== this.props.currentMechanic && this.props.currentMechanic) {
      this.setState({ 
        ...this.props.currentMechanic,
        errors: {
          name: "",
          specialization: "",
          contactNumber: ""
        }
      });
    }
  }

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate image file
    if (!file.type.match('image.*')) {
      alert('Please select an image file (JPEG, PNG, etc.)');
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
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
    const { name, specialization, contactNumber } = this.state;
    const errors = {
      name: name ? "" : "Name is required",
      specialization: specialization ? "" : "Specialization is required",
      contactNumber: contactNumber ? "" : "Contact number is required"
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
        [name]: "" // Clear error when user types
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }

    const mechanicData = {
      name: this.state.name,
      specialization: this.state.specialization,
      experience: this.state.experience,
      contactNumber: this.state.contactNumber,
      image: this.state.image
    };

    if (this.props.currentMechanic) {
      mechanicData.id = this.props.currentMechanic.id;
      this.props.editMechanic(mechanicData);
      this.props.setCurrentMechanic(null);
    } else {
      this.props.addMechanic(mechanicData);
    }

    this.setState({
      name: "",
      specialization: "",
      experience: "",
      contactNumber: "",
      image: null,
      errors: {
        name: "",
        specialization: "",
        contactNumber: ""
      }
    });
  };

  handleCancel = () => {
    this.props.setCurrentMechanic(null);
    this.setState({
      name: "",
      specialization: "",
      experience: "",
      contactNumber: "",
      image: null,
      errors: {
        name: "",
        specialization: "",
        contactNumber: ""
      }
    });
  };

  render() {
    const { name, specialization, experience, contactNumber, image, errors } = this.state;
    const { currentMechanic } = this.props;

    return (
      <div className="card shadow-sm p-3 mb-4">
        <div className="card-body">
          <h4 className="card-title text-center mb-4">
            {currentMechanic ? "Edit Mechanic" : "Add Mechanic"}
          </h4>
          
          <form onSubmit={this.handleSubmit}>
            <ImageUploader 
              onImageChange={this.handleImageChange} 
              currentImage={image}
            />

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name*</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Enter mechanic name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="specialization" className="form-label">Specialization*</label>
              <input
                type="text"
                className={`form-control ${errors.specialization ? "is-invalid" : ""}`}
                id="specialization"
                name="specialization"
                value={specialization}
                onChange={this.handleChange}
                placeholder="Enter specialization"
              />
              {errors.specialization && <div className="invalid-feedback">{errors.specialization}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="experience" className="form-label">Experience (years)</label>
              <input
                type="number"
                className="form-control"
                id="experience"
                name="experience"
                min="0"
                value={experience}
                onChange={this.handleChange}
                placeholder="Enter years of experience"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contactNumber" className="form-label">Contact Number*</label>
              <input
                type="tel"
                className={`form-control ${errors.contactNumber ? "is-invalid" : ""}`}
                id="contactNumber"
                name="contactNumber"
                value={contactNumber}
                onChange={this.handleChange}
                placeholder="Enter contact number"
              />
              {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
            </div>

            <div className="d-flex justify-content-end gap-2">
              {currentMechanic && (
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
                {currentMechanic ? "Update Mechanic" : "Add Mechanic"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMechanic;