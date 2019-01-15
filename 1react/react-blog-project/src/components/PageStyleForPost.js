import React from 'react'

import BlogPost from './BlogPost';

const PageStyleForPost = ({ title, sub_title, author, date }) => {

    return (
        <div>
            <h4>{author}</h4>      
            <h6>{date}</h6>
            <h1>{title}</h1>
            <h2> {sub_title}</h2>

        </div>
    )
}

export default PageStyleForPost 