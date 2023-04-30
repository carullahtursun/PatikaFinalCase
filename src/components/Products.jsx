/* eslint-disable react/prop-types */
import Product from './Product'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

function Products({ search }) {
    
    // useQuery hook'unu kullanarak API isteğini yap
    const { status, data } = useQuery({
        queryKey: ["starships", search],
        queryFn: () => axios.get(search ? `https://swapi.dev/api/starships/?search=${search}` : "https://swapi.dev/api/starships/"),
    });

    // İstek durumunu kontrol et
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error </p>;

    // Gelen verileri konsola yazdır
    data && console.log(data.data.results);
    
    // Starship bileşenini kullanarak verileri render et
    return (
        <div className=' w-full max-h-[69vh]  rounded-t-lg drop-shadow-2xl  overflow-hidden overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 border-spacing-1 p-3'>
            <div className='grid grid-cols-2 gap-3 p-4 md:grid-cols-3 lg:grid-cols-4   '>
                {
                    data &&
                    data?.data.results.map((starship) => (
                        <Product starship={starship} key={starship.name} />
                    ))
                }
            </div>
        </div>
    );
}

export default Products;