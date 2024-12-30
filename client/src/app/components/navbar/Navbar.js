import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex h-14 bg-slate-500 text-white text-xl px-8 items-center justify-between'>
      <div className="head">MyCompiler</div>
      <div className="buttons">
        <div className="login">Login</div>
      </div>
    </div>
  )
}

export default Navbar
