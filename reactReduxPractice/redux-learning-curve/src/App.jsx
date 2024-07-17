import { useState, useEffect, useMemo } from 'react';
import './App.css'
import BlogContainerComponent from './components/BlogContainer'
import BlogPosts from './components/BlogPosts'

function App() {

  let clientID = 'JQ1oIAV-jX9sDeKyCaM6NodMwutPDaQSLTra5TY8NGQ'
  let endPoint = 'https://api.unsplash.com/photos/?client_id=${clientID}'

  const [imageData, setImageData] = useState([])
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [blogDataBase, setBlogDataBase] = useState([
    {
      title: '',
      content: '',
      author: ''
    }
  ])

  // Use optional chaining to safely access nested properties
  const blogAuthors = useMemo(() => [
    {
      name: 'Muzala',
      image: imageData[0]?.urls?.regular
    },
    {
      name: 'Nqobile',
      image: imageData[1]?.urls?.regular
    },
    {
      name: 'David',
      image: imageData[2]?.urls?.regular
    },
    {
      name: 'Angel',
      image: imageData[3]?.urls?.regular
    }
  ], [imageData]); // Recompute only when imageData changes

 


  useEffect(() => {
    let clientID = 'JQ1oIAV-jX9sDeKyCaM6NodMwutPDaQSLTra5TY8NGQ';
    let count = 6;
    let endPoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${count}`;
  
    fetch(endPoint)
      .then(response => response.json())
      .then(data => {
        setImageData(data);
        console.log(data);
        setBlogDataBase([
          {
            title: 'The first one Ever',
            content: 'Ill be the first to write a blog post',
            image: data[4]?.urls?.regular,
            author: 'Nqobile'
          }]);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Ensure loading is set to false even if there's an error
      });
  }, []); // Empty dependency array means this effect runs once on mount
  
  if (isLoading) {
    return <div>Loading...</div>; // Show loading message or spinner
  }

  return (
    <div className='App'>
      <div className='blog-creator'>
        <h1 className='poppins-extrabold'>The Blog Creator</h1>
        <BlogContainerComponent setBlogDataBase={setBlogDataBase} blogDataBase={blogDataBase} />
      </div>
      <div className='blog-list'>
        {imageData.length > 0 ? (
          // Render your component that uses blogAuthors here
          <div>
          <h1 className='poppins-extrabold'>The Blog List</h1>
          <BlogPosts blogDataBase={blogDataBase} blogAuthors={blogAuthors} />
          </div>
        ) : (
          <p>Loading...</p> // Show a loading message or spinner
        )}
      </div>
    </div>
  )
}

export default App
