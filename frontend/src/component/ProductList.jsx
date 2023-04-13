import React, { useState, useEffect } from 'react'


const ProductList = () => {
    /* create variable and function */
    const [products, setProducts] = useState("")
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

    return (
        <div>
            <h1>ProductList</h1>
            <div className="mx-auto container">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product Company
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map((product, index) => {
                                    return (
                                        <>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </th>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.name}
                                                </th>
                                                <td class="px-6 py-4">
                                                    MUR {product.price}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {product.category}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {product.company}
                                                </td>
                                            </tr >
                                        </>
                                    )
                                })
                            }




                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default ProductList