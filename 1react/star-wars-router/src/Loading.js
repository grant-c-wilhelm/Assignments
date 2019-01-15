import React from 'react'

function Loading ({loading, children}) {
    return(
        loading?
        <div>...loading</div> : //display "..loading" until it is no longer loading then dispay the children
        children
    )
} 
export default Loading;

