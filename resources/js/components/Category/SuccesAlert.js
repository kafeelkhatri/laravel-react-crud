import React, { Component } from "react";

export default class SuccesAlert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    {this.props.message}
                </div>
            </div>
        );
    }
}
