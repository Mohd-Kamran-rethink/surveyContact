import React from 'react'

export const Footer = () => {
  return (
   <>
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </div>
    </footer>
   </>
  )
}
