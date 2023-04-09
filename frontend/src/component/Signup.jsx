import React, { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e) => {

        console.log(name, email, password)
    }

    return (
        <>
            <h1 className=' text-4xl text-black'>Register</h1>
            <form className='mx-auto container w-2/4'>
                {/*  */}
                <label className="block mt-2 text-2xl">Name: </label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter name" />
                {/*  */}
                <label className="block mt-2 text-2xl">Email: </label>
                <input type="text" name="name" onChange={(e) => setEmail(e.target.value)} value={email} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter name" />
                {/*  */}
                <label className="block mt-2 text-2xl">Password: </label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter name" />
                <button type="button" onClick={handleInput} className="bg-indigo-500 p-2 rounded-md text-white mt-4 hover:bg-black focus:bg-black">
                    Submit
                </button>
            </form>
        </>
    )
}

export default Signup