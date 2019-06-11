import React, { Suspense } from 'react';
import URLWithAPIKey from '../APIKey'

class RendersJustOneImage extends React.Component {
  static fetchImages = (url) => {
    return fetch(url)
    .then(res => res.json())
    .then(data => data )
    .catch(err => err);
  }
  
  constructor() {
    super();
    this.state = {
      images: null
    };
  }
  
  componentDidMount() {
    RendersJustOneImage.fetchImages(URLWithAPIKey)
      .then(data => this.setState({images: data}))
      .catch(err => console.error(err));

    document.getElementById('root').addEventListener('click', () => {/* Some Unrelated Logic */});
  }

  render () {
    const { images } = this.state;
    return images 
      ? ( <img src={images[0].url} alt="That is where the cat goes" /> ) 
      : null;  
  }
};


const LazyLoadAnImage = () => {
  return (
    <div className="custom-hook">
      <Suspense fallback={<span>Loading...</span>}>
        <RendersJustOneImage />
      </Suspense>
    </div>
  );
};

export default LazyLoadAnImage;





/*********************************************************************
 * What is wrong with our 30-line long RendersJustOneImageComponent? *
 *********************************************************************
 * 1. It is 30 lines long...
 * 2. The componentDidMount is an octopus
 * 3. Error handling sucks
 */
