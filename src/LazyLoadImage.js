import React, { Component } from 'react';
import './LazyLoadImage.css';

// fetchImage fetches the image and returns a promise
const fetchImage = url => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
}

// loadImage fetches the image and then sets the image src appropriately
const loadImage = (image, src, placeholder) => {
  fetchImage(src).then(() => {
    // Set the image src appropriately
    image.src = src;
    // Show the image
    image.style.opacity = 1;
    // Hide the placeholder
    placeholder.style.opacity = 0;
  });
}

class LazyLoadImage extends Component {
  render() {
    return (
      <>
        {/* The wrapper of the placeholder and actual image */}
        <div style={{ height: this.props.height, width: this.props.width, position: 'relative', overflow: 'hidden' }} >
          {/* The placeholder image or div */}
          {this.props.placeholderSrc ?
            <img className='lazy-load-placeholder-image' alt={this.props.alt} ref={el => this.placeholder = el} src={this.props.placeholderSrc} /> :
            <div className='lazy-load-placeholder-div' ref={el => this.placeholder = el} />}
          {/* The actual image */}
          <img className='lazy-load-image' alt={this.props.alt} ref={el => this.image = el} />
        </div>
      </>
    );
  }

  componentDidMount() {
    // An observer is an instance of Intersection Observer used to observe a DOM element
    this.observer = new IntersectionObserver(entries => {
      // The entries stores an instance of all the matched DOM elements (our image in this case)
      if (entries.some(entry => entry.intersectionRatio > 0)) {
        // If the object has entered the document we call loadImage with the element
        loadImage(this.image, this.props.src, this.placeholder);
        // Disconnect the observer since it is not necessary anymore once the image is loaded
        this.observer = this.observer.disconnect();
      }
    });

    // Observe our image
    this.observer.observe(this.image);
  }
}

export default LazyLoadImage;