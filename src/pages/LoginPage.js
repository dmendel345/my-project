import React from 'react'
import { Jumbotron, Button, Container, Form, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './Communication.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidLogin: false,
            successLogin: false
        }

        this.emailInput = React.createRef();
        this.pwdInput = React.createRef();

        this.login = this.login.bind(this);
    }

    login() {

        const { users } = this.props;
        let newActiveUser = null;
        for (let i = 0; i < users.length && !newActiveUser; i++) {
            if (users[i].email === this.emailInput.current.value &&
                users[i].pwd === this.pwdInput.current.value) {
                newActiveUser = users[i];
            }
        }

        if (newActiveUser) {
            this.props.handleLogin(newActiveUser);
            this.setState({ successLogin: true });

        } else {
            this.setState({ invalidLogin: true });
        }


    }

    render() {

        if (this.state.successLogin) {
            return <Redirect to="/portfolio" />
        }

        return (
            <Jumbotron>
            <Container>
            <div className="login">

                        <h1>Login to your Portfolio</h1>
                        <p>or <a href="#/signup">create an account</a></p>
                        <Alert variant="danger" show={this.state.invalidLogin}>
                            Invalid email or password!
                </Alert>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={this.emailInput} type="email" placeholder="Enter email " />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                        </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={this.pwdInput} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="success" type="button" block onClick={this.login}>
                                Login
                    </Button>
                        </Form>
                        </div>
                    </Container>
                </Jumbotron>

        );
    }
}

// class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     render() {
//         return (
//             <div>
//                 <Jumbotron>
//                     <Container>
//                         <h1 className="display-3">Login Page</h1>
//                         <p>Login Page</p>


//                         <p>
//                             <Button variant="primary" href="#/portfolio">portfolio</Button>
//                         </p>
//                     </Container>
//                 </Jumbotron>
//             </div>
//         );
//     }
// }

export default LoginPage;