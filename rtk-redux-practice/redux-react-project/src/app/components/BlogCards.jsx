import React from 'react'

function BlogCards({postData}) {
  return (
    <div>
        <div className='cardBody'>
            <div className='cardContents' >
                <div className='textHolder'>
                    <h2 className='cardTitle'>{postData.title}</h2>
                    <p className='postText' >{postData.content}</p>
                </div>
        </div>
    </div>
    </div>
  )
}

export default BlogCards