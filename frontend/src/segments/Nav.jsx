import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {

    const auth = localStorage.getItem('user'); /* user's data */
    const navigate = useNavigate();


    /* clear localstorage data to logout */
    const logout = () => {
        localStorage.clear();
        /* navigate to sign-up */
        navigate('/sign-up')
    }
    return (
        <nav className='w-full bg-black h-14 flex'>
            <div className="mx-auto container text-center justify-center items-center flex">
                <div className="logo text-white">
                    <Link to="/" className='pr-4' >LOGO</Link>
                </div>
                <ul className='text-white p-3.5 '>
                    <Link to="/add-products" className='pr-4 hover:text-gray-500 transition-all' >Add Product</Link>
                    <Link to="/update-products" className='pr-4 hover:text-gray-500 transition-all' >Update Product</Link>

                    <Link to="/profile" className='pr-4 hover:text-gray-500 transition-all' >Profile</Link>
                    {/* if auth true hide signup */}
                    {
                        auth ? <Link onClick={logout} to="/sign-up" className='pr-4 hover:text-gray-500 transition-all' >Logout</Link> : <Link to="/sign-up" className='pr-4 hover:text-gray-500 transition-all' >Sign up</Link>
                    }
                    <Link to="/login" className='pr-4 hover:text-gray-500 transition-all' >Login</Link>


                </ul>
            </div>
        </nav>
    )
}

export default Nav