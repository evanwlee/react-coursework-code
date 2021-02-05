import React, { Component } from 'react';
//css modules - requires config change after eject
import cssClasses from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

//import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    people : [
      {id:'safd',name:'Evan', age:Math.floor(Math.random()*30)},
      {id:'safdd',name:'Jake', age:Math.floor(Math.random()*30)},
      {id:'safdf',name:'Jen', age:Math.floor(Math.random()*30)}
    ],
    showPeople : false
  };

  switchNameHandler = (newName) => {
    this.setState(
      {people : [
        {id:'safd',name: newName, age:Math.floor(Math.random()*30)},
        {id:'safdd',name:'Jake', age:Math.floor(Math.random()*30)},
        {id:'safdf',name:'Jen', age:this.state.people[2].age}
      ],
      showPeople : this.state.showPeople}
    );
  };

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
      {people : people}
    );
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    console.log(doesShow);
    this.setState({showPeople:!doesShow})
  }

  deletePersonHandler  = (index) => {
    console.log('delete was called')
    //clone
    let people = this.state.people.slice();
    //or
    //spread
    people = [...this.state.people];

    people.splice(index, 1);

    this.setState({people: people})
  }

  render() {
    // const STYLE = {
    //   backgroundColor: 'green',
    //   textColor : 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   //this is by Radium
    //   ':hover': {backgroundColor : 'lightgreen', color:'black'}
    // };

    let btnClass = [cssClasses.Button];



    let classes = [];

    if(this.state.people.length <= 2){
      classes.push('red');
    }
    if(this.state.people.length <=1){
      classes.push('bold');
    }
    
    let people = null;

    if( this.state.showPeople ){
      people = (
        <div className="people">
        {
          this.state.people.map((person, index) =>{
            return <ErrorBoundary key={person.id}>
              <Person 
              name={person.name} 
              age={person.age}
              changed={(event)=> this.nameChangedHandler(event, person.id, index)}
              click={()=> this.deletePersonHandler(index)}/>
            </ErrorBoundary>
          })
        }
        </div>
      )
      // STYLE.backgroundColor = 'red';
      // STYLE[':hover'] = {
      //   backgroundColor : 'pink',
      //   color : 'purple'
      // }

      btnClass.push(cssClasses.Red)
    }

 //Radium version
 /*
    return (
      <StyleRoot>
      <div className="App">
        <p className={classes.join(' ')} >This is working</p>
        <button onClick={this.switchNameHandler.bind(this,'Fred')}>Switch Ages</button>
        <button style={STYLE} onClick={this.tooglePersonHandler}>Show People</button>
        {people}
      </div>
      </StyleRoot>
    );
  }
  */

 return (
  <div className={cssClasses.App}>
    <p className={classes.join(' ')} >This is working</p>
    <button className={cssClasses.Button} onClick={this.switchNameHandler.bind(this,'Fred')}>Switch Ages</button>
    <button className={btnClass.join(' ')} onClick={this.tooglePersonHandler}>Show People</button>
    {people}
  </div>
);
}
}

//export default Radium(App);
export default App;
