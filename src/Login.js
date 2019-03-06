import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';


class LoginForm extends COmponent {
    //constructor
    constructor(props)
    {
        super(props);

        this.state = 
        {
            email: '',
        }
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    //handler for data from child component
    onEmailChange(email)
    {
        this.setState( () =>
        {
            return 
            {
                email;
            }
        }
    );
    }
    render() 
    {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.onFormSubmit}>
                <EmailInput onEmailInputChange={this.onEmailChange} />
                <button type="submit"
                        classname="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };
}

export default LoginForm;