import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductList = () => {
    /* create variable and function */
    const [products, setProducts] = useState("");
    /* useEffect the function for lifecycle */
    useEffect(() => {
        getProducts()
    }, [])
    /* function to get products put in useEffect */
    const getProducts = async () => {
        const response = await fetch('http://localhost:8080/products');
        const allProducts = await response.json()
        setProducts(allProducts)/* function in useState */
    }

    /*  delete function*/
    const deleteProduct = async (id) => {
        /* fetch with method delete */
        await fetch(`http://localhost:8080/product/${id}`, {
            method: "DELETE"
        }).then(() => {
            alert('Product deleted');
            getProducts() /* function is up it is used to get new new products so no need to refresh */
        }).catch(function (error) {
            console.log(error.message)
        })
    }
    /*search product by name, company, category from api  */
    const searchHandleProduct = async (e) => {
        /* get the value from search input and put it in a variable */
        let key = e.target.value;
        /* if value inside input as key show function for search or else show products */
        if (key) {
            let result = await fetch(`http://localhost:8080/search/${key}`);
            result = await result.json();
            setProducts(result)
        } else {
            getProducts()
        }

    }


    return (
        <div>
            <h1>ProductList</h1>
            <div className="mx-auto container">
                {/* search product input */}
                <input type="text" onChange={searchHandleProduct} className='mt-1 mb-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' name="" id="" placeholder='Search Product' />

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Company
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Operations
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* loop into the products variable containing the data and displays */}
                            {/* if data.length there's no data then show no products found else show the product */}
                            {
                                products.length > 0 ? products && products.map((product, index) => {
                                    return (
                                        <>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                                <th key={product._id} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </th>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    MUR {product.price}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {product.category}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {product.company}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {/* getting the id here to append parameter in delete function */}
                                                    <button type="button" onClick={() => deleteProduct(product._id)} className="bg-red-500 p-2 rounded-md text-white mt-4 hover:bg-black focus:bg-black mr-2">
                                                        Delete
                                                    </button>
                                                    {/* update btn getting the id from the loop and display in url */}
                                                    <button type="button" className="bg-yellow-500 p-2 rounded-md text-white mt-4 hover:bg-black focus:bg-black">
                                                        <Link to={"/update-products/" + product._id}>Update</Link>
                                                    </button>
                                                </td>
                                            </tr >
                                        </>
                                    )
                                }) : <h1 className='text-2xl w-[5rem]'> No products found </h1>
                            }




                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default ProductList