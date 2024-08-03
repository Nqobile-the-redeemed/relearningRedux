import React from 'react'
import PopUpImageSelector from '../components/PopUpImageSelector'
import { useState } from 'react';

function ImageSelectionSection({ setCoverImage, coverImage }) {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSelectImage = (image) => {
    setCoverImage(image);
    setIsPopupOpen(false);
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
          <button className='informButton' onClick={() => setIsPopupOpen(true)} type='button'>
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