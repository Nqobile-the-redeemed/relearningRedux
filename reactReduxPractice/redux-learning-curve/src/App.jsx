import { useState, useEffect } from 'react';
import './App.css'
import BlogContainerComponent from './components/BlogContainer'
import BlogPosts from './components/BlogPosts'

function App() {

  let clientID = 'JQ1oIAV-jX9sDeKyCaM6NodMwutPDaQSLTra5TY8NGQ'
  let endPoint = 'https://api.unsplash.com/photos/?client_id=${clientID}'

  const [imageData, setImageData] = useState([])
 
  let blogDataBase = [
    {
      title: 'The first one Ever',
      content: 'Ill be the first to write a blog post',
      image: 'https://source.unsplash.com/photos/a-large-mountain-with-a-sky-full-of-stars-TzocKawlF4E',
      author: 'Nqobile'
    }
  ]

  let blogAuthors = [{
    name: 'muzala',
    image: 'https://source.unsplash.com/photos/a-cat-standing-in-the-middle-of-a-field-yERFjCBsM1E'
  },
  {
    name: 'Nqobile',
    image: 'https://source.unsplash.com/photos/a-woman-taking-a-picture-of-herself-in-a-mirror-463mDKXg8Js'
  },
  {
    name: 'Angel',
    image: 'https://source.unsplash.com/photos/a-walkway-in-a-greenhouse-with-lots-of-plants-fag7vJEpUFM'
  },
  {
    name: 'David',
    image: 'https://source.unsplash.com/photos/a-couple-of-people-that-are-looking-in-a-window-KWocLB1EHIc'	
  }]

  useEffect(() => {
    let clientID = 'JQ1oIAV-jX9sDeKyCaM6NodMwutPDaQSLTra5TY8NGQ';
    let count = 10;
    let endPoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${count}`;

    fetch(endPoint)
      .then(response => response.json())
      .then(data => {
        setImageData(data);
        // Here you can set the data to your state
        // For example, if you want to add the fetched data to your blogDataBase:
        // setBlogDataBase(prevState => [...prevState, ...data]);
        console.log(data); // Just logging the data for now
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className='App'>
      <div className='blog-creator'>
        <h1>The Blog Creator</h1>
        <BlogContainerComponent blogDataBase={blogDataBase} />
      </div>
      <div className='blog-list'>
        <h1>The Blog List</h1>
        <BlogPosts blogDataBase={blogDataBase} blogAuthors={blogAuthors} />
      </div>
    </div>
  )
}

export default App
