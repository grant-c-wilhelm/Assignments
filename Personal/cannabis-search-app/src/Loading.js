import React from 'react'

function Loading({ loading, children }) {
    return (
        loading ? <div>...loading</div> : children
    ) //display "..loading" until it is no longer loading then dispay the children
}
export default Loading;

