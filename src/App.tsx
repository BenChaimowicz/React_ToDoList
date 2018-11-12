import * as React from 'react';
import './App.css';

import ListOfToDo from './components/ListOfTodo/ListOfTodo';
import NewButton from './components/NewButton/NewButton';
import InputListing from './components/InputListing/InputListing';

class App extends React.Component {
  showCreator: boolean;

  state = {
    listings: [],
    showCreator: false,
  }
  public toggleShowInputs = () => {
    const showInputs: boolean = this.state.showCreator;
    this.setState({ showCreator: !showInputs });
  }
  public createListing = (event) => {

  }

  public render() {
    return (
      <div className="pageContainer">
        <h1>My React ToDo List</h1>
        <NewButton
          clicked={this.toggleShowInputs}
          open={this.state.showCreator} />
        {this.state.showCreator === true ?
          <div>
            <InputListing
              clicked={this.createListing(event)}
            />
          </div>
          : null}
        <ListOfToDo />
      </div>
    );
  }
}

export default App;
