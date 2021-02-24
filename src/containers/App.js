import React, { Component } from 'react';
//css modules - requires config change after eject
import cssClasses from './App.css';
//import Person from '../components/Person/Person';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'

//import Radium, {StyleRoot} from 'radium';

class App extends Component {
  constructor(props){
    super(props);
    console.log('App JS constructor');
    this.state = {
      people: [
        { id: 'safd', name: 'Evan', age: Math.floor(Math.random() * 30) },
        { id: 'safdd', name: 'Jake', age: Math.floor(Math.random() * 30) },
        { id: 'safdf', name: 'Jen', age: Math.floor(Math.random() * 30) }
      ],
      showPeople: false
    }

  };

  static getDerivedStateFromProps(props, state){
    //create and update
    console.log('App.js getDerivedStateFromProps',props)
    return state;
  }

  componentWillMount(){
    //depricated
  }

  componentDidMount(){
    //create
    console.log('App.js did mount');
  }

  shouldComponentUpdate(nextProps,nextState){
    //update - may cancel
    console.log('App.js should Update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    //update - good to get scrolling position
    console.log('App.js get snapshot to ');
    return null;
  }

  componentDidUpdate(){
    //Http request async
    //dont update state sync to aviod refresh

  }

  componentWillUnmount(){
    ///do clean-up if elements are removed for example
  }



  // switchNameHandler = (newName) => {
  //   this.setState(
  //     {
  //       people: [
  //         { id: 'safd', name: newName, age: Math.floor(Math.random() * 30) },
  //         { id: 'safdd', name: 'Jake', age: Math.floor(Math.random() * 30) },
  //         { id: 'safdf', name: 'Jen', age: this.state.people[2].age }
  //       ],
  //       showPeople: this.state.showPeople
  //     }
  //   );
  // };

  nameChangedHandler = (event, id, index) => {
    let personC = this.state.people.find(person => {
      return person.id === id;
    })

    // //clonw with spread to aviod modify by reference
    const person = {
      ...personC
    };

    //or
    //const person = Object.assign({},this.state.people[index]);

    //or
    // const person = {
    //   ...this.state.person[index]
    // };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[index] = person;

    this.setState(
      { people: people }
    );
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    console.log(doesShow);
    this.setState({ showPeople: !doesShow })
  }

  deletePersonHandler = (index) => {
    console.log('delete was called')
    //clone
    let people = this.state.people.slice();
    //or
    //spread
    people = [...this.state.people];

    people.splice(index, 1);

    this.setState({ people: people })
  }

  render() {
    console.log('App.js renedr')
    let people = null;

    if (this.state.showPeople) {
      people = <People people={this.state.people}
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler}></People>
    }

    return (
      <div className={cssClasses.App}>
        <Cockpit 
          title={this.props.appTitle}
          people={this.state.people}
          showPeople={this.state.showPeople}
          clicked={this.tooglePersonHandler}></Cockpit>
        {people}
      </div>
    );
  }
}

//export default Radium(App);
export default App;
