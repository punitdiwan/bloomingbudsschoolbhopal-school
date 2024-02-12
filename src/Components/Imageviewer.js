import React, { useState, useCallback } from 'react';
// import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

function View() {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    './images/g1.jpeg',
    './images/g2.jpeg',
    './images/g3.jpeg',
    './images/g4.jpeg',
    './images/g-5.jpeg',
    './images/g-6.jpeg',
    './images/g7.jpeg',
    './images/g8.jpeg',
    './images/g9.jpeg',
    './images/g10.jpeg',
    './images/g11.jpeg',
    './images/g12.jpeg',
    './images/g13.jpeg',
    './images/g14.jpeg',
    './images/g15.jpeg',
    './images/g16.jpeg',
    './33img/5.jpeg',
    './33img/8.jpeg',
    './33img/9.jpeg',
    './33img/10.jpeg',
    './33img/11.jpeg',
    './33img/6.jpeg',
    './33img/1.jpeg',
    
    './33img/12.jpeg',
    './33img/15.jpeg',
    './33img/17.jpeg',
    './33img/18.jpeg',
    './33img/19.jpeg',
    './33img/20.jpeg',
    './33img/21.jpeg',
    './33img/22.jpeg',
    './33img/23.jpeg',
    './33img/24.jpeg',
    './33img/25.jpeg',
    './33img/26.jpeg',
    './33img/27.jpeg',
    './33img/28.jpeg',
    './33img/29.jpeg',
    './33img/30.jpeg',
    './33img/31.jpeg',
    './33img/32.jpeg',
    './33img/33.jpeg',
    './33img/34.jpeg',
    './33img/35.jpeg',
    './33img/36.jpeg',
    './33img/37.jpeg',
    './33img/38.jpeg',
    './33img/39.jpeg',
    './33img/40.jpeg',
    './33img/41.jpeg',
    './33img/42.jpeg',
    './33img/43.jpeg',
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className='image-new'>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="280"
          height="280"
          key={ index }
        //   style={{ margin: '20px' }}
          alt=""
        />
      ))}
   {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}

export default View;