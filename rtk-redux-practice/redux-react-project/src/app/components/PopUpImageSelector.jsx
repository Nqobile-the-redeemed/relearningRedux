import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const PopUpImageSelector = ({ title, isOpen, onClose, onSelectImage }) => {
  const { images, loading, error } = useSelector(state => state.image);
  const [selectedImage, setSelectedImage] = useState(null);

  let pickAnImage = (image) => {
    setSelectedImage(image);
  }

  useEffect(() => {
    if (selectedImage) {
      console.log(selectedImage);
    }
  }, [selectedImage]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='overlay'>
      <div className='popUpBody'>
        <div className='closeModalSection'>
          <button className='closeModalButton' type='button' onClick={onClose}>
            <svg className='xmarksTheSpot' fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 460.775 460.775" xmlSpace="preserve">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
            </svg>
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
              <div className='omegaHolder'>
                <div className='imageGrid'>
                  {images.map((image, index) => (
                    <button
                      key={index}
                      className={`imageButton ${selectedImage === image ? 'selectedImageButton' : ''}`}
                      onClick={() => pickAnImage(image)}
                      type='button'
                    >
                      <img className='image' src={image.urls.regular} alt='cover' />
                    </button>
                  ))}
                </div>
                <div className='confirmationSection'>
                  {selectedImage ? (
                    <div className='selectionPreviewDiv'>
                      <div className='selectionLayerPreviewDiv'>
                        <img className='selectionPreview' src={selectedImage.urls.regular} alt='cover' />
                      </div>
                      <p className='selectionPreviewText'>{selectedImage.alt_description}</p>
                      <div className='rejectSelection'>
                        <button className='rejectionButton' type='button' onClick={onClose}>
                          <svg className='xmarksTheSpot' fill="#000000" height="8px" width="8px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 460.775 460.775" xmlSpace="preserve">
                            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                              c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                              c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                              c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                              l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                              c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                      <div className='noSelectionDiv poppins-black'>
                        <p className='noSelectionText'>No image selected</p>
                      </div> 
                  )}
                  <button
                    className='confirmButton'
                    onClick={() => onSelectImage(selectedImage)}
                    type='button'
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpImageSelector;