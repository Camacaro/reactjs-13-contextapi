import React, { Component } from 'react';
import { LaLigaContext } from './LaLigaProvaider';

class Equipo extends Component {
    
    click = (idEquipo, funcion) => {
        console.log('diste click..', idEquipo);
        funcion(idEquipo);
    }

    // Pasar parametros a funciones 
    // <button className="btn btn-success" type="button" onClick={ () => this.click(idEquipo, value.esCampeon) }>
    //    Es Campeón
    // </button>
    
    render() {
        return (

            <LaLigaContext.Consumer>
                { (value) => {

                    return Object.keys(value.state).map( idEquipo => {

                        return (
                            <li className="list-group-item d-flex justify-content-between aling-items-center" key={idEquipo} >

                                <p className="m-0"> 
                                    { value.state[idEquipo].nombre } 

                                    <span className="ml-4 badge badge-danger"> { value.state[idEquipo].titulos } </span>
                                </p>

                                <button className="btn btn-success" type="button" onClick={ () => value.esCampeon(idEquipo)  }>
                                    Es Campeón
                                </button>
                            </li>

                        );

                    } )

                } }
            </LaLigaContext.Consumer>

          
        );
    }
}

export default Equipo;