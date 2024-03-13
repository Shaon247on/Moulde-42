import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog => {
    console.log('bookmark adding soon')
    const newBookmark =[...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  return (
    <>
      <Header
      
      ></Header>
      <div className='md:flex mx-auto max-w-6xl gap-6'>
      <Blogs
      handleAddToBookmark={handleAddToBookmark}
      ></Blogs>
      <Bookmarks
      bookmarks={bookmarks}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App
