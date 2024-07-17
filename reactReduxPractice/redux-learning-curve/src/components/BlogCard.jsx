import React from 'react'

function BlogCard({postData, blogAuthors}) {

    console.log(blogAuthors)
    let currentAuthor = blogAuthors.find(author => author.name === postData.author)
    console.log(currentAuthor)
    console.log(postData)

  return (
    <div className='cardBody'>
        <img className='blogCoverImage' src = {postData.image}></img>
        <div className='cardContents' >
            <div className='textHolder'>
                <h2 className='cardTitle'>{postData.title}</h2>
                <p className='postText' >{postData.content}</p>
            </div>
            <div className='authorBox'>
                <img className='blogAuthorImage' src={currentAuthor.image}></img>
                <h3 className='authorName poppins-extrabold' >{currentAuthor.name}</h3>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
