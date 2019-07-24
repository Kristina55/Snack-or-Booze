import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';


/** Form for adding a menu item.
 *
 * Props:
 * - addItem: call this to add item in parent
 * - match: from react-router
 * - location:  ^
 * - history:   ^
 *
 * State:
 * - local state for each field on form
 *
 */

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "snacks",
      name: "",
      description: "",
      recipe: "",
      serve: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let { type, ...data } = this.state;
    this.props.addItem(type, data);
    this.props.history.push("/")
  }

  render() {
    let { type, name, description, recipe, serve } = this.state;

    return (
      <section className="col-md-4">
        <Card>
          <CardBody>

            <CardTitle className="font-weight-bold text-center">
              Add Item
            </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>

            <Form onSubmit={this.handleSubmit}>

              <FormGroup>
                <Label for="type">Type</Label>
                <Input type="select"
                       name="type"
                       id="type" value={type}
                       onChange={this.handleChange}>
                  <option>snacks</option>
                  <option>drinks</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text"
                       name="name"
                       id="name" value={name}
                       onChange={this.handleChange} />
              </FormGroup>

              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea"
                       name="description"
                       id="description"
                       value={description}
                       onChange={this.handleChange} />
              </FormGroup>

              <FormGroup>
                <Label for="recipe">Recipe</Label>
                <Input type="textarea"
                       name="recipe"
                       id="recipe"
                       value={recipe}
                       onChange={this.handleChange} />
              </FormGroup>

              <FormGroup>
                <Label for="serve">Serve</Label>
                <Input type="textarea"
                       name="serve"
                       id="serve"
                       value={serve}
                       onChange={this.handleChange} />
              </FormGroup>

              <Button className="float-right btn btn-outline-light">
                Add Item
              </Button>

            </Form>
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default AddForm;