import React, { useEffect, useState } from 'react';

const Headofsatlement = () => {
    const [approve, setapprove] = useState('yes');
    const [data, setdata] = useState([]);
    const submitButton = (id) => {
        console.log({ data, approve })

        const url1 = "http://localhost:5000/HSupdate"
        fetch(url1,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ id, approve })
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })


    }
    useEffect(() => {
        const url = 'http://localhost:5000/HSfech'
        fetch(url)
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])



    console.log(data)

    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                customer ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                JoinAMail
                            </th>


                            <th scope="col" class="px-6 py-3">
                                FirstAMail
                            </th>
                            <th scope="col" class="px-6 py-3">
                                HS Approve
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Update
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(data => <>

                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.customerCode}
                                    </th>
                                    <td class="px-6 py-4">
                                        {data.FEmail}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.JFatherEmail}
                                    </td>


                                    <td class="px-6 py-4">
                                        {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                        {/* <input type="text" className='border' onChange={(e) => setapprove(e.target.value)}  /> */}
                                        <select name="" id="" className='flex' onChange={(e) => setapprove(e.target.value)}  >
                                            <option value="yes">yes</option>
                                            <option value="no">No</option>

                                        </select>
                                    </td>

                                    <td class="px-6 py-4">
                                        {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                        {/* <input type="text" className='border' onChange={(e) => setapprove(e.target.value)}  /> */}
                                        <div className='text-center'>
                                            <button
                                                onClick={() => submitButton(data.customerCode)}
                                                type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Headofsatlement;