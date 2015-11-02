import React from 'react';
import {connect} from 'react-redux';
import {History} from 'react-router';
import {signOut} from '../../modules/action-creators/index';


const Protected = React.createClass({

    mixins: [History],

    componentWillMount() {
        if (!this.props.currentUser) {
            this.redirect();
        }
    },

    componentWillReceiveProps(nextProps) {
        if (!nextProps.currentUser) {
            this.redirect();
        }
    },

    redirect() {
        this.history.replaceState(null, '/signin');
    },

    handleSignOut() {
        this.props.dispatch(signOut());
    },

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleSignOut}>Sign out</button>
                {this.props.children}
            </div>
        );
    }

});

export default connect((state) => ({currentUser: state.currentUser}))(Protected);
