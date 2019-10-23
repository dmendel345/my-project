import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Jumbotron, Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import StockCard from '../components/StockCard'


class PortFolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newStockImg: {
                file: null,
                URL: ""
            }
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createStock = this.createStock.bind(this);
        this.imgChange = this.imgChange.bind(this);


        this.nameInput = React.createRef();
        this.descInput = React.createRef();
        this.quoteInput = React.createRef();
        this.imgInput = React.createRef();
    }

    imgChange(ev) {

        let newStockImg = {};
        newStockImg.file = ev.target.files[0];
        if (newStockImg.file) {
            newStockImg.URL = URL.createObjectURL(newStockImg.file);
        } else {
            newStockImg.URL = "";
        }

        this.setState({newStockImg});
    }


    openModal() {
        this.setState({ showModal: true })
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    createStock() {
        const newStock = {
            name: this.nameInput.current.value,
            desc: this.descInput.current.value,
            quote: this.quoteInput.current.value,
            img: this.state.newStockImg.URL,
        }

        this.props.addStock(newStock);
        this.closeModal();
    }

    render() {
        const { activeUser, handleLogout, stocks } = this.props;
        const { showModal, newStockImg } = this.state;
        //const showModal = this.state.showModal;

        if (!activeUser) {
            return <Redirect to="/" />
        }

        const stocksCards = stocks.map(stock => <Col key={stock.id} lg="3" md="6"><StockCard stock={stock} /></Col>)

        return (
            <div>
                <MainNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron>
                    <Container>
                    <div className="stocks-header">
                        <h1>{activeUser.fname}'s Stocks</h1>
                        <Button variant="primary" onClick={this.openModal}>New Stock</Button>
                    </div>
                    <Row>
                        {stocksCards}
                    </Row>
                </Container>


                <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>New Stock</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.nameInput} type="text" placeholder="Stock name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Description
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.descInput} type="text" placeholder="Stock description" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Quote
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.quoteInput} type="text" placeholder="Stock quote" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Image
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="file" placeholder="Stock image URL" accept="image/*" onChange={this.imgChange}/>
                                </Col>
                                <Col sm={4}>
                                    <Image src={newStockImg.URL} fluid/>
                                </Col>
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.createStock}>
                            Create Stock
                        </Button>
                    </Modal.Footer>
                </Modal>
                <p>
                            <Button variant="primary" href="#/">Homepage</Button>
                        </p>
                        </Jumbotron>

            </div>
        );
    }
}

export default PortFolio;