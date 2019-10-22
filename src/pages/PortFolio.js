import React from 'react'
import {Jumbotron, Button, Container} from 'react-bootstrap';

class PortFolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">Portfolio Page</h1>
                        <p>Portfolio Page</p>
                        <p>
                            <Button variant="primary" href="#/">Homepage</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default PortFolio;