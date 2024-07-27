import React from 'react'

function ImageSelectionSecction({ selectedImage, togglePopUp }) {
  return (
    <div className='imageSelectionSection'>
        <div className='imageSelectionDiv'>
          <button className='informButton'>
            Select Image
          </button>
          {selectedImage ? (
            <div className='imagePreviewDiv'>
              <img className='imagePreview' src={URL.createObjectURL(selectedImage)} alt='cover' />
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

export default ImageSelectionSecction