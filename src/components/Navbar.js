import React from 'react';

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button type="button" className="text-white pr-4">Sign In</button>
        <button type="button" className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ">Sign Out</button>
      </div>
    </div>
  );
}

export default Navbar;
