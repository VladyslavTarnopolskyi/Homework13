import React from "react";
import ReactDOM from "react-dom"
let AlertBox = React.createClass({
    render: function(){
        return(
            <div className={this.props.type}>{this.props.children}</div>
        );
    }
});

let RegForm = React.createClass({
    getInitialState: function(){
        return {
            showAlert: false
        }
    },
    register: function(e){
        e.preventDefault();
        let firstName = this.refs.firstName.value.trim();
        let lastName = this.refs.lastName.value.trim();
        let email = this.refs.email.value.trim();
        
        if ( !firstName || !email) {
            this.setState({showAlert: true});
            return;
        }
        
        alert("Thank YOU " + firstName + " " + lastName);
        
        this.refs.firstName.value = '';
        this.refs.lastName.value = '';
        this.refs.email.value = '';
        
    },
    render: function(){
        return(
            <div>
                <form onSubmit={this.register}>
                    {this.state.showAlert ? <AlertBox type="danger">Fill it out</AlertBox> : null}
                    <div className="form-group">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" className="form-control" placeholder="First Name" ref="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" className="form-control" placeholder="Last Name" ref="lastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" className="form-control" placeholder="Email" ref="email" />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        );
    }
});

ReactDOM.render(<RegForm />, document.getElementById("regForm"));
                        