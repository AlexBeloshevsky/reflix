import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import SingleMovie from './SingleMovie';
import '../styles/catalog.css'

class Catalog extends Component {

  generateMovies() {
    let movieList = this.props.movies;
    return movieList.map((item, index) => {
      let link = `/movies/${item.title}`
      return (<div key={index} className="imageContainer">
      <SingleMovie 
        specificMovie={item}
        ButtonClass="rentButton"
        buttonContent="Rent me"
        addToRentList={this.props.addToRentList}
        link={link}
        />
        </div>
        )
    })
  }
  
  generateRented() {
    let rentedList = this.props.movies.filter(movie => movie.isRented)
    return rentedList.map((item, index) => {
      let link = `/movies/${item.title}`
      return (<div key={index} className="imageContainer">
      <SingleMovie
      specificMovie={item}
      ButtonClass="rentButton"
      buttonContent="Return me"
      addToRentList={this.props.removeFromRentList}
      link={link}
      />
      </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="catalog-top">
        <input type="text" placeholder="Search for a movie"></input>
        <span id="budget">Budget: $10</span>
        </div>
        <div id="catalogDiv">Catalog:
        <br></br>
        {this.generateMovies()}
        </div>
        <hr></hr>
        <div id="rentedDiv">Rented:
        <br></br>
        {this.generateRented()}
        </div>
      </div>
    )
  }

}

export default Catalog;