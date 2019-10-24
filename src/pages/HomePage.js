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
                        <h1 className="display-3">Portfolio Home page</h1>
                        <Image
                            style={background} className="img-fluid"
                            src="http://www.annettapowell.com/wp-content/uploads/2018/08/20160707-RealStateJump.gif">
                        </Image>
                        <p>Lets login in! </p>
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