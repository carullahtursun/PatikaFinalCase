/* eslint-disable react/prop-types */

function Navbar({setSearch}) {
  return (
    <div className='flex flex-row md justify-center px-32 text-white ' >
      
            <div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-72 h-48' src="../../Star_Wars_Logo.svg-removebg-preview.png" alt="" />
                </div>
                <div className="main-search  rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-gray-200 border-opacity-75">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text" placeholder="search a name or model" className="text-base  bg-transparent focus:outline-none" />
                    <button className=" focus:outline-none">
                        <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
  )
}

export default Navbar