import React from 'react'
import './BlogTitle.css'

function BlogTitle(props) {
  return (
    <div className='blg-tit-al-ofa ta-c'>
      <h2>{props.title}</h2>
    </div>
  )
}

export default BlogTitle