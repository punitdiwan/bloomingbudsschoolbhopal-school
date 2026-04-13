import React, { useState, useCallback } from 'react';
// import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

function View() {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [

    './34img/1.jpeg',
    './34img/2.jpeg',
    './34img/3.jpeg',
    './34img/4.jpeg',
    './34img/5.jpeg',
    './34img/6.jpeg',
    './34img/7.jpeg',
    './34img/8.jpeg',
    './34img/9.jpeg',
    './34img/10.jpeg',
    './34img/11.jpeg',
    './34img/12.jpeg',
    './34img/13.jpeg',
    './34img/14.jpeg',
    './34img/15.jpeg',
    './34img/16.jpeg',
    './34img/17.jpeg',
    './34img/18.jpeg',
    './34img/19.jpeg',
    './34img/20.jpeg',
    './34img/21.jpeg',
    './34img/22.jpeg',
    './34img/23.jpeg',
    './34img/24.jpeg',
    './34img/25.jpeg',
    './34img/26.jpeg',
    './34img/27.jpeg',
    './34img/28.jpeg',
    './34img/29.jpeg',
    './34img/30.jpeg',
    './34img/31.jpeg',
    './34img/32.jpeg',
    './34img/33.jpeg',
    './34img/34.jpeg',
    './34img/35.jpeg',
    './34img/36.jpeg',
    './34img/37.jpeg',

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
          src={src}
          onClick={() => openImageViewer(index)}
          width="280"
          height="280"
          key={index}
          //   style={{ margin: '20px' }}
          alt=""
        />
      ))}
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}

export default View;