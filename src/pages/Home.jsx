import Products from "../components/Products"
import Navbar from "../layout/Navbar"


function Home({ search,setSearch }) {

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <Products search={search} />
    </div>
  )
}

export default Home