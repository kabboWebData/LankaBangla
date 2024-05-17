import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MainPage = () => {
    const liList = <>
        {/* <NavLink to={'cDashbord'}>
            <li className='my-4 font-bold'>Customer Dashbord</li>
        </NavLink> */}
        <NavLink to={'cform'}>
            <li className='my-4 font-bold'>Customer form</li>
        </NavLink>
        <NavLink to={'cmDashbord'}>
            <li className='my-4 font-bold'>customer manager</li>
        </NavLink>
        <NavLink to={'shead'}>
            <li className='my-4 font-bold'>Head of sattlement</li>
        </NavLink>
        <NavLink to={'admin'}>
            <li className='my-4 font-bold'>administration</li>
        </NavLink>
        <NavLink to={'testing'}>
            <li className='my-4 font-bold'>Info</li>
        </NavLink>
    </>
    return (
        <>
            <section className='w-[100vw] h-[100vh]'>
                <div className=' h-[100%] grid grid-cols-12'>
                    <div className=' bg-red-500 col-span-2 flex justify-center pt-10'>
                        <ul>
                            {liList}
                        </ul>
                    </div>
                    <div className=' col-span-10 flex pl-10 w-[75vw] '>
                        <section className='w-[100%]'>

                        <Outlet></Outlet>
                        
                        </section>
                    </div>
                </div>
               <h1>
                
               
                </h1>
            </section>
        </>
    );
};

export default MainPage;