import React, { Component } from 'react';
import Equipos from './componentes.js/Equipos';
import LaLigaProvaider from './componentes.js/LaLigaProvaider';

class App extends Component {

	render() {
		return (
			<div className="container">

				<LaLigaProvaider>

					<Equipos />

				</LaLigaProvaider>
				
			</div>
		);
	}
}

export default App;
