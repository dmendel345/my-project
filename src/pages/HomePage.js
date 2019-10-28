import React from 'react'
import { Jumbotron, Button, Container, Image } from 'react-bootstrap';
import MainNavbar from '../components/MainNavbar';
// import logo from '../components/logo.svg';

class HomePage extends React.Component {
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
                        <h2 className="display-3">Get your money working </h2>
                        <Image
                            style={background} className="img-fluid"
                            src="http://www.annettapowell.com/wp-content/uploads/2018/08/20160707-RealStateJump.gif">
                        </Image>
                        <h4>The place to manage your money, Lets login in! </h4>
                        <p>
                            <Button variant="primary" href="#/login">Login </Button>

                            <Button variant="primary" href="#/Signup">SignUp</Button>
                        </p>
                        </Container>
                        </Jumbotron>
            </div>
        );
    }
}

export default HomePage;