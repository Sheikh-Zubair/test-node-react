import React, { Component } from 'react';
import { addUser } from '../../actions/index';
import { connect } from 'react-redux';

class LoginForm extends Component {
    componentDidUpdate(){
        this.errorMessage();
    }
    formSubmit(event) {
        event.preventDefault();
        const user = {
            username: event.target.username.value,
            password: event.target.psw.value
        };
        this.props.addUser(user);  
        this.props.history.push("/");
    }
    errorMessage() {
        if (this.props.user === 0) {
            document.querySelector('#errormsg').innerHTML = 'Username or Password is incorrect';
        }
        else {
            document.querySelector('#errormsg').innerHTML = '';
        }
    }
    render() {
        return (
                <div className="row" style={{height: "400px"}}>
                    <form onSubmit={this.formSubmit.bind(this)} className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="firstname">Username</label>
                            <input className="form-control" type="text" name="username" id="username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="psw">Password</label>
                            <input className="form-control" type="password" name="psw" id="psw" />
                        </div>
                        <div className="text danger" id="errormsg"></div>
                        <input className="btn btn-default" type="submit" />
                    </form>
                </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { addUser })(LoginForm);