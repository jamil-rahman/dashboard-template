import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
function Inventory() {
  return (
    <>
    
    <Navbar />
    <div className='flex min-h-screen '>
    <Sidebar />
    Main content
    </div>

    </>
  )
}

export default Inventory