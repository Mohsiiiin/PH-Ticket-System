import React from 'react';

const Navbar = () => {
    return (
         <div className="navbar bg-base-100 shadow-sm px-4 lg:px-14">
  <div className="flex-1">
    <h2 className="text-xl lg:text-2xl font-bold">
      CS — Ticket System
    </h2>
  </div>

  <div className="lg:hidden dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost">
      ☰
    </label>
    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href="#">Home</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Changelog</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Download</a></li>
      <li><a href="#">Contact</a></li>
      <li>
        <a className="text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md">
          + New Ticket
        </a>
      </li>
    </ul>
  </div>

  <div className="hidden lg:flex gap-3">
    <a className="btn btn-ghost">Home</a>
    <a className="btn btn-ghost">FAQ</a>
    <a className="btn btn-ghost">Changelog</a>
    <a className="btn btn-ghost">Blog</a>
    <a className="btn btn-ghost">Download</a>
    <a className="btn btn-ghost">Contact</a>

    <a className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      + New Ticket
    </a>
  </div>
        </div>
    );
};

export default Navbar;