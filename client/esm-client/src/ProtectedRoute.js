import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class ProtectedRoute extends React.Component {
    

    render() {
        const Component = this.props.component;
        return this.props.isAuthenticated ? (
            <Component userInfo ={this.props.userInfo}/>
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        userInfo: state.auth.user,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        // sendLoginRequest: (values) => dispatch(loginUser(values)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);