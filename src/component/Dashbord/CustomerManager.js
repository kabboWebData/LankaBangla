import React, { useEffect, useState } from 'react';

const CustomerManager = () => {
    const [provideID, setProvideID] = useState("");
    const [cstlist, setcstlst] = useState([]);
    const [clickdata, setclickdata] = useState([])
    useEffect(() => {
        let url = 'http://localhost:5000/BOmngr'
        fetch(url)
            .then(res => res.json())
            .then(data => setcstlst(data))
    }, [])
    console.log(cstlist)
    // console.log(provideID)
    const SubmitData = () => {
        // console.log()



        const url1 = 'http://localhost:5000/provideBoID'
        (url1,
            {
                headers: {
                    'fetchAccept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ provideID, id: clickdata.customerCode })
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
    }


    return (
        <div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bank Account
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Head of.s
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Enter BO ID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cstlist.map(data => <>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.customerCode}
                                    </th>
                                    <td class="px-6 py-4">
                                        {data.BankACC}
                                    </td>
                                    <td class="px-6 py-4">

                                        {data.customer_email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data?.HeadOfSattlement}
                                    </td>
                                    <td class="px-6 py-4">

                                        {
                                            data.BO_ID === 'not' ? <input type="text" className='border' onBlur={() => setclickdata(data)} onChange={(e) => setProvideID(e.target.value)} /> :
                                             data?.BO_ID
                                        }





                                    </td>
                                </tr>

                            </>)
                        }


                    </tbody>
                </table>
            </div>
            <div className='text-end'>
                <button
                    onClick={SubmitData}
                    type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>

            </div>

        </div>
    );
};

export default CustomerManager;