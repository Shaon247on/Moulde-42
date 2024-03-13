import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Blog from '../Blog/Blog';


const Blogs = ({handleAddToBookmark}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='w-2/3'>
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    blog={blog}
                    key= {blog.id}
                    handleAddToBookmark={handleAddToBookmark}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;