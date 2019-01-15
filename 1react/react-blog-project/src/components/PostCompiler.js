import React from 'react';

import BlogPost from './BlogPost'
import PageStyleForPost from './PageStyleForPost'

const PostCompiler = ({blogpost}) => {
    const postList = blogpost.map(post => <PageStyleForPost {...post} /> )
    return (
        <div>
            {postList}
        </div>
    )
}

export default PostCompiler;