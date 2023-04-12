import React, { useState } from 'react'

const AddProduct = () => {

    /* add data to useState for manipulation */
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("")
    /* VALIDATION */
    const [validationError, setValidationError] = useState(false)

    /* function to add Products */
    const addProduct = async () => {

        /* get userId to know who added the product */
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        /*  */
        const products = { name, price, category, userId, company };/* destructure value data */

        /* validation method */
        if (name.length === 0 || price.length === 0 || category.length === 0 || company.length === 0) {
            setValidationError(true)
        } else {
            await fetch('http://localhost:8080/add-product', {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                    'Access-Control-Allow-Methods': '*',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(products)/* add const destructered */
            }).then(() => {
                alert("Products added")
            }).catch(function (error) {
                console.log(error.message)
            })
        }
    }

    return (
        <div>
            <h1>Add Product</h1>
            <div className="mx-auto container justify-center items-center text-center w-2/4">
                {/* form to add products */}
                <form>

                    <label className="block mt-2 text-2xl">Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name..' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="" />
                    {/* validation for name */}
                    {
                        validationError && name.length <= 0 ? <div className='text-md text-red-700 italic font-bold'>Name should not be empty</div> : ""
                    }
                    <label className="block mt-2 text-2xl">Price: </label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Enter Price..' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="" />
                    {/* validation for price */}
                    {
                        validationError && price.length <= 0 ? <div className='text-md text-red-700 italic font-bold'>Price should not be empty</div> : ""
                    }

                    <label className="block mt-2 text-2xl">Category: </label>
                    <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} placeholder='Enter Category..' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="" />
                    {/* validation for Category */}
                    {
                        validationError && category.length <= 0 ? <div className='text-md text-red-700 italic font-bold'>Category should not be empty</div> : ""
                    }
                    <label className="block mt-2 text-2xl">Company: </label>
                    <input type="text" onChange={(e) => setCompany(e.target.value)} value={company} placeholder='Enter Company..' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" name="" id="" />
                    {/* validation for company */}
                    {
                        validationError && company.length <= 0 ? <div className='text-md text-red-700 italic font-bold'>Company should not be empty</div> : ""
                    }
                    <button type="button" onClick={addProduct} className="bg-indigo-500 p-2 rounded-md text-white mt-4 hover:bg-black focus:bg-black">
                        Add product
                    </button>
                </form>
            </div>

        </div>
    )
}

export default AddProduct