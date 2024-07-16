import React from 'react'
import BlogCard from './BlogCard'

function BlogPosts({ blogDataBase, blogAuthors}) {
  return (
    <div>
        {blogDataBase.map((post, index) => {
            return <BlogCard key={index} postData={post} blogAuthors={blogAuthors}/>
        }
        )}
    </div>
  )
}

export default BlogPosts