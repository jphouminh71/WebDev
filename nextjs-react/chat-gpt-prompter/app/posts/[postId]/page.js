// this is a dynamic route
import React from 'react'

const page = () => {
    return (
        // access the query parameters, same name as the route!
        <div>{postId}</div> 
    )
}

export default page