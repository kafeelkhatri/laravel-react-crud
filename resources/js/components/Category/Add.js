import React, { Component } from "react";
import axios from "axios";
import SuccesAlert from "./SuccesAlert";
import ErrorAlert from "./ErrorAlert";

export default class Add extends Component {
    constructor() {
        super();
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            category_name: "",
            alert_message: ""
        };
    }
    onChangeName(e) {
        this.setState({
            category_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const category = {
            category_name: this.state.category_name
        };

        axios
            .post("http://laravel-react.con/api/category", category)
            .then(res => {
                this.setState({ alert_message: "success" });
            })
            .catch(error => {
                this.setState({ alert_message: "error" });
            });
    }

    render() {
        return (
            <div>
                {this.state.alert_message == "success" ? (
                    <SuccesAlert message={"Record Added Successfully"} />
                ) : null}
                {this.state.alert_message == "error" ? (
                    <ErrorAlert message={"Error occured while adding"} />
                ) : null}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="category">Category Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            onChange={this.onChangeName}
                            value={this.state.category_name}
                            placeholder="Enter Category"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
