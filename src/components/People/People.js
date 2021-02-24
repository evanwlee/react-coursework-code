import React, {useEffect} from 'react';

import Person from './Person/Person';

const people = (props) => {
      //can have more than one
      useEffect(()=>{
            //runs all the time....need to concentrate on desired
            console.log('[People.js] useEffect')
            //https request ....
            //can return function that is cleanup work
      },[props.people])//passing empty array will happen only once, otherwise run on data element change, no arg run all the time
      console.log('people.js render');
      return props.people.map((person, index) => {
           return ( 
                  <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        changed={(event)=> props.changed(event, person.id, index)}
                        click={()=> props.clicked(index)}
                  />
            );
      });
};

export default people