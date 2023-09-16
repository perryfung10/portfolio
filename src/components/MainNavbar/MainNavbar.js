import React from 'react'
import "./MainNavbar.css"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

export default function MainNavbar() {


const handleSearch = (e) =>{
  e.preventDefault();

}

  return (
    <nav className="mainNavbar">
      <div className="nav-container">
        <Link to="/" className='icon nav-link'>
          @@
        </Link>
        <div className="collapse">
          
        </div>
        <ul className="nav-items">
          <li>
           <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='nav-link'>About</Link>
          </li>
          <li>
            <Link to="/projects" className='nav-link'>Projects</Link>
          </li>
          <li>
            <Link to="/#" className='nav-link'></Link>
          </li>
        </ul>
      </div>
        <form className="search-bar">
          <input type="search" name="search-input" id="search-input" className="search-input" placeholder='Search ...' />
          <Button  type="submit" className="search-btn" value="search" handleClick={handleSearch} />
        </form>

      
    </nav>
    
  )
}
