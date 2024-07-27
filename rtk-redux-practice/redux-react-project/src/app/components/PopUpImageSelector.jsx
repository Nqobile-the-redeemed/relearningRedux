import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../'; // Adjust the path as necessary

function PopUpImageSelector({ dataHolder }) {

    const { images, loading, error } = useSelector(state => state.image);
    const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='popUpBody'>
        <div className='closeModalSection'>
            <button className='closeModalButton'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"></svg>
            </button>
        </div>
        <div className='imageSelectorSection'>
            <p className='popUpTitle'>Pick Your {dataHolder.name}</p>
            {loading ? (
                <div className='loadingDiv'>
                    <p className='loadingText'>Loading...</p>
                </div>
            ) : (
                <div className='imageGridSection'>
                    <div className='imageGrid'>
                        {images.map((image, index) => (
                            <button key={index} className='imageButton'>
                                <img className='image' src={image.urls.regular} alt='cover' />
                            </button>
                        ))}
                    </div>
                    
                </div>
            )
            }
        </div>
    </div>
  )
}

export default PopUpImageSelector