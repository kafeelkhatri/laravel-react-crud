import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

export default class Listing extends Component {
    constructor() {
        super();
        this.handlePageChange = this.handlePageChange.bind(this);
        this.state = {
            categories: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 3
        };
    }

    componentDidMount() {
        axios.get("http://laravel-react.con/api/category").then(response => {
            this.setState({
                categories: response.data.data,
                itemsCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total,
                activePage: response.data.current_page
            });
        });
    }

    handlePageChange(pageNumber) {
        axios
            .get("http://laravel-react.con/api/category?page=" + pageNumber)
            .then(response => {
                this.setState({
                    categories: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });
    }

    onDelete(category_id) {
        axios
            .delete(
                "http://laravel-react.con/api/category/delete/" + category_id
            )
            .then(response => {
                var categories = this.state.categories;
                for (var i = 0; i < categories.length; i++) {
                    if (categories[i].id == category_id) {
                        categories.splice(i, 1);
                        this.setState({ categories: categories });
                    }
                }
            });
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.categories.map(category => {
                            return (
                                <tr key={category.id}>
                                    <th scope="row">{category.id}</th>
                                    <td>{category.name}</td>
                                    <td>
                                        {category.active == 1
                                            ? "Active"
                                            : "In Active"}
                                    </td>
                                    <td>{category.created_at}</td>
                                    <td>{category.updated_at}</td>
                                    <td>
                                        <Link
                                            className="btn btn-primary m-2"
                                            to={`/category/edit/${category.id}`}
                                        >
                                            Edit
                                        </Link>{" "}
                                        <a
                                            className="btn btn-primary"
                                            href="#"
                                            onClick={() =>
                                                this.onDelete(category.id)
                                            }
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div>
                    <div className="d-flex justify-content-center">
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={this.state.pageRangeDisplayed}
                            onChange={this.handlePageChange.bind(this)}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
