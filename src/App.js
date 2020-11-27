import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
   state = {
       persons: [
           {id: 'd3fr', name: 'Max', age: '67' },
           {id: 'd5fr', name: 'Jeff', age: '37' },
           {id: 'd6fr', name: 'Stephanie', age: '34' }
       ],
       showPersons: false
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

   nameChangedHandler = (event, id) => {
        console.log(event.target.value, id);
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personIndex] } // Create a new copy of the Person object
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        });
   }

   togglePersonsHandler = () => {
        const isShowing = this.state.showPersons;
        this.setState({ showPersons: !isShowing });
   }

   deletePersonHandler = (personIndex) => {
       //const persons = this.state.persons.slice(); // Create a copy of the original state
       const persons = [...this.state.persons];
       persons.splice(personIndex, 1);
       this.setState({persons: persons});
   }

    render() {

        let persons = null;

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}/>
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Testing</h1>
                {/*<button onClick={this.switchNameHandler.bind(this, 'Mike')}>Switch Name</button>*/}
                <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
