import Searchbar from "./Searchbar";
import UserProfile from "./UserProfile";

export default function Navbar() {
  return (
    <div className="flex justify-around bg-white items-center w-full h-20 mx-auto px-4 text-black border-b-border border-b">
      
      <h4 className="w-full font-medium font-body">Starbucks</h4>
      
      
      {/* Searchbar */}
      <div>
      <Searchbar />
      </div>
      <UserProfile />
    </div>
  );
}
