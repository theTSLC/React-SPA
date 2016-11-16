import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => 9/5 * (weather.main.temp-273) + 32);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color="purple" units="F"/></td>
				<td><Chart data={pressure} color="green" units="hPa"/></td>
				<td><Chart data={humidity} color="blue" units="%"/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
			  <thead>
			    <tr>
			      <th>City</th>
			      <th>Temperature (F)</th>
			      <th>Pressure (hPa)</th>
			      <th>Humidity (%)</th>
			    </tr>
			  </thead>
			  <tbody>
			    {this.props.weather.map(this.renderWeather)}
			  </tbody>
			</table>
		);
	}
}

//ES5 syntax commented out, ES6 version below
// function mapStateToProps(state) {
// 	return {weather: state.weather};
// }
function mapStateToProps({weather}) {
	return {weather}; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);