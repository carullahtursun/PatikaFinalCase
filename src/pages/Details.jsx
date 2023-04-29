import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from "./image";
function Details() {

  const { id } = useParams();
  console.log(id);
  const { status, error, data } = useQuery(['starship', id], async () => {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
    return response.data;
  });

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    toast.error(error.message);
    return null;
  }

  if (!data) {
    toast.error('Starship not found');
    return null;
  }

  const selectedStarship = images.find(image => image.name === data.name);
  return (

    <div className="fixed z-10 inset-0 bg-transparent  overflow-y-auto">
      <div className="flex items-center justify-center w-full min-h-[100vh]">
        <div className='flex justify-center w-full'>

          <article className="flex flex-col md:flex-row lg-flex-row    border-2 rounded-xl w-full md:w-3/4 lg:w-2/3 xl:w-2/3  bg-slate-900 transition hover:shadow-xl">
            

            <div className=" basis-1/2">
              <img
                alt="Guitar"
                src={selectedStarship.img}
                className="aspect-square  "
              />
            </div>

            <div className="flex flex-1 flex-col  justify-between">
              {/* ----------------------------------------- */}
              <div className="flex flex-col   w-full p-3 h-full  rounded-lg  ">
                <div className="grid grid-rows sm:grid h-full  w-full">
                  <div className="flex flex-col border h-full rounded-lg sm:border-l col-span-3">

                    <div className="flex flex-col border-b h-full p-6 sm:border-b items-center  justify-center">
                      <p className=" text-3xl font-bold text-[#0ed3cf] rounded-full uppercase">{data.name}</p>
                    </div>



                    <div className="flex flex-col items-center p-4 ">
                      <div className="flex flex-row items-center border p-4 mb-2 rounded-xl space-x-5">
                        <span className="text-white uppercase">Model: </span>
                        <p className="  text-[#0ed3cf]"> {data.model}</p>
                      </div>

                      <div className="grid grid-cols-3 w-full  gap-4 p-2">

                        <div className="flex flex-col justify-center items-center p-4 border rounded-lg">
                          <span className="text-2xl text-[#0ed3cf] ">{data.length}</span>
                          <p className="text-white  text-xs  uppercase">length</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 border rounded-lg">
                          <span className="text-2xl text-[#0ed3cf] ">{data.consumables}</span>
                          <p className="text-white  text-xs uppercase">consumables</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 border rounded-lg">
                          <span className="text-2xl text-[#0ed3cf] ">{data.cost_in_credits}</span>
                          <p className="text-white  text-xs uppercase">cost_in_credits
                          </p>
                        </div>

                        <div className="flex flex-col justify-center items-center p-4 border rounded-lg">
                          <span className="text-2xl text-[#0ed3cf] ">{data.passengers}</span>
                          <p className="text-white  text-xs uppercase">passengers</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 border rounded-lg">
                          <span className="text-2xl text-[#0ed3cf] ">{data.starship_class}</span>
                          <p className="text-white  text-xs uppercase">starship_class</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 border rounded-lg">
                          <span className="text-2xl text-[#0ed3cf] ">{data.passengers}</span>
                          <p className="text-white  text-xs uppercase">passengers</p>
                        </div>

                      </div>
                    </div>



                    <div className="flex flex-col w-full relative bottom-0">
                      

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

  );
}

export default Details; 