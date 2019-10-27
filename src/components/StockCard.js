import React from 'react'
import { Card } from 'react-bootstrap'
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
            <Card className="stock">
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
        );
    }
}




export default StockCard;