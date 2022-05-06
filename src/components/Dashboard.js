import Searchbar from "./Searchbar";
import SelectOptions from "./SelectOptions";
import Table from "./Table";

export default function Dashboard() {
  return (
    <>
      <Searchbar />
      <Table />
      <div className="flex justify-between mt-5">
        <SelectOptions placeholder="5 items per page" />
        <div className="flex justify-evenly">
          <SelectOptions placeholder="Page 1 of 5" />
          <div className="flex justify-evenly mt-10 ml-4">
            <button className="border border-neutral-500 w-12 text-neutral-800">
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className=" border border-neutral-500 w-12 ml-2 text-neutral-800">
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
