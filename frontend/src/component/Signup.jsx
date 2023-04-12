import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    /* store data in var and func */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();/* navigate to another age */



    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate("/")
        }
    }, [])


    /*  function to post data */
    const handleInput = async (e) => {
        const users = { name, email, password }/* destructure the data */

        await fetch('http://localhost:8080/register', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                "Content-Type": "application/json"
            },
            /* convert to string */
            body: JSON.stringify(users)

        }).then(() => {
            console.log("User added");
            /* store in localStorage */
            localStorage.setItem("user", JSON.stringify(users));
            /* navigate to homeage */
            navigate('/')
        }).catch(function (error) {
            console.log(error.message)
        })
    }



    return (
        <>
            <h1 className=' text-4xl text-black'>Register</h1>
            <form className='mx-auto container w-2/4'>
                {/*  */}
                <label className="block mt-2 text-2xl">Name: </label>
                {/* function to get the data with the value */}
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter name" />
                {/*  */}
                <label className="block mt-2 text-2xl">Email: </label>
                <input type="text" name="name" onChange={(e) => setEmail(e.target.value)} value={email} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter email" />
                {/*  */}
                <label className="block mt-2 text-2xl">Password: </label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter password" />
                <button type="button" onClick={handleInput} className="bg-indigo-500 p-2 rounded-md text-white mt-4 hover:bg-black focus:bg-black">
                    Submit
                </button>
            </form>
        </>
    )
}

export default Signup