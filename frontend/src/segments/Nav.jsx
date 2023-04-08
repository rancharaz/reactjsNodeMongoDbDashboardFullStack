import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <nav className='w-full bg-black h-14 flex'>
            <div className="mx-auto container text-center justify-center items-center flex">
                <div className="logo text-white">
                    <Link to="/" className='pr-4' >LOGO</Link>
                </div>
                <ul className='text-white p-3.5 '>
                    <Link to="/" className='pr-4 hover:text-gray-500 transition-all' >Product</Link>
                    <Link to="/add" className='pr-4 hover:text-gray-500 transition-all' >Add Product</Link>
                    <Link to="/update" className='pr-4 hover:text-gray-500 transition-all' >Update Product</Link>
                    <Link to="/update" className='pr-4 hover:text-gray-500 transition-all' >Logout</Link>
                    <Link to="/profile" className='pr-4 hover:text-gray-500 transition-all' >Profile</Link>

                </ul>
            </div>
        </nav>
    )
}

export default Nav