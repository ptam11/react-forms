import React, { Component } from 'react';

class BoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: '',
			height: '',
			backgroundColor: '#000000'
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitForm(e) {
		e.preventDefault();
		this.props.addBox(this.state);
		this.setState({
			width: '',
			height: '',
			backgroundColor: '#000000'
		});
	}

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<label htmlFor="width"> Width: </label>
				<input id="width" onChange={this.handleChange} value={this.state.width} type="number" name="width" />
				<label htmlFor="height"> Height: </label>
				<input id="height" onChange={this.handleChange} value={this.state.height} type="number" name="height" />
				<label htmlFor="backgroundColor"> Background Color: </label>
				<input id="backgroundColor" onChange={this.handleChange}	value={this.state.backgroundColor} type="color" name="backgroundColor"
				/>
				<button>Add Box!!!!!</button>
			</form>
		);
	}
}

export default BoxForm;
