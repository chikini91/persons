import React from 'react';

export default class FilterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      age: '',
      sex: {
        male: false,
        female: false
      }
    }
  }

  handleName(e, prop) {
    const value = e.target.value.trim();
    this.setState({[prop]: value});
    this.props.updateFilters(prop, value);
  }

  handleAge(e) {
    const age = e.target.value.trim();
    this.setState({age})
    this.props.updateFilters('age', age);
  }

  handleSex(sex) {
    const val = !this.state.sex[sex];
    const newSexVal = {[sex]: val};
    const newStateVal = {sex: {...this.state.sex, ...newSexVal}};
    this.setState(newStateVal);
    console.log(newStateVal)
    const sexValues = Object.keys(newStateVal.sex)
      .filter(sex => newStateVal.sex[sex])
      .map(sex => sex === 'male' ? 'm' : 'f');
    this.props.updateFilters('sex', sexValues);
  }

  render() {
    return <div className="filter-form">
      <h2>Filters:</h2>
      <div>
        <label>
          Name: <input type="text" onChange={e => this.handleName(e, 'name')} value={this.state.name}/>
        </label>
      </div>
      <div>
        <label>
          LastName: <input type="text" onChange={e => this.handleName(e, 'lastName')} value={this.state.lastName}/>
        </label>
      </div>
      <div>
        <label>
          Age: <input type="number" step="1" min="1" onChange={this.handleAge.bind(this)} value={this.state.age}/>
        </label>
      </div>
      <div>
        Sex:
        &nbsp;
        <label>
          Male
          <input type="checkbox" onChange={() => this.handleSex('male')} value="male" checked={this.state.sex.male}/>&nbsp;
        </label>
        <label>
          Female
          <input type="checkbox" onChange={() => this.handleSex('female')} value="female" checked={this.state.sex.female}/>
        </label>
      </div>
    </div>
  }
}