import React, { useState } from 'react'

const Login = () => {

    /* getting data and put in useState */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    /* post login */
    const handleLogin = () => {
        console.log(email, password)
    }

    return (
        <div className="container mx-auto justify-center items-center text-center">
            <form className='mt-10'>
                <h1 className='text-4xl'>Login</h1>
                <div className='login mx-auto container w-2/4 mt-6'>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Enter email' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Enter password' />

                </div>
                <button type="button" onClick={handleLogin} className="bg-indigo-500 p-2 rounded-md text-white mt-4 hover:bg-black focus:bg-black">
                    Submit
                </button>
            </form>


        </div>
    )
}

export default Login