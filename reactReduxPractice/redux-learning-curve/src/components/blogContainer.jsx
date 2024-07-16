import React from 'react'
import { useState } from 'react'

function BlogContainerComponent({ blogDataBase }) {




  const [selectedValue, setSelectedValue] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    author: ''
  })

  const handleDropDownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    blogDataBase.push(formData)
    console.log(blogDataBase);
    setFormData({
      title: '',
      content: '',
      image: '',
      author: ''
    })
  }

  return (
    <div>
      <h3>Create Your Blog</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name:
            <input type='text' name='title' placeholder='Title' value={formData.title} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Blog Post:
            <input type='textarea' name='content' placeholder='Content' value={formData.content} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Image:
            <input type='text' name='image' placeholder='Image URL' value={formData.image} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Author:
            <select value={selectedValue} onChange={handleDropDownChange}>
              <option value=''>Select Author</option>
              <option value='muzala'>Muzala Amoah</option>
              <option value='Nqobile'>Nqobile Madziba</option>
              <option value='Angel'>Angel Siringwani</option>
              <option value='David'>David Mkhosi</option>
            </select>
          </label>
        </div>
        <button type='submit'>Create Blog</button>
      </form>
    </div>
  )
}

export default BlogContainerComponent