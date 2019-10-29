import React from 'react'
import { Jumbotron, Container, Button, Form, Col, Image } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import './Communication.css';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var background = { backgroundSize: 'auto' };
        var textStyle1 = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            color: 'Black'

        };

        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">SignUp Page</h1>
                        <p>Enter your details and we'll get back to you</p>
                        <div className="communicate">
                            <Image style={background} className="img-fluid"
                                src="https://wallpapercave.com/wp/wp2106900.jpg">
                            </Image>
                            <Form style={textStyle1}>
                                <Form.Row>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" required placeholder="email@email.com" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCapital">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control type="number" placeholder="555-444-333" />
                                    </Form.Group>

                                </Form.Row>



                                <Form.Group controlId="formGridFName">
                                    <Form.Label>Your First Name</Form.Label>
                                    <Form.Control placeholder="Israel" />
                                </Form.Group>

                                <Form.Group controlId="formGridLName">
                                    <Form.Label>Your Last Name</Form.Label>
                                    <Form.Control placeholder="Israeli" />
                                </Form.Group>

                                <Form.Row>

                                    <Form.Group as={Col} controlId="formGridInvesrtorType">
                                        <Form.Label>What kind of investor are you ?</Form.Label>
                                        <Form.Control placeholder="Example - I hate risk" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCapital">
                                        <Form.Label>Your initial investment</Form.Label>
                                        <Form.Control type="number" placeholder="300,000 $" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="I want to get rich !" />
                                </Form.Group>

                                <Button variant="primary" type="button" href="#/thankyoupage">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <p>
                            <Button variant="primary" href="#/">Homepage</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default SignUp;