import React from 'react'
import { useState } from 'react';
import BlogPostsRepeater from '../components/BlogPostsRepeater'
import BlogCreator from '../components/BlogCreator'
import { useSelector } from 'react-redux';

function HomePage() {

  const [coverImage, setCoverImage] = useState(null);
  const [coverImagePopUpState, setCoverImagePopUpState] = useState(false);


  const blogDatabase = useSelector(state => state.blog.blogs)

  return (
    <div>
        <div className='blog-creator'>
            <h1 className='poppins-extrabold'>The Blog Creator</h1>
            <BlogCreator coverImage = {coverImage} setCoverImage = {setCoverImage} blogDatabase = {blogDatabase} setCoverImagePopUpState = {setCoverImagePopUpState} />
        </div>
        <div className='blog-list'>
          <h1 className='poppins-extrabold'>The Blog List</h1>
          <BlogPostsRepeater blogDatabase = {blogDatabase}/>
        </div>
    </div>
  )
}

export default HomePage