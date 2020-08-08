import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Slider from "./Slider";
import "./Images/hero_right.png";
import "./home.css";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={6} style={{ margin: "auto" }}>
                            <h5 style={{ fontSize: 50, marginLeft: 50 }}>
                                Media Heading
                            </h5>
                            <p style={{ marginLeft: 50 }}>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin
                                commodo. Cras purus odio, vestibulum in
                                vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                            </p>
                            <Button
                                style={{ marginLeft: 50 }}
                                variant="success"
                            >
                                Click Me
                            </Button>
                        </Col>
                        <Col sm={6}>
                            <img
                                style={{ margin: "20px auto" }}
                                src="./Images/hero_right.png"
                                alt="Generic placeholder"
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ margin: "100px auto" }}>
                    <Row>
                        <Col sm={12} lg={4} md={6}>
                            <Card
                                className="card-hover"
                                style={{
                                    width: "18rem",
                                    boxShadow: "0 10px 15px rgba(25,25,25,0.1)",
                                    textAlign: "center"
                                }}
                            >
                                <AccessAlarmIcon
                                    style={{
                                        margin: "20px auto",
                                        fontSize: 75
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} lg={4} md={6}>
                            <Card
                                className="card-hover"
                                style={{
                                    width: "18rem",
                                    boxShadow: "0 10px 15px rgba(25,25,25,0.1)",
                                    textAlign: "center"
                                }}
                            >
                                <AccountBalanceIcon
                                    style={{
                                        margin: "20px auto",
                                        fontSize: 75
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} lg={4} md={6}>
                            <Card
                                className="card-hover"
                                style={{
                                    width: "18rem",
                                    boxShadow: "0 10px 15px rgba(25,25,25,0.1)",
                                    textAlign: "center"
                                }}
                            >
                                <AddShoppingCartIcon
                                    style={{
                                        margin: "20px auto",
                                        fontSize: 75
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div style={{ marginTop: 25 }}>
                    <Slider />
                </div>
            </div>
        );
    }
}
