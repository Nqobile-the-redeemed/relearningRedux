import React from 'react'

function BlogCard({postData, blogAuthors}) {

    let currentAuthor = blogAuthors.find(author => author.name === postData.author)
    console.log(currentAuthor)

  return (
    <div>
        <img className='blogCoverImage' src = {postData.image}></img>
        <div>
            <h2 className=''>{postData.title}</h2>
            <p>{postData.content}</p>
            <div>
                <img className='blogAuthorImage' src={currentAuthor.image}></img>
                <h3>{currentAuthor.name}</h3>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
