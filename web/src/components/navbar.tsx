import { Typography } from 'antd';
import { IEntity } from 'modules/auth/types';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  user?: Partial<IEntity.User>;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => (
  <div className="px-10 bg-slate-200 py-4 ">
    <div className="container mx-auto flex items-center gap-10">
      {user ? (
        <div className="flex items-center gap-4 text-[30px]">
          <Typography className="font-aeonik text-3xl font-bold">Movies</Typography>

          <div className="text-xl">
            <Typography className="text-[20px]">{user.name}</Typography>
          </div>
          <div className="text-xl">
            <button className="text-[20px] text-stone-600 hover:text-stone-800">Logout</button>
          </div>
        </div>
      ) : (
        <div className="flex gap-10 text-[30px]">
          <div className="text-xl">
            <NavLink to="/movies" className="text-stone-600 hover:text-stone-800">
              <Typography className=" font-aeonik text-3xl font-bold">Movies</Typography>
            </NavLink>
          </div>
          <div className="text-xl">
          <NavLink to="/auth/login" className={({ isActive }) => `${isActive ? 'text-stone-900' : ''} text-stone-600 no-underline hover:text-stone-900`}>
              Login
            </NavLink>
          </div>
          <div className="text-xl">
          <NavLink to="/auth/register" className={({ isActive }) => `${isActive ? 'text-stone-900' : ''} text-stone-600 no-underline hover:text-stone-900`}>
              Register
            </NavLink>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Navbar;
