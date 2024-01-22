import React from 'react'
import ImageUploader from './ImageUploader'
import Footer from './Footer'


function App() {

console.log(import.meta.env.VITE_API_KEY)
  return (
   
      <div className='app'>
        <div className="main">
        <ImageUploader />
        </div>
       
        <Footer />
      </div>
   
  )
}

export default App
