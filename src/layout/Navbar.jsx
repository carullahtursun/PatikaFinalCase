/* eslint-disable react/prop-types */
import { BiSearch } from 'react-icons/Bi';
function Navbar({setSearch}) {
  return (
    <div className='flex flex-row md justify-center px-32 text-white  ' >
      
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-72 h-48' src="../../Star_Wars_Logo.svg-removebg-preview.png" alt="" />
                </div>
                <div className="main-search  rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-gray-200 border-opacity-75">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text" placeholder="search a name or model" className="text-base  bg-transparent focus:outline-none" />
                    <button className=" focus:outline-none">
                        <BiSearch className='h-6 w-6 text-gray-400' />
                    </button>
                </div>
            </div>

        </div>
  )
}

export default Navbar