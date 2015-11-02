import React from 'react';
import {Link} from 'react-router';
import {signIn} from '../../modules/action-creators/index';
import {connect} from 'react-redux';


class LoginPage extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(signIn(this.form.elements.username.value, this.form.elements.password.value));
    }

    render() {
        return (<div>
            <h2>Sign in</h2>
            <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.form = form}>
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <button type="submit">Sign in</button>
            </form>
            <Link to="/register">Register</Link>
        </div>);
    }

}

export default connect()(LoginPage);
