import UserProfile from "./UserProfile";

export default function Navbar() {
  return (
    <div className="flex justify-around bg-white items-center w-full h-20 mx-auto px-4 text-black border-b-border">
      <h2 className="w-full text-2xl font-body">Starbucks</h2>

      {/* Searchbar */}

      <form action="" className="max-w-[392px] sm:invisible md:visible">
        <div className="relative flex items-center text-neutral-800 focus-within:text-neutral-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute ml-3 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            name="search"
            placeholder="Search"
            autocomplete="off"
            aria-label="search bar"
            className="bg-background w-full pr-3 pl-10 py-2 font-body font-semibold placeholder-neutral-800 text-black rounded-2xl border-none ring-2 ring-neutral-800 focus:ring-neutral-800 focus:ring-2"
          />
        </div>
      </form>

      <div>
        <UserProfile />
      </div>
    </div>
  );
}
