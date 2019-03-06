import React from 'react';

const EmailInput = (props) => {
    const onEmailChange = (event) => {
        var email = event.target.value;

        this.props.onEmailInputChange(email);
    };

    return (
        <div className="form-group">
            <lable htmlFor="exampleInputEmail1">Email Address</lable>
            <input 
                aria-describedby="emailHelp"
                className="form-control"
                id="exampleInputEmail1"
                onChange={onEmailChange}
                placeholder="Enter Email"
                type="email"
                value={this.state.email} />
        </div>
    );
}

export default EmailInput;