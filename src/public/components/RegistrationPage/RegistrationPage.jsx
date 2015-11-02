import React from 'react';
import {Link} from 'react-router';
import {register} from '../../modules/action-creators/index';
import {connect} from 'react-redux';


class RegistrationPage extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(register(this.form.elements.username.value, this.form.elements.password.value));
    }

    render() {
        return (<div>
            <h2>Register</h2>
            <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form}>
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <button type="submit">Register</button>
            </form>
            <Link to="/signin">Sign in</Link>
        </div>);
    }

}

export default connect()(RegistrationPage);
