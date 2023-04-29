
import Product from './Product'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

function Products({ search }) {
    console.log(search, 'dddd');
    const { status, data } = useQuery({
        queryKey: ["starships", search],
        queryFn: () => axios.get(search ? `https://swapi.dev/api/starships/?search=${search}` : "https://swapi.dev/api/starships/"),
    }
    );

    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error </p>;

    data && console.log(data.data.results);
    return (
        <div className=' w-full max-h-[69vh]  rounded-t-lg drop-shadow-2xl  overflow-hidden overflow-y-scroll border-spacing-1 p-3'>
            <div className='grid grid-cols-2 gap-3 p-4 md:grid-cols-3 lg:grid-cols-4   '>
                {
                    data &&
                    data?.data.results.map((starship) => (
                        <Product starship={starship} key={starship.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products