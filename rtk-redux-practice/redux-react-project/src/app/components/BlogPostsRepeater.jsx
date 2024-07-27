import React from 'react'
import BlogCards from './BlogCards'
import { useSelector } from 'react-redux';

function BlogPostsRepeater({ blogDatabase }) {
  return (
    <div className='blogHolder'>
      {blogDatabase.map((post, index) => (
        <BlogCards key={index} postData={post} />
      ))}
    </div>
  )
}

export default BlogPostsRepeater