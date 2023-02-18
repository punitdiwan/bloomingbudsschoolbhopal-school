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