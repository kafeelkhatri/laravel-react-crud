import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit";

export default class Index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Link
                            to="/category"
                            className="btn btn-outline-success m-2"
                        >
                            Listing
                        </Link>
                        <Link
                            to="/category/add"
                            className="btn btn-outline-success m-2"
                        >
                            Add
                        </Link>

                        <Route exact path="/category" component={Listing} />
                        <Route exact path="/category/add" component={Add} />
                        <Route
                            exact
                            path="/category/edit/:id"
                            component={Edit}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
