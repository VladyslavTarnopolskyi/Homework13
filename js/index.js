"use strict";

let AlertBox = React.createClass({
    displayName: "AlertBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "alert alert-" + this.props.type },
            this.props.children
        );
    }
});

let RegForm = React.createClass({
    displayName: "RegForm",

    getInitialState: function getInitialState() {
        return {
            showAlert: false
        };
    },
    register: function register(e) {
        e.preventDefault();
        let         firstName = this.refs.firstName.value.trim();
        let         lastName = this.refs.lastName.value.trim();
        let         email = this.refs.email.value.trim();

        if (!firstName || !email) {
            this.setState({ showAlert: true });
            return;
        }

        alert("Thank YOU " + firstName + " " + lastName);

        this.refs.firstName.value = '';
        this.refs.lastName.value = '';
        this.refs.email.value = '';
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                { onSubmit: this.register },
                this.state.showAlert ? React.createElement(
                    AlertBox,
                    { type: "danger" },
                    "Fill it out"
                ) : null,
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                        "label",
                        { htmlFor: "firstName" },
                        "First Name: "
                    ),
                    React.createElement("input", { type: "text", className: "form-control", placeholder: "First Name", ref: "firstName" })
                ),
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                        "label",
                        { htmlFor: "lastName" },
                        "Last Name: "
                    ),
                    React.createElement("input", { type: "text", className: "form-control", placeholder: "Last Name", ref: "lastName" })
                ),
                React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                        "label",
                        { htmlFor: "email" },
                        "Email: "
                    ),
                    React.createElement("input", { type: "email", className: "form-control", placeholder: "Email", ref: "email" })
                ),
                React.createElement("input", { type: "submit", className: "btn btn-primary", value: "Submit" })
            )
        );
    }
});

ReactDOM.render(React.createElement(RegForm, null), document.getElementById("regForm"));