import { SearchIcon } from "./Icons";

const InputSearch = () => {
  return (
    <div className="group flex items-center bg-slate-300 border border-transparent border-cyan-500 w-full text-white px-4 py-2 font-medium rounded-full">
      <span className="mr-3">
        <SearchIcon size="sm" className="text-cyan-500" />
      </span>
      <input
        type="text"
        placeholder="Search Twitter"
        className="bg-transparent outline-none"
      ></input>
    </div>
  );
};

export default InputSearch;
