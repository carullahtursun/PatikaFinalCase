import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  console.log(data);

  return (
    <div className="">


      <div className="fixed z-10 inset-0 bg-transparent  overflow-y-auto">
        <div className="flex items-center justify-center min-h-[100vh]">
          {<div className="relative  w-full  mx-auto rounded-md shadow-lg">
            <div className="text-right absolute top-0 right-0 pt-2 pr-2">
            </div>
            <div className="">
              <div className="h-screen">

                <div className="ml-64 h-screen flex flex-col justify-center items-center">
                  <div className="flex flex-row w-3/5 absolute">
                    <div className="w-3/4">
                      <div className=" bg-[#CC3843] h-[60vh] w-full rounded-xl  bg-cover bg-center bg-origin-padding bg-[url('../../loo.png')] z-10">
                        <div className="flex h-full justify-start items-center ">
                          <img src="../../ship.png" className="z-30  h-48  mt-16" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="relative right-64 w-full flex items-center">
                      <div className="photo  bg-slate-900 w-full h-[50vh] rounded-xl z-20">
                        <div className="grid grid-cols-4 h-full">
                          <div className="  col-span-4 col-start-1 h-full text-white">

                            <div className="flex justify-end items-center h-full">



                              <div className="flex flex-col   w-full p-3   rounded-lg  ">
                                <div className="grid grid-rows sm:grid  w-full">
                                  <div className="flex flex-col border  rounded-lg sm:border-l col-span-3">

                                    <div className="flex flex-col border-b  p-6 sm:border-b items-center  justify-center">
                                      <p className="text-3xl font-bold text-[#0ed3cf] rounded-full">{data.name}</p>
                                    </div>



                                    <div className="flex flex-col items-center p-2 ">
                                      <div className="flex flex-row items-center border p-4 rounded-xl space-x-3">
                                        <span className="">Model: </span>
                                        <p className="text-[#0ed3cf]"> {data.model}</p>
                                      </div>

                                      <div className="grid grid-cols-3 w-full  gap-2 p-2">

                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.length}</span>
                                          <p className="text-xs  uppercase">length</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.consumables}</span>
                                          <p className="text-xs uppercase">consumables</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.cost_in_credits}</span>
                                          <p className="text-xs uppercase">cost_in_credits
</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.passengers}</span>
                                          <p className="text-xs uppercase">passengers</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.starship_class}</span>
                                          <p className="text-xs uppercase">starship_class</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.passengers}</span>
                                          <p className="text-xs uppercase">passengers</p>
                                        </div>

                                      </div>
                                    </div>



                                    <div className="flex flex-col w-full relative bottom-0">
                                      <div className="grid grid-cols-3 border-t divide-x text-[#0ed3cf]  bg-gray-50 dark:bg-transparent py-3">
                                        <a
                                          className=" cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                                          <div className="mr-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#0ed3cf"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                                          </div>
                                          Update
                                        </a>
                                        <a className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                                          <div className="mr-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#0ed3cf"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                                          </div>
                                          Remove
                                        </a>
                                        <a className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                                          <div className="mr-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#0ed3cf"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
                                          </div>
                                          View
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>

    </div>
  );
}

export default Details; 