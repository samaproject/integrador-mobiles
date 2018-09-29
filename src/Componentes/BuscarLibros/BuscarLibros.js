import React, { Component } from 'react';
import BarraBusqueda from '../BarraBusqueda/BarraBusqueda';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Libro from '../Libro/Libro';
import { Consumer } from '../../context';

class BuscarLibros extends Component {
  render() {
    return (
      <Consumer>        
        {value => {
          const { libros } = value
          let listaLibros = null
          if (libros) {
            listaLibros = libros.data.items.map(libro => {
              {console.log(libro.volumeInfo.title)}
              return (
                <Libro>
                  imagen={libro.volumeInfo.imageLinks.thumbnail}
                  descripcion={libro.volumeInfo.description}
                  titulo={libro.volumeInfo.title}
                  autor={libro.volumeInfo.authors[0]}
                  editorial={libro.volumeInfo.publisher}
                  key={libro.id}
                </Libro>
                
              )
            })
          }
          return (
            <div>
              <BarraBusqueda/>
              <FormBusqueda/>
              {listaLibros}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default BuscarLibros;