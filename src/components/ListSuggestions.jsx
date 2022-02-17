//import ButtonSecondary from "./ButtonSecondary";

const ListSuggestions = () => {
  return (
    <section className="bg-slate-100 rounded-xl">
      <div className="py-3 px-5 border-b border-gray-600">
        <h4 className="text-xl font-bold">Who To Follow</h4>
      </div>
      <ul>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-slate-300 flex justify-between items-center">
          <div>
            <img
              className="w-12 h-12"
              src="https://pbs.twimg.com/profile_images/1240091880894992387/DDc3-U-S_400x400.jpg"
            />
          </div>
          <div className="flex-1 pl-2 pr-1">
            <h6 className="font-bold">Ashley Voldermot</h6>
            <span className="text-gray-400 text-sm">@youknowwho</span>
          </div>
          <button className="bg-black text-white px-4 py-1 text-base font-medium rounded-full">
                Follow
              </button>
        </li>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-slate-300 flex justify-between items-center">
          <div>
            <img
              className="w-12 h-12"
              src="https://pbs.twimg.com/profile_images/1011003026772054017/mW8vurwO_400x400.jpg"
            />
          </div>
          <div className="flex-1 pl-2 pr-1">
            <h6 className="font-bold">Pratham Sighn</h6>
            <span className="text-gray-400 text-sm">@pratham</span>
          </div>
          <button className="bg-black text-white px-4 py-1 text-base font-medium rounded-full">
                Follow
              </button>
        </li>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-slate-300 flex justify-between items-center">
          <div>
            <img
              className="w-12 h-12"
              src="https://pbs.twimg.com/profile_images/1272513897447264267/_7KnHbcM_400x400.png"
            />
          </div>
          <div className="flex-1 pl-2 pr-1">
            <h6 className="font-bold">Dev Colored</h6>
            <span className="text-gray-400 text-sm">@dev_colored</span>
          </div>
          <button className="bg-black text-white px-4 py-1 text-base font-medium rounded-full">
                Follow
              </button>
        </li>
      </ul>
      <div className="px-5 py-4 text-cyan-500">
        <button >Show More</button>
      </div>
    </section>
  );
};

export default ListSuggestions;
