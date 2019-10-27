import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Jumbotron, Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import RealEstateCard from '../components/RealEstateCard'


class RealEstate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newAssetImg: {
                file: null,
                URL: ""
            }
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createAsset = this.createAsset.bind(this);
        this.imgChange = this.imgChange.bind(this);


        this.nameInput = React.createRef();
        this.descInput = React.createRef();
        this.quoteInput = React.createRef();
        this.numberOfRealEstateInput = React.createRef();
        this.imgInput = React.createRef();
    }

    imgChange(ev) {

        let newAssetImg = {};
        newAssetImg.file = ev.target.files[0];
        if (newAssetImg.file) {
            newAssetImg.URL = URL.createObjectURL(newAssetImg.file);
        } else {
            newAssetImg.URL = "";
        }

        this.setState({newAssetImg});
    }


    openModal() {
        this.setState({ showModal: true })
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    createAsset() {
        const newAsset = {
            name: this.nameInput.current.value,
            desc: this.descInput.current.value,
            quote: this.quoteInput.current.value,
            numberOfRealEstate: this.numberOfRealEstateInput.current.value,
            img: this.state.newAssetImg.URL,
        }

        this.props.addAsset(newAsset);
        this.closeModal();
    }

    render() {
        const { activeUser, handleLogout, stocks } = this.props;
        const { showModal, newAssetImg } = this.state;
        //const showModal = this.state.showModal;

        if (!activeUser) {
            return <Redirect to="/" />
        }

        const realEstateCards = stocks.map(asset => <Col key={asset.id} lg="3" md="6"><RealEstateCard asset={asset} /></Col>)

        return (
            <div>
                <MainNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron>
                    <Container>
                    <div className="RealEstate-header">
                        <h1>{activeUser.fname}'s Real Estate.</h1>
                        {/* <Button variant="primary" onClick={this.openModal}>New property</Button> */}
                    </div>
                    <Row>
                        {realEstateCards}
                    </Row>
                    <Row>
                        Total Value: 
                    </Row>
                </Container>


                <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>New Asset</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.nameInput} type="text" placeholder="Asset name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Description
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.descInput} type="text" placeholder="Asset description" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Quote
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.quoteInput} type="text" placeholder="Asset quote" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Number of Real Estates
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.numberOfRealEstateInput} type="text" placeholder="Number of Real Estate" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Image
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="file" placeholder="Asset image URL" accept="image/*" onChange={this.imgChange}/>
                                </Col>
                                <Col sm={4}>
                                    <Image src={newAssetImg.URL} fluid/>
                                </Col>
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.createAsset}>
                            Create Asset
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* <div>
                    <p>
                            <Button variant="primary" href="#/">Homepage</Button>
                        </p>
                        </div> */}
                        </Jumbotron>

            </div>
        );
    }
}

export default RealEstate;