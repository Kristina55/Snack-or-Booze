import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

/** Menu: listing of items (either drinks or snacks)
 *
 * Props:
 * - items: list of snack/drink data objects.
 * - title: "Snacks" or "Drinks"
 *
 */

class Menu extends Component {
  render() {
    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {this.props.title} Menu
            </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>

            <ListGroup>
              {this.props.items.map(item =>
                <Link to={item.id}>
                  <ListGroupItem>{item.name}</ListGroupItem>
                </Link>)}
            </ListGroup>

          </CardBody>
        </Card>
      </section>
    );
  }
}

export default Menu;