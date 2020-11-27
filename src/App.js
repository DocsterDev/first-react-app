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
                    name="Max"
                    age="33"
                    click={this.switchNameHandler.bind(this, 'Jennifer')}>Stuff In Between</Person>
                <Person
                    name="Mike"
                    age="36" />
            </div>
        );
    }
}

export default App;
