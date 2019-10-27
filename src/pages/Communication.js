import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Jumbotron, Container, Image } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'



  class Communication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var background = { backgroundSize: 'auto' };
        const { activeUser, handleLogout } = this.props;

        return (
            <div>
                <MainNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">Communication</h1>
                        <h3 className="display-6">Request from your Portfolio manager.</h3>
                        <Image
                            style={background} className="img-fluid"
                            src="https://image.freepik.com/free-vector/communication-information-website-graphic_53876-27044.jpg">
                        </Image>
                        <p>Lets Talk! </p>
                        {/* <p>
                            <Button variant="primary" href="#/login">Login </Button>

                            <Button variant="primary" href="#/Signup">SignUp</Button>
                        </p> */}
                        </Container>
                        </Jumbotron>
            </div>
        );
    }
}

export default Communication;