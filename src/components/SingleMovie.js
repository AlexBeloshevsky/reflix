import React, { Component } from 'react';
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
      <span>
      {this.createImage()}
      </span>
      <button className={this.props.ButtonClass} onClick={this.addToRentList}>{this.props.buttonContent}</button>
      </div>
    )
  }

}

export default SingleMovie;