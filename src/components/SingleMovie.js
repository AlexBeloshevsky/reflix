import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/catalog.css'

class SingleMovie extends Component {

  createImage = () => {
    let image = this.props.specificMovie.img;
    return <img src={image} className="movieImage"/>
  }

  addToRentList = () => {
    //this button also activates the link which is on all of the image, if you remove the link attribute from whole specificMovie in catalog.js it works correctly. why?
    this.props.addToRentList(this.props.specificMovie);
  }

  render() {
    return (
      <div className="imageContainer">
      <Link to={this.props.link || "/"}>
      <span>
      {this.createImage()}
      </span>
      </Link>
      <button className={this.props.ButtonClass} onClick={this.addToRentList}>{this.props.buttonContent}</button>
      </div>
    )
  }

}

export default SingleMovie;