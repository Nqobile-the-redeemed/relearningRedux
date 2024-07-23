import React from 'react'
import BlogPostsRepeater from '../components/BlogPostsRepeater'
import BlogCreator from '../components/BlogCreator'


function HomePage() {
  return (
    <div>
        <div className='blog-creator'>
            <h1 className='poppins-extrabold'>The Blog Creator</h1>
            <BlogCreator />
        </div>
        <div className='blog-list'>
          <h1 className='poppins-extrabold'>The Blog List</h1>
          {/* <BlogPostsRepeater /> */}
        </div>
    </div>
  )
}

export default HomePage