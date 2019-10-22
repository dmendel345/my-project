import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">SignUp Page</h1>
                        <p>SignUp Page</p>
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