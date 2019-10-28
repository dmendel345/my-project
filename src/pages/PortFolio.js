import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Jumbotron, Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import StockCard from '../components/StockCard'
import { Pie } from 'react-chartjs-2'


class PortFolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newStockImg: {
                file: null,
                URL: ""
            },
            chartData: {
                labels: [
                    'High',
                    'Medium',
                    'Low'
                ],
                datasets: [{
                    data: this.getChartData(),
                    backgroundColor: [
                    '#FF6384',
                    '#faff63',
                    '#36A2EB',
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#30302f',
                    '#36A2EB',
                    ]
                }]
            }
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createStock = this.createStock.bind(this);
        this.imgChange = this.imgChange.bind(this);
        this.getChartData = this.getChartData.bind(this);


        this.nameInput = React.createRef();
        this.descInput = React.createRef();
        this.quoteInput = React.createRef();
        this.numberOfStocksInput = React.createRef();
        this.riskValueInput = React.createRef();
        this.imgInput = React.createRef();
    }

    getChartData() {
        let high = 0;
        let medium = 0;
        let low = 0;

        this.props.stocks.forEach(stock => {
            if (stock.riskValue === 1) {
                low++;
            } else if (stock.riskValue === 2) {
                medium++;
            } else  {
                high++;
            }

       });

        // return [high, low];
        return [high, medium, low];
    }

    componentDidUpdate(prevProps, prevState) {
        // It is important that if you call setStat in componentDidUpdate
        // it must be inside an if statemnet to avoid an infiniate loop
        if (prevProps.stocks != this.props.stocks) {
            // update chart data
            const  chartData = {
                labels: [
                    'High',
                    'Medium',
                    'Low'
                ],
                datasets: [{
                    data: this.getChartData(),
                    backgroundColor: [
                        '#FF6384',
                        '#faff63',
                        '#36A2EB',
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#30302f',
                        '#36A2EB',
                    ]
                }]
            };

            this.setState({chartData});
        }
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
            numberOfStocks: this.numberOfStocksInput.current.value,
            riskValue: this.riskValueInput.current.value,
            img: this.state.newStockImg.URL,
        }

        this.props.addStock(newStock);
        this.closeModal();
    }

    render() {
        const { activeUser, handleLogout, stocks } = this.props;
        const { showModal, newStockImg, chartData } = this.state;
        
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
                        <h1>{activeUser.fname}'s Stocks portfolio.</h1>
                        <Button variant="primary" onClick={this.openModal}>New Stock</Button>
                    </div>
                    <Pie data={chartData} />
                    <Row>
                        {stocksCards}
                    </Row>
                    {/* <Row>
                        Total Value: 
                    </Row> */}
                </Container>


                <Modal show={showModal} onHide={this.closeModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>New Stock</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail" >
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control required ref={this.nameInput} type="text" placeholder="Stock name" />
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
                                    <Form.Control required ref={this.quoteInput} type="text" placeholder="Stock quote" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Number of Stocks
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control required ref={this.numberOfStocksInput} type="text" placeholder="Number of Stocks" />
                                </Col>
                            </Form.Group>

                            {/* <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    What is the stock risk 1 = low / 2 = medium / 3 = high
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.riskValueInput} type="text" placeholder="What is the stock risk" />
                                </Col>
                            </Form.Group> */}

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    What is this stock risk ?
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.riskValueInput} as="select" type="select" placeholder="What is the stock risk">
                                       
                                        <option value="1">low</option>
                                        <option value="2">medium</option>
                                        <option value="3">high</option>
                                       
                                     </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Image, this is optional
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

export default PortFolio;