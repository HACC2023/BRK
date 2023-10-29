import React from 'react'
import Link from "next/link";

interface NavBarType {
  userId: string | null
}

const NavBar: React.FC<NavBarType> = ({userId}) => {
  
  return (
    <div className="navbar bg-primary fixed">
      <div className="flex-1">
        <a className="normal-case">
          <img src='https://www.hpu.edu/cncs/cmdr/img/cmdr-white-lockup-logo.png' width={80} />
        </a>
      </div>
      <div className="flex-none gap-2">
        {userId !== null ? <div className="dropdown dropdown-end">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> :
        <Link href='/signin' className='btn btn-secondary text-white'>Login</Link>}
      </div>
    </div>
  )
}

export default NavBar