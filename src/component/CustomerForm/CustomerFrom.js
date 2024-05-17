import React, { useEffect, useState } from 'react';

const CustomerFrom = () => {
    const [customerDetail, setcustomerDetail] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/customerdetail'
        fetch(url)
            .then(res => res.json())
            .then(data => setcustomerDetail(data))
    }, [])
    console.log(customerDetail)
    return (
        <div >
            <ul className='list-disc'> <li> select the option</li></ul>
            <ol className='list-decimal'>
                <li> <a href="createAc">Create account</a></li>
                <li><a href="cainfo" >Apply for Head of satlement Approve</a> </li>
                <li><a href="cAform"> Customer Account Info.</a></li>
            </ol>
            <section>




                <h1 className='text-center my-10 font-bold font-serif text-2xl'>Find your BO id for Applying customer Relationship Manager </h1>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Customer ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Bank Account
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    BO Aprove
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Head Of S. approve
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customerDetail.map(data => <>


                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {data?.customerCode}

                                        </th>
                                        <td class="px-6 py-4">
                                            {data?.customer_email}
                                        </td>
                                        <td class="px-6 py-4">
                                            {data?.BankACC}


                                        </td>
                                        <td class="px-6 py-4">
                                            {data?.BO_ID}

                                        </td>
                                        <td class="px-6 py-4">
                                            {data?.HeadOfSattlement}
                                        </td>
                                    </tr>

                                </>)
                            }




                            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                            </tr> */}

                        </tbody>
                    </table>
                </div>

            </section>
        </div>
    );
};

export default CustomerFrom;