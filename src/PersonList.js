import React from 'react';
import Person from "./Person";

const PersonList = ({persons}) => {
  const mappedPersons = persons.map((person, i) => <Person key={i + 1} person={person}/>)
  return persons.length ? <ul>
      {mappedPersons}
    </ul> :
    <p style={{marginTop: '20px'}}>There are no persons matching your criteria</p>
}

export default PersonList;