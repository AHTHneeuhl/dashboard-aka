import FilterByStatus from "./FilterByStatus";
import SortByAmount from "./SortByAmount";
import SortByPlacedOn from "./SortByPlacedOn";

const Filters: React.FC = () => {
  return (
    <div className="grid grid-cols-7 items-center mr-6 gap-1">
      <div className="relative col-start-1 col-end-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm border-0 outline-none focus:outline-none"
          placeholder="Search"
          required
        />
      </div>
      <FilterByStatus />
      <SortByAmount />
      <SortByPlacedOn />
    </div>
  );
};

export default Filters;
