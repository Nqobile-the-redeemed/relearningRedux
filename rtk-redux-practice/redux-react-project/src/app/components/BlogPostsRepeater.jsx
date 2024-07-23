import React from 'react'
import BlogCards from './BlogCards'

function BlogPostsRepeater({ posts }) {
  return (
    <div className='blogHolder'>
      {posts.map((post, index) => (
        <BlogCards key={index} postData={post} />
      ))}
    </div>
  )
}

export default BlogPostsRepeater