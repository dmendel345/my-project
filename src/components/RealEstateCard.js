import React from 'react'
import { Card } from 'react-bootstrap'
import img from '../components/dollar-money-icon.jpg';


class RealEstateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentValue: = this.props.asset.quote * this.props.asset.numberOfStocks
                }
    }
    render() {
        const { asset } = this.props;
        return (
            <Card className="asset">
                <Card.Img variant="top" src={asset.img} />
                {/* <Card.Img variant="top" src={img} /> */}
                <Card.Body>
                    <Card.Title>{asset.name}</Card.Title>
                    <Card.Text>{asset.desc}</Card.Text>
                    <Card.Text>{asset.quote}$</Card.Text>
                    <Card.Text>
                        Current value: {asset.quote * asset.numberOfStocks}$
                        {/* Current value: {this.state.currentValue}$ */}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}




export default RealEstateCard;