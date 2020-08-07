import React, { Component } from "react";
import axios from "axios";
import SuccesAlert from "./SuccesAlert";
import ErrorAlert from "./ErrorAlert";

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            category_name: "",
            alert_message: ""
        };
    }

    componentDidMount() {
        axios
            .get(
                "http://laravel-react.con/api/category/" +
                    this.props.match.params.id +
                    "/edit"
            )
            .then(response => {
                this.setState({ category_name: response.data.name });
            });
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
            .put(
                "http://laravel-react.con/api/category/" +
                    this.props.match.params.id,
                category
            )
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
                    <SuccesAlert message={"Record Updated Successfully"} />
                ) : null}
                {this.state.alert_message == "error" ? (
                    <ErrorAlert message={"Error occured while updating"} />
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
