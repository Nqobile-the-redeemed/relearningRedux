import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postBlog } from '../features/blogs/blogsSlice';
import ImageSelectionSection from './ImageSelectionSecction';

function BlogCreator({ blogDataBase, coverImage, setCoverImage, setCoverImagePopUpState }) {

    const dispatch = useDispatch();


    const [formData, setFormData] = useState({
      title: '',
      content: ''
    })
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // Append formData to the end of blogDataBase array
      dispatch(postBlog(formData));
      console.log(blogDataBase);
      // Reset formData to initial state
      setFormData({
        title: '',
        content: ''
      })
    }

  return (
    <div>
      <h3 className='subheading poppins-medium'>Create Your Blog</h3>
      <form onSubmit={handleSubmit}>
        <div className='inputDiv'>
          <label className='inputLabel' htmlFor='title'>Blog Title:</label>
          <input className='smolInput' type='text' id='title' name='title' placeholder='Title' value={formData.title} onChange={handleChange} />
        </div>
        <div className='inputDiv'>
          <label className='inputLabel' htmlFor='content'>Blog Post:</label>
          <textarea className='bigBoiInput' id='content' name='content' placeholder='Content' value={formData.content} onChange={handleChange}></textarea>
        </div>
        <ImageSelectionSection selectedImage={coverImage} togglePopUp = {setCoverImagePopUpState}/>
        <button className='superButton' type='submit'>Create Blog</button>
      </form>
    </div>
  )
}

export default BlogCreator