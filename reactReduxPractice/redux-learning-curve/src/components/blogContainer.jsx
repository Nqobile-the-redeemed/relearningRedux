import React from 'react'
import { useState } from 'react'

function BlogContainerComponent({ blogDataBase, setBlogDataBase }) {




  const [selectedValue, setSelectedValue] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    author: ''
  })

  const handleDropDownChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    setFormData({
      ...formData,
      author: value
    });
  };

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
    setBlogDataBase(currentDataBase => [...currentDataBase, formData]);
    console.log(blogDataBase);
    // Reset formData to initial state
    setFormData({
      title: '',
      content: '',
      image: '',
      author: ''
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
        <div className='inputDiv'>
          <label className='inputLabel' htmlFor='image'>Image:</label>
          <input className='smolInput' type='text' id='image' name='image' placeholder='Image URL' value={formData.image} onChange={handleChange} />
        </div>
        <div className='inputDiv'>
          <label className='inputLabel' htmlFor='author'>Author:</label>
          <select className='dropDownInput' id='author' value={selectedValue} onChange={handleDropDownChange}>
            <option className='optionThing' value=''>Select Author</option>
            <option className='optionThing' value='Muzala'>Muzala Amoah</option>
            <option className='optionThing' value='Nqobile'>Nqobile Madziba</option>
            <option className='optionThing' value='Angel'>Angel Siringwani</option>
            <option className='optionThing' value='David'>David Mkhosi</option>
          </select>
        </div>
        <button className='superButton' type='submit'>Create Blog</button>
      </form>
    </div>
  )
}

export default BlogContainerComponent