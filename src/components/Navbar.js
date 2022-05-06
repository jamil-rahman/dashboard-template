import Searchbar from "./Searchbar";
import UserProfile from "./UserProfile";

export default function Navbar() {
  return (
    <div className="flex justify-around bg-white items-center w-full h-20 mx-auto px-4 text-black border-b-border border-b">
      <h2 className="w-full text-2xl font-body">Starbucks</h2>

      {/* Searchbar */}

      <Searchbar />

      <UserProfile />
    </div>
  );
}
