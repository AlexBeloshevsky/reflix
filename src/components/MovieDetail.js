import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/catalog.css'

class MovieDetail extends Component {

  constructor() {
    super();
    this.state = {
      plot: ""
    }
  }

  fetchMovies = (id) => {
    fetch(`http://www.omdbapi.com/?apikey=78f3c30d&type=movie&i=${id}`)
      .then(response => response.json())
      .then(json => {
        let newPlot = json.Plot;
        this.setState({plot: newPlot});
      }).catch(error => console.error(error));
  }

  render() {
    const match = this.props.match
    const name = match.params.index
    const entity = this.props.state.movies.filter(f => {
      return f.title === name
    })[0]
    this.fetchMovies(entity.imdbID);
    return (
      <div>
        <h1>{entity.title} - ({entity.year})</h1>
        <img src={entity.img} className="movieImage" />
        <p>{this.state.plot}</p>
      </div>
    )
  }

}

export default MovieDetail;