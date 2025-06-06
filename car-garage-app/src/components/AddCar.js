import React from "react";

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

    render()
    {
        return
        (
            <div className="ui main">
                <h2>Add Car</h2>
                <form className="ui form" onSubmit={this.handleSubmit}>

                    <button className="ui button blue" type="submit"></button>
                </form>
            </div>
        )
    }

}

export default AddCar;