import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='w-2/3 border-2 border-red-400'>
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;