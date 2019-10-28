import React from 'react'
import { Jumbotron, Button, Container, Image } from 'react-bootstrap';
import './Communication.css';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var background = {backgroundSize : 'auto'};
        var textStyle1 = {
          position: 'absolute', 
          top: '93%', 
          left: '35%',
          color: 'red',

        };

        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">SignUp Page</h1>
                        <Image
                            style={background} className="img-fluid"
                            src="https://www.pinpng.com/pngs/m/577-5777098_follow-true-north-nomad-and-sign-up-button.png">
                        </Image>
                        <h3 style={textStyle1} >Call 911 for help :)</h3>
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