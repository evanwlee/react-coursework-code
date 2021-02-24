
import React from 'react';
import cssClasses from './Cockpit.css'

const Cockpit = (props) => {

    let btnClass = [cssClasses.Cockpit.Button];



    let classes = [];

    if(props.people.length <= 2){
      classes.push('red');
    }
    if(props.people.length <=1){
      classes.push('bold');
    }
    

    return (
        <div className={cssClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')} >This is working</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>Show People</button>
        </div>
    )
}



export default Cockpit

