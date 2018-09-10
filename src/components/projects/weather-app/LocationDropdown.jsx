import React, { Component } from 'react';

const locations = [
  'Toronto',
  'Montreal',
  'Calgary',
  'Ottawa',
  'Edmonton',
  'Mississauga',
  'Winnipeg',
  'Vancouver'
];

class LocationDropdown extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onDropdownSelect(event.target.value);
  }

  render() {
    return (
      <div className="location-dropdown">
        <label htmlFor="location"> Select location : </label>
        <select
          id="location"
          value={this.props.location}
          onChange={this.handleChange}>
          {locations.map(city => (
            <option key={city} value={city.toLowerCase()}>
              {city}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default LocationDropdown;
