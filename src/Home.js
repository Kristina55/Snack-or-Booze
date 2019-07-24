import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


/** Homepage
 *
 * Props:
 * - snacks: list of snacks
 * - drinks: same, but drinks
 */

class Home extends Component {
  render() {
    let { snacks, drinks } = this.props;

    return (
      <section className="col-md-8">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3 className="font-weight-bold">
                Welcome to Silicon Valley's premier dive cafe!
              </h3>
            </CardTitle>
            <CardText>
              Our menu includes {snacks.length} snacks
              and {drinks.length} drinks.
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default Home;