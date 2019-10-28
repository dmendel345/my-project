import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Jumbotron, Container, Button, Form, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import emailjs from 'emailjs-com';

class Communication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  comunicate() {
  }

  render() {

    const { activeUser, handleLogout } = this.props;

    if (!activeUser) {
      return <Redirect to="/" />
    }

    return (
      <div>
      <MainNavbar activeUser={activeUser} handleLogout={handleLogout} />
      <Jumbotron>
        <Container>
          <div className="comunicate">
            <Form>
              <Form.Row>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
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
                  <Form.Label>What kind of investore are you.</Form.Label>
                  <Form.Control placeholder="Enter your preferance" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCapital">
                  <Form.Label>Your initial investment</Form.Label>
                  <Form.Control placeholder="Enter you like to invest" />
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
          </div>
          
        </Container>
      </Jumbotron>
      </div>
        );
  }
}

export default Communication;
