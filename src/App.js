/** Snack or Booze main application:
This project includes a node library: json-server, which creates a 
straightforward fully-featured JSON REST API from a JSON file.
The JSON file can be updated when changes are made via POST/PATCH/DELETE.

Two APIs are created, one for creating new data and for loading the data.
Then the state is passed down to other components where it can be used via props.

State:
- snacks: list of snack data objs -- populated via AJAX call
- drinks: same, but for drinks
- isLoading: bool, has data loaded yet?
 */

import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import { fetchItems, addItem } from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import slugify from "slugify";
import AddForm from "./AddForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      snacks: [],
      drinks: []
    };

    this.addItem = this.addItem.bind(this);
  }

  // Load data from backend.

  async componentDidMount() {
    let snacks = await fetchItems("snacks");
    let drinks = await fetchItems("drinks");
    this.setState({ snacks, drinks, isLoading: false });
  }

  // Call API to add item of type "snacks" or "drinks"; update state.

  async addItem(type, { name, description, recipe, serve }) {
    let id = slugify(name, { lower: true });
    let objData = { id, name, description, recipe, serve };
    console.log(this.state);
    await addItem(type, objData);
    this.setState(st => ({
      // in the state there are two types of array (snacks and drinks)
      // spreding the array and adding new object
      [type]: [...st[type], objData]
    }));
  }

  // Show app frame, navbar, and routes
  render() {
    let { snacks, drinks } = this.state;

    if (this.state.isLoading) {
      return <p>Loading &hellip;</p>;
    }

    return (
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home snacks={snacks} drinks={drinks} />}
            />

            <Route
              exact
              path="/snacks/"
              render={() => <Menu items={snacks} title="Snacks" />}
            />
            <Route
              exact
              path="/drinks/"
              render={() => <Menu items={drinks} title="Drinks" />}
            />

            <Route
              path="/snacks/:id"
              render={props => (
                <Item items={snacks} cantFind="/snacks/" {...props} />
              )}
            />
            <Route
              path="/drinks/:id"
              render={props => (
                <Item items={drinks} cantFind="/drinks/" {...props} />
              )}
            />

            <Route
              path="/add/"
              render={props => <AddForm addItem={this.addItem} {...props} />}
            />
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
