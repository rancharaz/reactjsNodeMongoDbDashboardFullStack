import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {

    /* add data to useState for manipulation */
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("")
    /* getting id from url with useParams */
    const params = useParams()
    const navigate = useNavigate() /* use to go to pages */



    /* useEffect to get the Api function */
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {

        let result = await fetch(`http://localhost:8080/product/${params.id}`);/* get by params id */
        result = await result.json(); /* Resolve as promise  store all data in in result */
        /*    console.table(result); */
        setName(result.name)/* add result.name in parameter to setName for it to appear as value in the input field */
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }


    const updateProduct = async () => {
        let data = { name, price, category, company }
        let result = await fetch(`http://localhost:8080/product/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                "Content-Type": "application/json"
            },
        }).catch(function (error) {
            console.log(error.message)
        })
        result = await result.json();
        console.log(result)
        navigate('/product')
    }

    return (
        <div>
            <h1>Update Product</h1>
            <div className="mx-auto container justify-center items-center text-center w-2/4">
                {/* form to add products */}
                <form>

                    <label className="block mt-2 text-2xl">Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name..' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="" />

                    <label className="block mt-2 text-2xl">Price: </label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Enter Price..' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="" />


                    <label className="block mt-2 text-2xl">Category: </label>
                    <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} placeholder='Enter Category..' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="" />

                    <label className="block mt-2 text-2xl">Company: </label>
                    <input type="text" onChange={(e) => setCompany(e.target.value)} value={company} placeholder='Enter Company..' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="" />

                    <button type="button" onClick={updateProduct} className="bg-indigo-500 p-2 rounded-md text-white mt-4 hover:bg-black focus:bg-black">
                        Update product
                    </button>
                </form>
            </div>

        </div>
    )

}

export default UpdateProduct