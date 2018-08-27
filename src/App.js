import React, {Component} from 'react';
import './App.css';
import {fetchPersons} from "./client";
import PersonList from "./PersonList";
import FilterForm from "./FilterForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      persons: [],
      nameFilter: '',
      lastNameFilter: '',
      ageFilter: 0,
      sexFilter: []
    }
  }

  componentDidMount() {
    this.setState({loading: true});
    fetchPersons().then(({data: persons}) => {
      this.setState({loading: false});
      this.setState({persons});
    })
  }

  updateFilters(filter, val) {
    let stateFilter;
    switch (filter) {
      case 'name':
        stateFilter = 'nameFilter';
        break;
      case 'lastName':
        stateFilter = 'lastNameFilter';
        break;
      case 'age':
        stateFilter = 'ageFilter';
        break;
      case 'sex':
        stateFilter = 'sexFilter';
        break;
      default:
        stateFilter = ''
    }
    this.setState({[stateFilter]: val})
  }

  filterByName(persons, prop, val) {
    if (!persons.length) return persons;
    return persons.filter(person => person[prop].toLowerCase().includes(val.toLowerCase()))
  }

  filterByAge(persons, val) {
    if (!persons.length || !val) return persons;
    return persons.filter(({age}) => age === +val);
  }

  filterBySex(persons, val) {
    if (!val.length || !persons.length) return persons;
    return persons.filter(({sex}) => val.includes(sex));
  }

  render() {
    const state = this.state;
    const filteredByName = this.filterByName(this.state.persons, 'name', state.nameFilter);
    const filteredByLastName = this.filterByName(filteredByName, 'lastname', state.lastNameFilter);
    const filteredByAge = this.filterByAge(filteredByLastName, this.state.ageFilter);
    const filteredBySex = this.filterBySex(filteredByAge, this.state.sexFilter);
    return this.state.loading ? <h1>Loading...</h1> : <div>
      <h1>This is my amazing app</h1>
      <FilterForm updateFilters={this.updateFilters.bind(this)}/>
      <PersonList persons={filteredBySex}/>
    </div>
  }
}

export default App;
