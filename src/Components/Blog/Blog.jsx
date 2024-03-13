import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog,handleAddToBookmark }) => {
    const { title, cover, author_image, author, reading_time, posted_date, hashtags } = blog
    return (
        <div>
            <img className='object-cover w-full mt-5 rounded-[10px]' src={cover} alt={`Cover picture of all title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center my-5'>
                    <img className='object-cover w-[60px] rounded-full' src={author_image} alt="" />
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-[#11111199]'>
                    <samp>{reading_time} min read</samp>
                    <button onClick={() => handleAddToBookmark(blog)}><CiBookmark ></CiBookmark ></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <div className='flex gap-4 my-4 text-[#11111199]'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </div>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;