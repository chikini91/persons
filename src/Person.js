import React from 'react';

const Person = ({person}) => {
  const {name, lastname, age, sex} = person;
  return <li>
    <p>{name} {lastname}</p>
    <p>{age} years old</p>
    <p>{sex === 'm' ? 'male' : 'female'}</p>
  </li>
}

export default Person;