import React, { Component } from 'react';

/**
 * Crear Context
 */

const LaLigaContext = React.createContext();

export { LaLigaContext };

class LaLigaProvaider extends Component {

    state = {
		equipos: [
			{
				nombre: 'Real Madrid',
				titulos: 35
			},
			{
				nombre: 'Barcelona',
				titulos: 25
			},
			{
				nombre: 'Atletico Madrid',
				titulos: 10
			},
		]
    }
    
    esCampeon = (id) => {
        // console.log('LaLigaProvaide', id);

        const equipos = [...this.state.equipos];

        equipos[id].titulos += 1;

        this.setState({
            equipos
        });

    }
    
    render() {
        return (
            <LaLigaContext.Provider value= {{
                state: this.state.equipos,
                esCampeon: this.esCampeon
            }}>

                { this.props.children }

            </LaLigaContext.Provider>
        );
    }
}

export default LaLigaProvaider;