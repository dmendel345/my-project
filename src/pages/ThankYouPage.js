import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Jumbotron, Container, Button, Image } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import './Communication.css';


class ThankYouPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { activeUser, handleLogout } = this.props;
    var background = { backgroundSize: 'auto' };

    return (

      <div>
        <MainNavbar activeUser={activeUser} handleLogout={handleLogout} />
        <Jumbotron>
          <Container>
            <h1 className="display-3">Thank you for contacting Us.</h1>

            <div>
              <Image style={background} className="img-fluid"
                src="https://www.tablein.com/wp-content/uploads/2018/09/thankyou.png">
              </Image>
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

export default ThankYouPage;