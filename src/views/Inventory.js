import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Sidebar from "../components/Sidebar";
function Inventory() {
  return (
    <div className="bg-background">
      <Navbar />
      <div className="flex">
        <div className="lg:flex lg:min-h-screen md:flex md:min-h-screen sm:flex sm:min-h-screen">
          <div className="lg:w-48 md:w-20 bg-background border-r-border border-r">
            <Sidebar />
          </div>
        </div>
        <div className="relavtive w-full">
          <PageTitle title="Inventory" />
          <div className="mt-4 ml-4 p-6 bg-white">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
