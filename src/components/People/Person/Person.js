import React, {Component} from 'react';
//import { render } from 'react-dom';
//import './Person.css';

import Aux from '../../../hoc/Auxillary'

import cssClasses from './Person.css';
//import Radium, {StyleRoot} from 'radium';
//import styled from 'styled-components';

//style-components - template literal/tagged template
// const StyledDiv =  styled.div`    width: 60%;
// margin: 16px;
// border: 1px solid black;
// padding: 16px;
// text-align: center;
// @media (min-width: 700px) {
//     width : 400px
// }`


//const person = (props) => {
class Person extends Component{
    //Radium Style - jS based
    // const style = {
    //     '@media (min-width: 500px)' :{
    //         width : '400px'
    //     }
    // };
    // return (
    //     <div className='Person' style={style}>
    //         <p onClick={props.click}>I'm a person, my name is {props.name}. I am {props.age} years old. {props.children}</p>
    //         <input type="text" onChange={props.changed} value={props.name}></input>
    //     </div>

    // );

    static getDerivedStateFromProps(props, state){
        console.log('person.js getDirevcedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProp, nextState){
        //if checking all properties then extend PureComponent,
        //dont create giant if
        console.log('person.js should componenet update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log('person.js snap before');
        return {snapshot:'from here'};
    }

    componentDidUpdate(prevProp,prevState, snapshot){
        console.log(snapshot)
        console.log('person.js did update');
    }
    
    render(){
        console.log('Person.js Render');
        return (
            //<StyledDiv>
            
            <div className={cssClasses.Person}>
                <p onClick={this.props.click}>I'm a person, my name is this.{this.props.name}. I am {this.props.age} years old. {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
            //</StyledDiv>
    
        );

        //return adjecent elements can also use React.Fragment instead of custom Aux
        // return (
            
        //     <Aux>
        //         <p onClick={this.props.click}>I'm a person, my name is this.{this.props.name}. I am {this.props.age} years old. {this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        //         </Aux>
    
        // );
    }

}

/*
const person = function(){
    return (<h1>I'm a person</h1>);
}
*/

//export default person;
//export default Radium(person);
export default React.memo(Person);
//Memo allows child components to only change when needed
//onbly use if parent control changes do not impact child, performance hit on checksn