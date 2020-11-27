import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
   state = {
       persons: [
           { name: 'Max', age: '67' },
           { name: 'Jeff', age: '37' },
           { name: 'Stephanie', age: '34' }
       ]
   }

   switchNameHandler = (newName) => {
       this.setState({
           persons: [
               { name: newName, age: '37' },
               { name: 'Jeff', age: '39' },
               { name: 'Stephanie', age: '34' }
           ]
       })
   }

   nameChangedHandler = (event) => {
       console.log(event.target.value);
       this.setState( {
           persons: [
               { name: 'Max', age: '37' },
               { name: event.target.value, age: '39' },
               { name: 'Stephanie', age: '34' }
           ]
       })
   }

    render() {
        return (
            <div className="App">
                <h1>Testing</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={() => this.switchNameHandler('Sam')} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Jennifer')}
                    changed={this.nameChangedHandler}>Stuff In Between</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
