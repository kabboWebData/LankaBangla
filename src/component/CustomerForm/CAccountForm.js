import React, { useState } from 'react';

const CAccountForm = () => {
    const [email,setemail]=useState("");
    const [nationality,setnationality]=useState("");
    const [birthdate,setbirthdate]=useState("");
    const [acontNum,setacontNum]=useState("");
    const [ocupation,setocupation]=useState("");
    const [presentaddress,setpresentaddress]=useState("");
    const [permanentaddress,setpermanentaddress]=useState("");
    const [CDBLID,setCDBLID]=useState("");
    const [phnnum,setphnnum]=useState("");
    const [bodID,setbodID]=useState("");
    const [comboValue,setcomboValue]=useState("");
    const [BOtype,setBOtype]=useState("");
    const SubmitData=(event)=>{
        event.preventDefault();
    //     console.log(email.target.value)
    //     console.log(nationality.target.value)
    //     console.log(acontNum.target.value)
    //     console.log(birthdate.target.value)
    //     console.log(ocupation.target.value)
    //     console.log(presentaddress.target.value)
    //     console.log(permanentaddress.target.value)
    //  console.log(phnnum.target.value)
     console.log(BOtype)
    
    }
    
  //  console.log(comboValue.target.value)
    return (
        <div>
            <h1 className='text-2xl text-center mt-5 mb-20'>BO Account Opening FORM</h1>
            <h1>Please complete all details in CAPITAL letters. Please fill all names correctly. All communications shall be sent only to the First Named Account Holder's correspondence address.</h1>
            <section>
                <div>
                    <h1>CDBL ID</h1>
                    <input type="text"  className='border' onChange={setCDBLID}/>
                    <h1>BO ID</h1>
                    <input type="text" className='border' onChange={setbodID}/>
                    <div>
                        <h1>BO Catagory</h1>
                        <select name="BOCategory" id="BOCategory" className='border' onChange={(e)=>setcomboValue(e.target.value)}>
                            <option value="regular">regular</option>
                            <option value="omninbus">omninbus</option>
                            <option value="clearing">clearing</option>
                        </select>
                    </div>



                    <div>
                        <h1>Data of Account open</h1>
                        <select name="BOtype" id="BOtype" className='border' onChange={(e)=>setBOtype(e.target.value)}>
                            <option value="individual">individual</option>
                            <option value="company">company</option>
                            <option value="individual">Mercedes</option>

                        </select>
                    </div>



                </div>

                <div>
                <section>
                    <h1 className='text-2xl pl-8 pt-10 font-bold text-gray-500'>frist applicant</h1>
                    <form className='px-20 py-10'>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                            onChange={setemail}
                            
                            />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>


                        <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                           onChange={setphnnum}
                            
                            />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone number</label>
                        </div>
                           
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                                onChange={setpermanentaddress}
                                />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parmanent Address</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                                onChange={setpresentaddress}
                                />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Present address</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                                onChange={setnationality}
                                
                                />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nationality</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                                onChange={setocupation}
                                />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Occupation</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                                onChange={setbirthdate}
                                />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of Birth</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="" name="" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                                onChange={setacontNum}
                                />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bank account Number</label>
                            </div>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={SubmitData}>Submit</button>
                    </form>
                </section>
                </div>
            </section>

        </div>
    );
};

export default CAccountForm;