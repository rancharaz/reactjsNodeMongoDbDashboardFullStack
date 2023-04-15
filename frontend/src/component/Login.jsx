import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    /* getting data and put in useState */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();/* navigate to page hook */

    /* if user true navigate to index / login won't show once login */
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])


    /* post login to api url */
    const handleLogin = async () => {
        console.log(email, password)

        let result = await fetch("http://localhost:8080/login", {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        result = await result.json();
        console.log(result);
        /* if user true from backend navigate to /   */
        /* everything is in the user.auth */
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));/* get user email and password */
            localStorage.setItem("token", JSON.stringify(result.auth));/* get user Jwt */

            navigate("/")

        } else {
            alert('please enter correct details')
        }
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