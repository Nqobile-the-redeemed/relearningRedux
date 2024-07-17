import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

function BlogPosts({ blogDataBase, blogAuthors }) {
  // Initialize local state with blogDataBase prop
  const [posts, setPosts] = useState(blogDataBase);

  // useEffect to update local state when blogDataBase prop changes
  useEffect(() => {
    setPosts(blogDataBase);
  }, [blogDataBase]); // Dependency array includes blogDataBase to trigger effect when it changes

  return (
    <div className='blogHolder'>
      {posts.map((post, index) => (
        <BlogCard key={index} postData={post} blogAuthors={blogAuthors} />
      ))}
    </div>
  );
}

export default BlogPosts;