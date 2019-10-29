import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Jumbotron, Container, Button, Form, Col, Image } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Communication.css';

class Communication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  communicate() {
  }

  render() {

    const { activeUser, handleLogout } = this.props;
    var background = { backgroundSize: 'auto' };
    var textStyle1 = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      color: 'Black'
    };

    if (!activeUser) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <MainNavbar activeUser={activeUser} handleLogout={handleLogout} />
        <Jumbotron>
          <Container>
            <h1 className="display-3">Contact us today.</h1>
            <div className="communicate">
              <Image style={background} className="img-fluid"
                src="https://wallpapercave.com/wp/wp2106900.jpg">
              </Image>
              <Form style={textStyle1} >
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
                  <Form.Group as={Col} controlId="formGridCapital">
                    <Form.Label>What do you need ?</Form.Label>
                    <Form.Control placeholder="Make changes in my portfolio" />
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Call me now !" />
                </Form.Group>

                <Button variant="primary" type="button" href="#/thankyoupage">
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
