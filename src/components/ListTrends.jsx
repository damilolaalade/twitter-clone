import { SettingsIcon, ChevronBottomIcon } from "./Icons";

const ListTrends = () => {
  return (
    <section className="bg-slate-100 rounded-xl">
      <div className="py-3 px-5 border-b border-gray-600 flex justify-between">
        <h4 className="text-xl font-bold">Trends for you</h4>
        <span className="text-cyan-500">
          <SettingsIcon />
        </span>
      </div>
      <ul>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-slate-300 flex justify-between">
          <div>
            <span className="text-gray-400 text-sm">Trending in Nigeria</span>
            <h6 className="text-lg">2023 Elections</h6>
            <span className="text-gray-400 text-sm">107.7K Tweets</span>
          </div>
          <span>
            <ChevronBottomIcon size="xs" className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-slate-300 flex justify-between">
          <div>
            <span className="text-gray-400 text-sm">
              Entertainment.Trending
            </span>
            <h6 className="text-lg">Super Bowl Half- Hour 2022</h6>
            <span className="text-gray-400 text-sm">76.7K Tweets</span>
          </div>
          <span>
            <ChevronBottomIcon size="xs" className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-slate-300 flex justify-between">
          <div>
            <span className="text-gray-400 text-sm">Technology.Trending</span>
            <h6 className="text-lg">#ReactJs</h6>
            <span className="text-gray-400 text-sm">53.7K Tweets</span>
          </div>
          <span>
            <ChevronBottomIcon size="xs" className="mt-1 text-gray-400" />
          </span>
        </li>
        <li className="px-5 py-2 border-b border-gray-600 hover:bg-slate-300 flex justify-between">
          <div>
            <span className="text-gray-400 text-sm">Music.Trending</span>
            <h6 className="text-lg">#Davido</h6>
            <span className="text-gray-400 text-sm">36.6K Tweets</span>
          </div>
          <span>
            <ChevronBottomIcon size="xs" className="mt-1 text-gray-400" />
          </span>
        </li>
      </ul>
      <div className="px-5 py-4 text-cyan-500">
        <button>Show More</button>
      </div>
    </section>
  );
};

export default ListTrends;
