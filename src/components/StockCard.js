import React from 'react'
import { Card } from 'react-bootstrap'


class StockCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        const { stock } = this.props;
        return (
            <Card className="stock">
                <Card.Img variant="top" src={stock.img} />
                <Card.Body>
                    <Card.Title>{stock.name}</Card.Title>
                    <Card.Text>
                        {stock.desc}
                        <div>
                        </div>
                        {stock.quote}$
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}




export default StockCard;