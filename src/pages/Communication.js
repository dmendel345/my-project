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

  comunicate() {
  }

  render() {

    const { activeUser, handleLogout } = this.props;
    var background = {backgroundSize : 'auto'};
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
          <div className="comunicate">
          <Image style={background} className="img-fluid" 
          src="https://wallpapercave.com/wp/wp2106900.jpg">
          </Image>
            <Form style={textStyle1}>
              <Form.Row>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email@email.com" />
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
                  <Form.Control placeholder="300,000 $" />
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="I want to get rich !" />
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
