import PropTypes, { array } from 'prop-types';
const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    
    return (
        
        <div className='md:w-1/3 p-8 bg-gray-200 rounded-xl'>
            <h2 className='text-3xl mb-5 font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            <ul className='space-y-3 text-lg'>
            {
                bookmarks.map(bookmark => <li className='border-2 border-green-800/50 m-5 p-4 rounded-lg font-semibold bg-blue-500/45' key={bookmark.id}>{bookmark.title}</li>)
            }
            </ul>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
export default Bookmarks;