import React from 'react'
import { Card, Jumbotron, Container } from 'react-bootstrap'
// import img from '../components/dollar-money-icon.jpg';


class StockCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentValue: = this.props.stock.quote * this.props.stock.numberOfStocks
        }
    }
    render() {
        const { stock } = this.props;
        return (
            console.log("this is Portfolio Card"),
            <Jumbotron>
                <Container>
                    <Card style={{ width: '12em', height: '10em' }} className="stock">
                        <Card.Img variant="top" src={stock.img} />
                        {/* <Card.Img variant="top" src={img} /> */}
                        <Card.Body>
                            <Card.Title>{stock.name}</Card.Title>
                            <Card.Text>{stock.desc}</Card.Text>
                            <Card.Text>{stock.quote}$</Card.Text>
                            <Card.Text>
                                Current value: {stock.quote * stock.numberOfStocks}$
                        {/* Current value: {this.state.currentValue}$ */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
        );
    }
}




export default StockCard;