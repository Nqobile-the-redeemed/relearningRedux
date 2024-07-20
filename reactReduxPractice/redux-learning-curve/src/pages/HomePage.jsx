import React from 'react'
import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { connect } from 'react-redux';
import './App.css'
import BlogContainerComponent from './components/BlogContainer';
import BlogPosts from './components/BlogPosts'
import { newBlog } from './redux/blogs/blogActions';
import { newImages } from '../redux/images/imageActions';

function HomePage(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

  return (
    <div>
        <div className='blog-creator'>
            <h1 className='poppins-extrabold'>The Blog Creator</h1>
            <BlogContainerComponent newBlog = {props.newBlog} blogDataBase={props.blogs} />
        </div>
        <div className='blog-list'>
          <h1 className='poppins-extrabold'>The Blog List</h1>
          <BlogPosts blogDataBase={props.blogs}  />
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      blogs: state.blogs,
      images: state.images,
      authors: state.authors
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      newBlog: (blog) => dispatch(newBlog(blog)),
      newImages: (images) => dispatch(newImages(images))
    }
  }

export default connect(
    mapDispatchToProps,
    mapStateToProps
) (HomePage)