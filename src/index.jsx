import React from 'react';
import App from './App';
import './index.css';
import { images } from './constants/images';

const index = () => {
  return (
    <div className="grid-container">
        <App name="SHERLOCK" image={images.img1} />
        <App name="WATSON" image={images.img2} />
        <App name="IRENE  ADLER" image={images.img3} />
        <App name="MORIARTY" image={images.img4} />
        <App name="LESTRADE" image={images.img5} />
        <App name="MYCROFT" image={images.img6} />
        <App name="ENOLA HOLMES" image={images.img7} />
    </div>
  )
}

export default index