import React from 'react'
import { Card } from 'react-bootstrap'
import img from '../components/monopoly-man.jpg';


class RealEstateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentValue: = this.props.property.quote * this.props.property.numberOfStocks
                }
    }
    render() {
        const { property } = this.props;
        return (

            console.log("this is RealEstate Card"),
            <Card style={{ width: '12em' , height: '10em'}} className="property">
                <Card.Img variant="top" src={property.img} />
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{property.name}</Card.Title>
                    <Card.Text>{property.desc}</Card.Text>
                    <Card.Text>{property.quote}$</Card.Text>
                    <Card.Text>
                        {/* Current value: {property.quote * property.numberOfStocks}$ */}
                        {/* Current value: {this.state.currentValue}$ */}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}




export default RealEstateCard;