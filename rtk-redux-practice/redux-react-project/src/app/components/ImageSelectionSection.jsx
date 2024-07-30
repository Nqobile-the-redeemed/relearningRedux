import React from 'react'

function ImageSelectionSection({ selectedImage, togglePopUp }) {

  const imageSelectionProcesss = () => {
    togglePopUp(true)
  }


  return (
    <div className='imageSelectionSection'>
        <div className='imageSelectionDiv'>
          <button className='informButton' onClick={imageSelectionProcesss()}>
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

export default ImageSelectionSection