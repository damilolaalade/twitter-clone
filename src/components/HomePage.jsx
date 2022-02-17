import {
  TwitterLogoIcon,
  HomeIcon,
  Explore,
  New,
  BookmarkIcon,
  Notifications,
  MoreIcon,
  Messages,
} from "./Icons";

import CardTweet from "./CardTweet";
import ComposeTweet from "./ComposeTweet";
import ListSuggestions from "./ListSuggestions";
import ListTrends from "./ListTrends";
import InputSearch from "./InputSearch";

const Homepage = () => {
  return (
    <div className="bg-white text-black">
      <div
        className="grid grid-cols-3 mx-74 min-h-screen px-12"
        style={{ gridTemplateColumns: "250px 1fr 350px" }}
      >
        <nav className="fixed">
          <div className="mt-4 mb-8 ml-4 text-cyan-500">
            <TwitterLogoIcon size="xl" />
          </div>
          <ul>
            <li className="mb-3">
              <a className="font-semibold group block">
                <span className="inline-block">
                  <span className="flex items-center group-hover:bg-slate-300 px-4 py-2 rounded-full">
                    <span>
                      <HomeIcon size="lg" className="" />
                    </span>
                    <span className="ml-4 text-lg">Home</span>
                  </span>
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a className="font-semibold group block">
                <span className="inline-block">
                  <span className="flex items-center group-hover:bg-slate-300 px-4 py-2 rounded-full">
                    <span>
                      <Explore size="lg" className="" />
                    </span>
                    <span className="ml-4 text-lg">Explore</span>
                  </span>
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a className="font-semibold group block">
                <span className="inline-block">
                  <span className="flex items-center group-hover:bg-slate-300 px-4 py-2 rounded-full">
                    <span>
                      <Notifications size="lg" className="" />
                    </span>
                    <span className="ml-4 text-lg">Notifications</span>
                  </span>
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a className="font-semibold group block">
                <span className="inline-block">
                  <span className="flex items-center group-hover:bg-slate-300 px-4 py-2 rounded-full">
                    <span>
                      <Messages size="lg" className="" />
                    </span>
                    <span className="ml-4 text-lg">Messages</span>
                  </span>
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a className="font-semibold group block">
                <span className="inline-block">
                  <span className="flex items-center group-hover:bg-slate-300 px-4 py-2 rounded-full">
                    <span>
                      <BookmarkIcon size="xl" className="" />
                    </span>
                    <span className="ml-4 text-lg">Bookmarks</span>
                  </span>
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a className="font-semibold group block">
                <span className="inline-block">
                  <span className="flex items-center group-hover:bg-slate-300 px-4 py-2 rounded-full">
                    <span>
                      <MoreIcon size="xl" className="" />
                    </span>
                    <span className="ml-4 text-lg">More</span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <button className="bg-cyan-500 text-white px-14 py-2 text-xl font-medium rounded-full">
            Tweet
          </button>
        </nav>
        <div>{/* Empty div to prevent sidebar overlap */}</div>
        <main className="min-h-screen border-l border-r border-gray-600">
          <header className="text-xl font-bold flex justify-between px-4 py-3 border-b border-gray-600">
            <span>Home</span>
            <New className="text-cyan-500" />
          </header>
          <ComposeTweet />
          <div className="h-3 bg-gray-900"></div>
          <ul>
            <li className="border-b border-gray-600">
              <CardTweet imageUrl="https://pbs.twimg.com/media/FLyf5WvVIAML9rh?format=jpg&name=small" />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet imageUrl="https://pbs.twimg.com/media/FLyZeBTWQAIIhwT?format=jpg&name=small" />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
          </ul>
        </main>
        <aside className="pl-8 pr-2">
          <div className="mt-2">
            <InputSearch />
          </div>
          <div className="mt-4">
            <ListTrends />
          </div>
          <div className="mt-7">
            <ListSuggestions />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Homepage;
