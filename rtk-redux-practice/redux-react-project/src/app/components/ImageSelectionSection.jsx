import React from 'react'
import { useDispatch } from 'react-redux';
import PopUpImageSelector from '../components/PopUpImageSelector'
import { useState } from 'react';
import { fetchImages } from '../features/images/imagesSlice';

function ImageSelectionSection({ setCoverImage, coverImage }) {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSelectImage = (image) => {
    setCoverImage(image);
    setIsPopupOpen(false);
  };

  const handleOpenPopup = () => {
    dispatch(fetchImages()); // Dispatch the fetchImages action
    setIsPopupOpen(true);
  };


  return (
    <div className='imageSelectionSection'>
      <PopUpImageSelector
        title="Select Your Cover Image"
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSelectImage={handleSelectImage}
      />
        <div className='imageSelectionDiv'>
          <button className='informButton' onClick={handleOpenPopup} type='button'>
            Select Image
          </button>
          {coverImage ? (
            <div className='imagePreviewDiv'>
              <img className='imagePreview' src={URL.createObjectURL(coverImage)} alt='cover' />
            </div>
          ) : (
              <div className='noImageDiv poppins-black'>
                <p className='noImageText'>No image selected</p>
              </div> 
          )}
        </div>
    </div>
  )
}

export default ImageSelectionSection