/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

import images from "../pages/image"
// eslint-disable-next-line react/prop-types
function Product({ starship }) {
  console.log(images);

  const selectedStarship = images.find(image => image.name === starship.name);
  console.log(selectedStarship);
  return (

    <>
    
      <NavLink
        // eslint-disable-next-line react/prop-types
        to={starship.url.split('/')[5]}
        className="mt-8 text-yellow-400 font-bold">
        <div>

          <div className="group relative block rounded-xl bg-black">
            <img
              alt="Developer"
              src={selectedStarship.img}
              className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Starship
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">{starship.name}</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="text-lg text-white">
                    {/* // eslint-disable-next-line react/prop-types */}
                    {starship.model}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>

  )
}

export default Product