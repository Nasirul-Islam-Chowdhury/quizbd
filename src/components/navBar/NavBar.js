import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        
        <nav className="font-bold bg-slate-700 text-white py-4 px-10 md:px-28 flex justify-between :items-center">
            <div>
                <h1 className='md:text-3xl text-2xl text-start'><Link to={'/'}>Quiz Bd</Link></h1>
            </div>
            <div>
                <ul className={`md:flex md:justify-end gap-10 justify-start  text-xl md:static absolute items-center ${open? 'top-14 text-white md:p-0 p-4 bg-slate-700' : 'top-[-120px]'}`}>
                    <Link to={'/'}>Topics</Link>
                    <hr className='md:hidden mb-3'/>
                    <Link to={'/statistics'}>Statistics</Link>
                    <hr className='md:hidden mb-3'/>
                    <Link to={'/blogs'}>Blogs</Link>
                </ul>
            </div>
            <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden ">
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }

            </div>

        
        </nav>
    );
};

export default NavBar;