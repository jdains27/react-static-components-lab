import React, { Component } from 'react';
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent';
import CatComponent from './CatComponent';
import MouseComponent from './MouseComponent';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
