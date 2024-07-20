import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

function BlogPosts({ blogDataBase, blogAuthors }) {

  return (
    <div className='blogHolder'>
      {blogDataBase.map((post, index) => (
        <BlogCard key={index} postData={post} blogAuthors={blogAuthors} />
      ))}
    </div>
  );
}

export default BlogPosts;