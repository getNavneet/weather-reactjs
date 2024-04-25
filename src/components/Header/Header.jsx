import React from 'react';
import './header.css'
import { Link, NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className=''>
     <nav className=' w-full min-h-14 p-2 ' >
      <div className='flex flex-row justify-center items-center p-2 pr-8'>
        <NavLink to='/home' className='p-2 m-1 rounded bg-slate-500'>Home</NavLink>
        <NavLink to='/about' className='p-2 m-1 rounded bg-slate-500'>About</NavLink>
        <NavLink to='/usage' className='p-2 m-1 rounded bg-slate-500'>Usage</NavLink>
        <NavLink to='/code' className='p-2 m-1 rounded bg-slate-500'>Code</NavLink>
      </div>
     </nav>
    </div>
  );
}
export default Header;
