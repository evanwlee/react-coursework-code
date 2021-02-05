import React from 'react';
//import './Person.css';

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


const person = (props) => {
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

    return (
        //<StyledDiv>
        <div className={cssClasses.Person}>
            <p onClick={props.click}>I'm a person, my name is {props.name}. I am {props.age} years old. {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        //</StyledDiv>

    );
}

/*
const person = function(){
    return (<h1>I'm a person</h1>);
}
*/

export default person;
//export default Radium(person);