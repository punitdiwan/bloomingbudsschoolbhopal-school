import React, { useState, useCallback } from 'react';
// import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

function View() {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    './33img/7.jpeg',
    './33img/1.jpeg',
    './33img/2.jpeg',
    './33img/3.jpeg',
    './33img/4.jpeg',
    './33img/5.jpeg',
    './33img/6.jpeg',
  
    './33img/8.jpeg',
    './33img/9.jpeg',
    './33img/10.jpeg',
    './33img/11.jpeg',
    './33img/12.jpeg',
    './33img/15.jpeg',
    './33img/16.jpeg',
    './33img/17.jpeg',
    './33img/18.jpeg',

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
    './33img/44.jpeg',
    './33img/45.jpeg',
    './33img/46.jpeg',
    './33img/47.jpeg',
    './33img/48.jpeg',
    './33img/49.jpeg',
    './33img/50.jpeg',
    './33img/51.jpeg',
    './33img/52.jpeg',
    './33img/53.jpeg',
    './33img/54.jpeg',
    './33img/55.jpeg',
    './33img/56.jpeg',
    './33img/57.jpeg',
    './33img/58.jpeg',
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