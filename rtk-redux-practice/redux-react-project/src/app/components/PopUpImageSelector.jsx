import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const PopUpImageSelector = ({ title, isOpen, onClose, onSelectImage }) => {

  const { images, loading, error } = useSelector(state => state.image);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      // Fetch images from Unsplash API or any other logic
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='overlay'>
      <div className='popUpBody'>
        <div className='closeModalSection'>
          <button className='closeModalButton' onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"></svg>
          </button>
        </div>
        <div className='imageSelectorSection'>
          <p className='popUpTitle'>{title}</p>
          {loading ? (
            <div className='loadingDiv'>
              <p className='loadingText'>Loading...</p>
            </div>
          ) : (
            <div className='imageGridSection'>
              <div className='imageGrid'>
                {images.map((image, index) => (
                  <button key={index} className='imageButton' onClick={() => onSelectImage(image)}>
                    <img className='image' src={image.urls.regular} alt='cover' />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpImageSelector;