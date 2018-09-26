import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/catalog.css'

class MovieDetail extends Component {

  render() {
    const match = this.props.match
    const name= match.params.index
    const entity = this.props.state.movies.filter(f=> {
      return f.title === name
    })[0]
    return (
      <div>
        <h1>{entity.title} - ({entity.year})</h1>
        <img src={entity.img} className="movieImage"/>
        <p>{entity.descrShort}</p>
      </div>
    )
  }

}

export default MovieDetail;