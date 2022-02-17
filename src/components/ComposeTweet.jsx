/* Icons */
import {
  ImageIcon,
  GifIcon,
  ChartIcon,
  EmojiIcon,
  CirclePlusIcon,
} from "./Icons";

const ComposeTweet = () => {
  return (
    <div className="flex px-4 py-3">
      <div className="mr-4">
        <img
          className="w-12 h-12"
          src="https://pbs.twimg.com/profile_images/1486856997278474240/-pqvPOL4_400x400.jpg"
        />
      </div>
      <div className="flex-1 ">
        <div>
          <textarea
            className="bg-transparent text-xl outline-none"
            placeholder="What's happening?"
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="flex items-center justify">
          <ul className="flex text-sm text-cyan-500">
            <li className="mr-4">
              <ImageIcon />
            </li>
            <li className="mr-4">
              <GifIcon />
            </li>
            <li className="mr-4">
              <ChartIcon />
            </li>
          </ul>
          <ul className="flex items-center text-sm text-cyan-500">
            <li className="mr-4">
              <CirclePlusIcon />
            </li>
            <li className="mr-4 border border-primary rounded-full p-1">
              <EmojiIcon />
            </li>
            <li>
            <button className="bg-cyan-500 text-white px-4 py-1 text-base font-medium rounded-full">
                Tweet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComposeTweet;
